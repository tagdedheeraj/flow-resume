
import BannerAd from './ads/BannerAd';
import InterstitialAd from './ads/InterstitialAd';
import { useAds } from '@/hooks/useAds';
import { useEffect } from 'react';

const AdContainer = () => {
  const { showInterstitial, showInterstitialAd, hideInterstitialAd } = useAds();

  // App load होने पर interstitial ad show करें (testing के लिए)
  useEffect(() => {
    const timer = setTimeout(() => {
      showInterstitialAd();
    }, 10000); // 10 seconds बाद ad show होगा

    return () => clearTimeout(timer);
  }, [showInterstitialAd]);

  return (
    <>
      {/* Banner Ad - Bottom of screen */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-2 bg-white shadow-lg">
        <BannerAd 
          placementId="test-banner-placement" 
          testMode={true}
        />
      </div>

      {/* Interstitial Ad */}
      <InterstitialAd
        isVisible={showInterstitial}
        onClose={hideInterstitialAd}
        placementId="test-interstitial-placement"
        testMode={true}
      />
    </>
  );
};

export default AdContainer;
