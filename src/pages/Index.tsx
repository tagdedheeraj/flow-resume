
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import TemplatesGrid from "@/components/TemplatesGrid";
import ResumeBuilder from "@/components/ResumeBuilder";
import ExportOptions from "@/components/ExportOptions";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("templates");

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleTemplateSelect = (templateId: string) => {
    console.log('Selected template:', templateId);
    setActiveTab('builder');
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'templates':
        return <TemplatesGrid onTemplateSelect={handleTemplateSelect} />;
      case 'builder':
        return <ResumeBuilder />;
      case 'export':
        return <ExportOptions />;
      case 'settings':
        return (
          <div className="container mx-auto px-4 py-6 pb-24">
            <h1 className="text-2xl font-bold hero-text mb-4">Settings</h1>
            <p className="text-muted-foreground">Settings page coming soon...</p>
          </div>
        );
      default:
        return <TemplatesGrid onTemplateSelect={handleTemplateSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <Header showActions={activeTab === 'builder'} />
      
      <main className="animate-fade-in">
        {renderContent()}
      </main>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
