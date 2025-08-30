
import { useState, useCallback } from 'react';

export const useAds = () => {
  const [showInterstitial, setShowInterstitial] = useState(false);

  const showInterstitialAd = useCallback(() => {
    // Interstitial ad को trigger करने का logic
    console.log('Triggering interstitial ad...');
    setShowInterstitial(true);
  }, []);

  const hideInterstitialAd = useCallback(() => {
    setShowInterstitial(false);
  }, []);

  const loadBannerAd = useCallback((placementId: string) => {
    // Banner ad load करने का logic
    console.log('Loading banner ad:', placementId);
  }, []);

  return {
    showInterstitial,
    showInterstitialAd,
    hideInterstitialAd,
    loadBannerAd
  };
};
