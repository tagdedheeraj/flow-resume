
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import TemplatesGrid from "@/components/TemplatesGrid";
import ResumeBuilder from "@/components/ResumeBuilder";
import ExportOptions from "@/components/ExportOptions";
import SettingsPages from "@/components/SettingsPages";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("templates");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [settingsPage, setSettingsPage] = useState<string | null>(null);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleTemplateSelect = (templateId: string) => {
    console.log('Selected template:', templateId);
    setSelectedTemplate(templateId);
    setActiveTab('builder');
  };

  const handleNavigation = (section: string) => {
    setActiveTab(section);
    setSettingsPage(null);
  };

  const handleSettingsPageOpen = (page: string) => {
    setSettingsPage(page);
  };

  const handleSettingsBack = () => {
    setSettingsPage(null);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const renderContent = () => {
    // If we're in settings and have a specific page open
    if (activeTab === 'settings' && settingsPage) {
      return <SettingsPages activePage={settingsPage} onBack={handleSettingsBack} />;
    }

    switch (activeTab) {
      case 'templates':
        return <TemplatesGrid onTemplateSelect={handleTemplateSelect} />;
      case 'builder':
        return <ResumeBuilder selectedTemplate={selectedTemplate} />;
      case 'export':
        return <ExportOptions />;
      case 'settings':
        return (
          <div className="container mx-auto px-4 py-6 pb-24">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold hero-text">Settings</h1>
                <p className="text-muted-foreground">Customize your ProFile AI experience</p>
              </div>
              
              <div className="grid gap-6">
                <div className="bg-white rounded-lg p-6 border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">App Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Dark Mode</span>
                      <span className="text-muted-foreground">Coming Soon</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Auto-save</span>
                      <span className="text-primary">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Notifications</span>
                      <span className="text-primary">Enabled</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">About ProFile AI</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Version 1.0.0</p>
                    <p>Professional resume builder with AI assistance</p>
                    <p>© 2024 ProFile AI. All rights reserved.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Support</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleSettingsPageOpen('help')}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Help & FAQ
                    </button>
                    <button 
                      onClick={() => handleSettingsPageOpen('contact')}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Contact Support
                    </button>
                    <button 
                      onClick={() => handleSettingsPageOpen('privacy')}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Privacy Policy
                    </button>
                    <button 
                      onClick={() => handleSettingsPageOpen('terms')}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Terms of Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <TemplatesGrid onTemplateSelect={handleTemplateSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <Header 
        showActions={activeTab === 'builder'} 
        onNavigate={handleNavigation}
      />
      
      <main className="animate-fade-in">
        {renderContent()}
      </main>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
