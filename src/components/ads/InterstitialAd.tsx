
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

interface InterstitialAdProps {
  isVisible: boolean;
  onClose: () => void;
  placementId?: string;
  testMode?: boolean;
}

const InterstitialAd = ({ 
  isVisible, 
  onClose, 
  placementId = "YOUR_PLACEMENT_ID",
  testMode = true 
}: InterstitialAdProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (isVisible && testMode && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, countdown, testMode]);

  useEffect(() => {
    if (isVisible) {
      console.log('Test Interstitial Ad would show here');
      console.log('Placement ID:', placementId);
    }
  }, [isVisible, placementId]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white">
        <CardContent className="p-6 text-center">
          <div className="flex justify-between items-start mb-4">
            <div className="text-sm text-gray-500">TEST AD</div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="p-1 h-auto"
              disabled={countdown > 0}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-blue-100 p-8 rounded-lg mb-4">
            <div className="text-lg font-bold text-blue-800 mb-2">
              TEST INTERSTITIAL AD
            </div>
            <div className="text-sm text-blue-600">
              Facebook Audience Network
            </div>
            <div className="text-xs text-blue-500 mt-2">
              Placement ID: {placementId}
            </div>
          </div>

          {countdown > 0 ? (
            <div className="text-sm text-gray-500">
              Ad can be closed in {countdown} seconds
            </div>
          ) : (
            <Button onClick={onClose} className="w-full">
              Close Ad
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InterstitialAd;
