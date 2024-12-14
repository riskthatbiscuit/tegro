import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';

export default async function TermsPage() {
  return (
    <div className="max-w-5xl">
      <PrivacyPolicy />
      <TermsConditions />
    </div>
  );
}
