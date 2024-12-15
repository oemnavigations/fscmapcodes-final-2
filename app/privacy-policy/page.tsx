export const dynamic = 'force-static';

import { PrivacyContent } from '@/components/privacy-policy/privacy-content';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <PrivacyContent />
        </div>
      </div>
    </main>
  );
}