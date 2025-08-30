
import { useEffect } from 'react';

interface BannerAdProps {
  placementId?: string;
  testMode?: boolean;
}

const BannerAd = ({ 
  placementId = "YOUR_PLACEMENT_ID", 
  testMode = true 
}: BannerAdProps) => {
  useEffect(() => {
    // Facebook Audience Network Banner Ad Logic
    if (testMode) {
      console.log('Test Banner Ad would show here');
      console.log('Placement ID:', placementId);
    }
  }, [placementId, testMode]);

  // Test mode में visible banner show करते हैं
  if (testMode) {
    return (
      <div className="w-full bg-blue-100 border border-blue-300 p-3 text-center rounded-lg">
        <div className="text-xs text-blue-600 font-medium">
          TEST BANNER AD
        </div>
        <div className="text-xs text-blue-500 mt-1">
          Audience Network Test Advertisement
        </div>
      </div>
    );
  }

  return (
    <div 
      id={`banner-ad-${placementId}`}
      className="w-full min-h-[50px] bg-gray-50 rounded"
    />
  );
};

export default BannerAd;
