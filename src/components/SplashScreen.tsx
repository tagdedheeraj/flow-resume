
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
    <div className="fixed inset-0 bg-hero-gradient flex items-center justify-center z-50">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-2xl flex items-center justify-center animate-float">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <Sparkles className="w-6 h-6 text-white absolute -top-2 -right-2 animate-pulse-slow" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">ResumeAI</h1>
          <p className="text-white/80 text-lg">Create Professional Resumes</p>
        </div>
        
        <div className="w-64 mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
