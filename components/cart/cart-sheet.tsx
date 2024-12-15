'use client';

import { useCart } from '@/lib/hooks/use-cart';
import { formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Minus, Plus, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { createCheckout } from '@/lib/shopify/utils';
import { useState, useEffect } from 'react';

export function CartSheet() {
  const { state, toggleCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Add/remove overflow-hidden class to body when cart is open
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [state.isOpen]);

  const total = state.items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true);
      const checkoutUrl = await createCheckout(state.items);
      clearCart();
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error during checkout:', error);
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={toggleCart}
        className="relative p-2 text-white hover:text-red-400 transition-colors"
      >
        <ShoppingCart className="w-6 h-6" />
        {state.items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {state.items.length}
          </span>
        )}
      </button>

      {/* Cart Sheet */}
      <AnimatePresence>
        {state.isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleCart}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-0 right-0 h-[100dvh] w-full sm:w-96 bg-[#111111] border-l border-gray-800 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-4">
                {state.items.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-4 px-4 pb-safe">
                    {state.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 bg-gray-900/50 p-4 rounded-lg"
                      >
                        <div className="relative w-20 h-20">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-white">
                            {item.title}
                          </h3>
                          {item.vinNumber && (
                            <p className="text-xs text-gray-400 mt-1">
                              VIN: {item.vinNumber}
                            </p>
                          )}
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, Math.max(0, item.quantity - 1))
                                }
                                className="p-1 text-gray-400 hover:text-white"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-white">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="p-1 text-gray-400 hover:text-white"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-400"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 border-t border-gray-800 p-4 space-y-4 bg-[#111111] mt-auto">
                {state.items.length > 0 && (
                  <>
                    <div className="flex items-center justify-between text-white">
                      <span className="font-medium">Total</span>
                      <span className="font-bold">{formatPrice(total)}</span>
                    </div>
                    <Button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-50"
                    >
                      {isCheckingOut ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4 mr-2" />
                      )}
                      {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}