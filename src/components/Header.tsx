
import { FileText, Menu, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
  showActions?: boolean;
  onNavigate?: (section: string) => void;
}

const Header = ({ onMenuClick, showActions = false, onNavigate }: HeaderProps) => {
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-primary/10 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="md:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/29e6b189-4803-4f41-8d4f-27f846ae998d.png" 
                alt="ProFile AI Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-bold text-xl hero-text">ProFile AI</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => handleNavClick('templates')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Templates
          </button>
          <button 
            onClick={() => handleNavClick('builder')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Builder
          </button>
          <button 
            onClick={() => handleNavClick('export')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Export
          </button>
          <button 
            onClick={() => handleNavClick('settings')}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Settings
          </button>
        </nav>
        
        {showActions && (
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="btn-secondary">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button size="sm" className="btn-primary">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
