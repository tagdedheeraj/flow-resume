
import { FileText, Menu, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
  showActions?: boolean;
}

const Header = ({ onMenuClick, showActions = false }: HeaderProps) => {
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
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl hero-text">ProFile AI</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#templates" className="text-muted-foreground hover:text-primary transition-colors">Templates</a>
          <a href="#builder" className="text-muted-foreground hover:text-primary transition-colors">Builder</a>
          <a href="#examples" className="text-muted-foreground hover:text-primary transition-colors">Examples</a>
          <a href="#help" className="text-muted-foreground hover:text-primary transition-colors">Help</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
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
