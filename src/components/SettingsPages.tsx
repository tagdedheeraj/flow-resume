import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SettingsPagesProps {
  activePage: string | null;
  onBack: () => void;
}

const SettingsPages = ({ activePage, onBack }: SettingsPagesProps) => {
  const renderPage = () => {
    switch (activePage) {
      case 'help':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Help & FAQ</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How do I create a resume?</h3>
                  <p className="text-muted-foreground text-sm">
                    1. Go to Templates and select your preferred template<br/>
                    2. Click "Use Template" to open the Builder<br/>
                    3. Fill in your personal information, work experience, education, and skills<br/>
                    4. Your data is automatically saved to your device<br/>
                    5. Use the Export section to download your resume in various formats
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How does AI assistance work?</h3>
                  <p className="text-muted-foreground text-sm">
                    This app uses AI assistance for resume content formatting and suggestions. However, users have full control over the final content. 
                    The AI helps with layout optimization and formatting recommendations, but all personal data remains on your device and you decide what to include in your resume.
                    <br/><br/>
                    <strong>Important:</strong> AI suggestions are generated automatically and may not always be accurate. Users should review and edit all content before use.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Is my data safe?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! All your resume data is stored locally on your device. We don't send your personal information to any servers. 
                    Your privacy is our priority.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can I edit templates?</h3>
                  <p className="text-muted-foreground text-sm">
                    Currently, templates have predefined designs, but you can fully customize the content. 
                    We're working on more customization options in future updates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What formats can I export to?</h3>
                  <p className="text-muted-foreground text-sm">
                    You can export your resume in PDF, DOCX, and DOC formats. PDF is recommended for most applications 
                    as it preserves formatting across all devices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Support</h2>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  Need help with ProFile AI? We're here to assist you!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Email: hello@socilet.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Response Time: Within 24 hours</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Common Issues:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Resume not saving: Check if your browser allows local storage</li>
                    <li>• Template preview not loading: Try refreshing the page</li>
                    <li>• Export not working: Ensure you have filled required fields</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Test Ad Information for Development */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-blue-800">Development Ad Testing</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <p><strong>For Developers:</strong> This app includes Facebook Audience Network test ads for development purposes.</p>
                  <p><strong>Test Ad Types:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Banner Ads - Display at bottom of screens</li>
                    <li>Interstitial Ads - Full-screen ads between actions</li>
                  </ul>
                  <p className="text-xs mt-2 bg-blue-100 p-2 rounded">
                    Note: Test ads will only show during development builds and will be replaced with real ads in production.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">AI Usage Disclosure</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <p>
                      <strong>Artificial Intelligence:</strong> ProFile AI uses AI assistance for resume content 
                      formatting and layout suggestions. However, users have full control over the final content. 
                      The AI does not access, store, or transmit your personal information to external servers.
                    </p>
                    <p>
                      <strong>AI Accuracy:</strong> AI suggestions are generated automatically and may not always be accurate. 
                      Users should review and edit all content before use. We recommend carefully checking all AI-generated 
                      content for accuracy and relevance to your specific situation.
                    </p>
                    <p>
                      <strong>User Control:</strong> All AI suggestions are optional, and you can modify or 
                      reject any recommendations. The final resume content is entirely determined by your input.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Data Storage & Privacy</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <p>
                      <strong>Local Storage:</strong> All your resume data (personal information, work experience, 
                      education, and skills) is stored locally on your device using browser localStorage. 
                      This means your data never leaves your device and is not transmitted to our servers.
                    </p>
                    <p>
                      <strong>No Account Required:</strong> ProFile AI works without requiring you to create 
                      an account or provide any personal information to us.
                    </p>
                    <p>
                      <strong>Data Control:</strong> You have complete control over your data. You can clear 
                      all stored information at any time through your browser settings or by using the 
                      clear data option in our app.
                    </p>
                    <p>
                      <strong>Sharing Features:</strong> Sharing options only use your device's native share 
                      functionality and do not transmit data to our servers. When you share via email or 
                      WhatsApp, the data goes directly through your device's built-in sharing capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">What We Don't Collect</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Personal information (names, emails, phone numbers)</li>
                    <li>• Resume content or work history</li>
                    <li>• Location data</li>
                    <li>• Browsing history</li>
                    <li>• Any identifying information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Analytics & Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    We may collect anonymized usage data to improve app performance and user experience. 
                    This data cannot be used to identify you and includes information like page views, 
                    feature usage, and error reports. No personal or resume content is included in this data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">
                    For privacy-related questions or concerns, please contact us at hello@socilet.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Terms of Service</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Usage Agreement</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <p>
                      By using ProFile AI, you agree to use this service for creating professional resumes 
                      and career documents only. The service is provided "as is" without warranties.
                    </p>
                    <p>
                      <strong>Acceptable Use:</strong> Use ProFile AI for legitimate resume creation purposes. 
                      Do not attempt to misuse the service or create fraudulent documents.
                    </p>
                    <p>
                      <strong>Content Ownership:</strong> You retain full ownership of all content you create 
                      using ProFile AI. We claim no rights to your personal information or resume content.
                    </p>
                    <p>
                      <strong>AI Assistance:</strong> The AI features are provided as suggestions and assistance 
                      tools. AI suggestions are generated automatically and may not always be accurate. 
                      You are responsible for reviewing and approving all content in your final resume.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Service Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    While we strive to keep ProFile AI available 24/7, we cannot guarantee uninterrupted service. 
                    We may perform maintenance or updates that temporarily affect availability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Data Sharing & Export</h3>
                  <p className="text-sm text-muted-foreground">
                    Export and sharing features use your device's native capabilities. When you export or share 
                    your resume, the data is processed locally on your device and shared through your device's 
                    built-in sharing functionality (email, messaging apps, etc.). We do not process or store 
                    this data on our servers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Limitation of Liability</h3>
                  <p className="text-sm text-muted-foreground">
                    ProFile AI is provided as a free service to help users create professional resumes. 
                    We are not liable for any outcomes related to your use of resumes created with our service. 
                    Users are responsible for the accuracy and appropriateness of their resume content, especially 
                    when using AI-generated suggestions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">
                    For questions about these terms, please contact us at hello@socilet.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            onClick={onBack}
            variant="outline" 
            size="sm"
            className="btn-secondary"
          >
            ← Back to Settings
          </Button>
        </div>
        
        {renderPage()}
      </div>
    </div>
  );
};

export default SettingsPages;
