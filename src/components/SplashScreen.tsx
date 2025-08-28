
import { useState, useEffect } from "react";
import { FileText, Sparkles } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center z-50">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-white/20 rounded-3xl flex items-center justify-center animate-float backdrop-blur-sm border border-white/30">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <img 
                src="/lovable-uploads/29e6b189-4803-4f41-8d4f-27f846ae998d.png" 
                alt="ProFile AI Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <FileText className="w-12 h-12 text-primary hidden" />
            </div>
          </div>
          <Sparkles className="w-8 h-8 text-white absolute -top-3 -right-3 animate-pulse" />
          <Sparkles className="w-6 h-6 text-white/70 absolute -bottom-2 -left-2 animate-pulse delay-500" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">ProFile AI</h1>
          <p className="text-white/90 text-xl font-medium">Create Professional Resumes</p>
          <p className="text-white/70 text-sm">AI-Powered Resume Builder</p>
        </div>
        
        <div className="w-80 mx-auto space-y-3">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-white h-full transition-all duration-300 ease-out rounded-full shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-sm font-medium">{progress}% Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
