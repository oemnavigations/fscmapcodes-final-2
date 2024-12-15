'use client';

import { useState, useEffect } from 'react';
import { ProductVariant } from '@/lib/shopify/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ProductPrice } from './product-price';

interface ProductVariantsProps {
  variants: ProductVariant[];
  onVariantSelect?: (variant: ProductVariant, vinNumber?: string) => void;
  clearSelections?: boolean;
}

interface VariantSelections {
  [key: string]: string;
}

export function ProductVariants({ variants, onVariantSelect, clearSelections }: ProductVariantsProps) {
  const [selections, setSelections] = useState<VariantSelections>({});
  const [vinNumber, setVinNumber] = useState('');
  const [vinError, setVinError] = useState('');
  const [optionGroups, setOptionGroups] = useState<Map<string, Set<string>>>(new Map());

  // Clear selections when clearSelections prop changes
  useEffect(() => {
    if (clearSelections) {
      setSelections({});
      setVinNumber('');
      setVinError('');
    }
  }, [clearSelections]);

  useEffect(() => {
    const groups = new Map<string, Set<string>>();
    
    variants.forEach(variant => {
      variant.selectedOptions.forEach(option => {
        if (option.name !== 'Title') {
          if (!groups.has(option.name)) {
            groups.set(option.name, new Set());
          }
          groups.get(option.name)?.add(option.value);
        }
      });
    });

    setOptionGroups(groups);
  }, [variants]);

  const validateVinNumber = (vin: string) => {
    if (vin.length !== 7) {
      setVinError('Please enter the last 7 characters of your VIN number');
      return false;
    }
    
    if (!/^[A-Za-z0-9]{7}$/.test(vin)) {
      setVinError('VIN can only contain letters and numbers');
      return false;
    }

    setVinError('');
    return true;
  };

  const getSelectedVariant = () => {
    // If no variants with options exist, return the first variant
    if (variants.length === 1 && variants[0].selectedOptions.every(opt => opt.name === 'Title')) {
      return variants[0];
    }

    // Otherwise find the variant matching the selections
    if (Object.keys(selections).length === 0) return null;

    return variants.find(variant =>
      variant.selectedOptions.every(option => 
        option.name === 'Title' || selections[option.name] === option.value
      )
    );
  };

  const handleOptionChange = (name: string, value: string) => {
    const newSelections = { ...selections, [name]: value };
    setSelections(newSelections);

    const variant = variants.length === 1 ? variants[0] : variants.find(v =>
      v.selectedOptions.every(option => 
        option.name === 'Title' || newSelections[option.name] === option.value
      )
    );

    if (variant && onVariantSelect) {
      onVariantSelect(variant, validateVinNumber(vinNumber) ? vinNumber : undefined);
    }
  };

  const handleVinChange = (value: string) => {
    const upperValue = value.toUpperCase();
    setVinNumber(upperValue);
    if (upperValue) {
      validateVinNumber(upperValue);
    } else {
      setVinError('');
    }

    const variant = getSelectedVariant() || (variants.length === 1 ? variants[0] : null);
    if (variant && onVariantSelect) {
      onVariantSelect(variant, validateVinNumber(upperValue) ? upperValue : undefined);
    }
  };

  return (
    <div className="space-y-6">
      {/* Always show VIN input */}
      <div className="space-y-2">
        <Label className="text-white">Last 7 Characters of VIN Number</Label>
        <Input
          type="text"
          value={vinNumber}
          onChange={(e) => handleVinChange(e.target.value)}
          maxLength={7}
          placeholder="Enter last 7 characters"
          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
        />
        {vinError && (
          <p className="text-red-500 text-sm mt-1">{vinError}</p>
        )}
      </div>

      {/* Only show variant selectors if there are actual options */}
      {Array.from(optionGroups.entries()).map(([optionName, values]) => (
        <div key={optionName} className="space-y-2">
          <Label className="text-white">{optionName}</Label>
          <Select 
            value={selections[optionName] || ''} 
            onValueChange={(value) => handleOptionChange(optionName, value)}
          >
            <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
              <SelectValue placeholder={`Choose ${optionName.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700">
              {Array.from(values).map(value => (
                <SelectItem 
                  key={value} 
                  value={value}
                  className="text-white hover:bg-red-500/20 hover:text-white cursor-pointer"
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}

      {getSelectedVariant() && (
        <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Selected Option:</span>
            <ProductPrice
              amount={getSelectedVariant()!.price.amount}
              className="text-red-500 font-semibold"
            />
          </div>
        </div>
      )}
    </div>
  );
}