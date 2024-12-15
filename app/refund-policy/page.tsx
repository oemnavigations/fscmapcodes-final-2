export const dynamic = 'force-static';

import { RefundContent } from '@/components/refund-policy/refund-content';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <RefundContent />
        </div>
      </div>
    </main>
  );
}