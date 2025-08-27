import React from 'react';

interface TemplatePreviewProps {
  templateId: string;
  templateTitle: string;
}

const TemplatePreview = ({ templateId, templateTitle }: TemplatePreviewProps) => {
  const getTemplateDesign = (id: string) => {
    switch (id) {
      case '1': // Modern Professional
        return (
          <div className="bg-white border rounded-lg p-3 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="border-b-2 border-blue-600 pb-2 md:pb-4">
              <h1 className="text-xl md:text-3xl font-bold text-blue-900">John Doe</h1>
              <p className="text-blue-600 font-semibold text-sm md:text-base">Senior Software Engineer</p>
              <div className="text-xs md:text-sm text-gray-600 mt-2 flex flex-col md:flex-row gap-1 md:gap-4">
                <span>john.doe@email.com</span>
                <span>+1 (555) 123-4567</span>
                <span>New York, NY</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              <div className="md:col-span-2 space-y-3 md:space-y-6">
                <section>
                  <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3 border-b border-blue-200">SUMMARY</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Experienced software engineer with 8+ years developing scalable web applications.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3 border-b border-blue-200">EXPERIENCE</h2>
                  <div className="space-y-2 md:space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Senior Software Engineer</h3>
                      <p className="font-semibold text-blue-600">Tech Innovations Inc.</p>
                      <p className="text-gray-600 mb-1 md:mb-2">Jan 2020 - Present</p>
                      <ul className="text-gray-700 list-disc list-inside space-y-1">
                        <li>Led development of microservices architecture</li>
                        <li>Mentored team of 5 junior developers</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-3 md:space-y-6">
                <section>
                  <h2 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">SKILLS</h2>
                  <div className="space-y-2">
                    {['JavaScript', 'React', 'Node.js', 'Python', 'AWS'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <span className="font-medium">{skill}</span>
                        <div className="flex-1 bg-gray-200 h-1.5 md:h-2 rounded">
                          <div className="bg-blue-600 h-1.5 md:h-2 rounded" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">EDUCATION</h2>
                  <div>
                    <h3 className="font-semibold text-gray-900">Master of Computer Science</h3>
                    <p className="text-blue-600">Stanford University</p>
                    <p className="text-gray-600">2016 - 2018</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case '2': // Creative Designer
        return (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border rounded-lg p-3 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="text-center pb-2 md:pb-4">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-2 md:mb-4"></div>
              <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sarah Wilson</h1>
              <p className="text-purple-600 font-semibold">Creative Designer</p>
              <div className="text-gray-600 mt-1 md:mt-2">
                <p>sarah.wilson@email.com | +1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-6">
              <section className="bg-white/60 rounded-lg p-2 md:p-4">
                <h2 className="text-lg md:text-xl font-bold text-purple-800 mb-2 md:mb-3">✨ CREATIVE SUMMARY</h2>
                <p className="text-gray-700 leading-relaxed">
                  Passionate creative designer with 6+ years of experience in branding and UI/UX design.
                </p>
              </section>

              <section className="bg-white/60 rounded-lg p-2 md:p-4">
                <h2 className="text-lg md:text-xl font-bold text-purple-800 mb-2 md:mb-3">🎨 EXPERIENCE</h2>
                <div className="border-l-4 border-purple-500 pl-2 md:pl-4">
                  <h3 className="font-bold text-gray-900">Senior UX Designer</h3>
                  <p className="font-semibold text-purple-600">Creative Studios</p>
                  <p className="text-gray-600 mb-1 md:mb-2">Mar 2019 - Present</p>
                  <p className="text-gray-700">
                    Led design for 20+ mobile apps with 95% user satisfaction rate.
                  </p>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <section className="bg-white/60 rounded-lg p-2 md:p-4">
                  <h2 className="text-base md:text-lg font-bold text-purple-800 mb-2 md:mb-3">🛠️ SKILLS</h2>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {['Figma', 'Adobe CC', 'Sketch', 'Prototyping'].map((skill) => (
                      <span key={skill} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="bg-white/60 rounded-lg p-2 md:p-4">
                  <h2 className="text-base md:text-lg font-bold text-purple-800 mb-2 md:mb-3">🎓 EDUCATION</h2>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bachelor of Fine Arts</h3>
                    <p className="text-purple-600">Art Institute</p>
                    <p className="text-gray-600">2015 - 2019</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case '3': // Tech Minimalist
        return (
          <div className="bg-gray-50 border rounded-lg p-3 md:p-8 min-h-[400px] md:min-h-[600px] font-mono text-xs md:text-sm">
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
              <header className="border-b-2 border-gray-900 pb-2 md:pb-4">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">ALEX CHEN</h1>
                <p className="text-base md:text-lg text-gray-700 mt-1">Full Stack Developer</p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-600 mt-2">
                  <span>alex.chen@email.com</span>
                  <span>+1.555.456.7890</span>
                  <span>San Francisco, CA</span>
                </div>
              </header>

              <section>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Minimalist-focused developer with 7+ years building clean, efficient web applications.
                </p>
              </section>

              <section>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Experience</h2>
                <div className="space-y-3 md:space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">Senior Developer</h3>
                        <p className="text-gray-600">Minimal Tech Solutions</p>
                      </div>
                      <span className="text-gray-500">2020 - Present</span>
                    </div>
                    <ul className="text-gray-700 space-y-1">
                      <li>→ Built 15+ production applications</li>
                      <li>→ Reduced codebase complexity by 40%</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <section>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Skills</h2>
                  <div className="grid grid-cols-2 gap-1 md:gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Docker', 'AWS'].map((skill) => (
                      <div key={skill} className="bg-gray-900 text-gray-100 px-2 py-1 text-center text-xs">
                        {skill}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Education</h2>
                  <div>
                    <h3 className="font-bold text-gray-900">BS Computer Science</h3>
                    <p className="text-gray-600">UC Berkeley</p>
                    <p className="text-gray-500">2016 - 2020</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case '4': // Executive Elite
        return (
          <div className="bg-white border rounded-lg p-8 min-h-[600px] space-y-6">
            <div className="text-center border-b-4 border-yellow-600 pb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">MICHAEL THOMPSON</h1>
              <p className="text-xl text-yellow-600 font-semibold">Chief Technology Officer</p>
              <div className="text-sm text-gray-600 mt-3 flex justify-center gap-6">
                <span>michael.thompson@email.com</span>
                <span>+1 (555) 321-9876</span>
                <span>Boston, MA</span>
              </div>
            </div>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-600 pl-4">EXECUTIVE SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Visionary technology executive with 15+ years of experience leading digital transformation initiatives. 
                Proven track record of scaling teams from startup to IPO, managing $50M+ technology budgets, 
                and driving innovation in Fortune 500 companies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-600 pl-4">LEADERSHIP EXPERIENCE</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Chief Technology Officer</h3>
                      <p className="text-lg font-semibold text-yellow-600">Enterprise Solutions Corp</p>
                    </div>
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-medium">2018 - Present</span>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-3">
                    <li>• Led digital transformation resulting in 200% revenue growth</li>
                    <li>• Built and managed engineering teams of 100+ across 5 countries</li>
                    <li>• Architected cloud-first infrastructure supporting 10M+ users</li>
                    <li>• Established innovation lab generating 15 patents and 3 breakthrough products</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-600 pl-4">CORE COMPETENCIES</h2>
                <div className="space-y-2">
                  {[
                    'Strategic Technology Leadership',
                    'Digital Transformation',
                    'Team Building & Scaling',
                    'Product Innovation',
                    'Enterprise Architecture',
                    'Mergers & Acquisitions'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-600 pl-4">EDUCATION & CREDENTIALS</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-gray-900">MBA, Technology Management</h3>
                    <p className="text-yellow-600 font-semibold">MIT Sloan School</p>
                    <p className="text-sm text-gray-600">2008</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">MS Computer Science</h3>
                    <p className="text-yellow-600 font-semibold">Carnegie Mellon</p>
                    <p className="text-sm text-gray-600">2006</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white border rounded-lg p-3 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="border-b pb-2 md:pb-4">
              <h2 className="text-xl md:text-2xl font-bold">John Doe</h2>
              <div className="text-muted-foreground space-y-1 mt-2">
                <p>john.doe@email.com</p>
                <p>+1 (555) 123-4567</p>
                <p>New York, NY</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground">
                Experienced professional with 5+ years in the industry.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-primary">Work Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-medium">Senior Developer</h4>
                  <p className="font-medium text-muted-foreground">Tech Company Inc.</p>
                  <p className="text-muted-foreground mb-2">Jan 2020 - Present</p>
                  <p className="text-muted-foreground">
                    Led development of multiple web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gray-100 p-2 md:p-4 rounded-lg">
        <h4 className="font-semibold mb-2 text-center text-sm md:text-base">{templateTitle} Preview</h4>
        <div className="overflow-auto max-h-[500px] md:max-h-[600px]">
          {getTemplateDesign(templateId)}
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;
