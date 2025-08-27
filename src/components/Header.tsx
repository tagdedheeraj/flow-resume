
import { FileText, Menu, Download, Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  onMenuClick?: () => void;
  showActions?: boolean;
  onNavigate?: (section: string) => void;
}

const Header = ({ onMenuClick, showActions = false, onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-primary/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={() => handleNavClick('templates')}
            >
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
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-2 rounded-md"
            >
              Templates
            </button>
            <button 
              onClick={() => handleNavClick('builder')}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-2 rounded-md"
            >
              Builder
            </button>
            <button 
              onClick={() => handleNavClick('export')}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-2 rounded-md"
            >
              Export
            </button>
            <button 
              onClick={() => handleNavClick('settings')}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-2 rounded-md"
            >
              Settings
            </button>
          </nav>
          
          {showActions && (
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="btn-secondary hidden sm:flex">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-primary/10 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <button 
                onClick={() => handleNavClick('templates')}
                className="w-full text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-3 rounded-md flex items-center gap-3"
              >
                <FileText className="w-5 h-5" />
                Templates
              </button>
              <button 
                onClick={() => handleNavClick('builder')}
                className="w-full text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-3 rounded-md flex items-center gap-3"
              >
                <FileText className="w-5 h-5" />
                Builder
              </button>
              <button 
                onClick={() => handleNavClick('export')}
                className="w-full text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-3 rounded-md flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Export
              </button>
              <button 
                onClick={() => handleNavClick('settings')}
                className="w-full text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium hover:bg-primary/5 px-3 py-3 rounded-md flex items-center gap-3"
              >
                <FileText className="w-5 h-5" />
                Settings
              </button>
            </nav>
          </div>
        )}
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
