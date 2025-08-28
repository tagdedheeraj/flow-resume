import React from 'react';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
  };
  workExperience: Array<{
    id: string;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    graduationYear: string;
    gpa?: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    level: number;
  }>;
  selectedTemplate?: string;
}

interface TemplatePreviewProps {
  templateId: string;
  templateTitle: string;
  resumeData?: ResumeData | null;
  isPreview?: boolean;
}

const TemplatePreview = ({ templateId, templateTitle, resumeData, isPreview = true }: TemplatePreviewProps) => {
  // Use actual user data if available, otherwise use demo data
  const data = resumeData && resumeData.personalInfo.fullName ? resumeData : {
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      address: 'New York, NY',
      summary: 'Experienced professional with 5+ years in the industry. Passionate about delivering high-quality solutions and driving innovation in fast-paced environments.'
    },
    workExperience: [{
      id: '1',
      jobTitle: 'Senior Developer',
      company: 'Tech Company Inc.',
      startDate: '2020',
      endDate: 'Present',
      description: 'Led development of multiple web applications and managed a team of junior developers.'
    }],
    education: [{
      id: '1',
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      graduationYear: '2020'
    }],
    skills: [{
      id: '1',
      name: 'JavaScript',
      level: 90
    }, {
      id: '2',
      name: 'React',
      level: 85
    }, {
      id: '3',
      name: 'Node.js',
      level: 80
    }]
  };

  const getTemplateDesign = (id: string) => {
    const baseClasses = "bg-white rounded-lg p-4 min-h-[400px] text-xs shadow-sm border";
    
    switch (id) {
      case '1': // Modern Professional
        return (
          <div className={`${baseClasses} space-y-4`}>
            <div className="border-b-2 border-blue-600 pb-3">
              <h1 className="text-2xl font-bold text-blue-900 leading-tight">{data.personalInfo.fullName}</h1>
              <p className="text-blue-600 font-semibold text-sm">{data.workExperience[0]?.jobTitle || 'Professional'}</p>
              <div className="text-xs text-gray-600 mt-2 space-y-1">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.address}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-4">
                <section>
                  <h2 className="text-lg font-bold text-blue-900 mb-2 border-b border-blue-200">SUMMARY</h2>
                  <p className="text-gray-700 leading-relaxed text-xs">{data.personalInfo.summary}</p>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-blue-900 mb-2 border-b border-blue-200">EXPERIENCE</h2>
                  <div className="space-y-3">
                    {data.workExperience.map((exp) => (
                      <div key={exp.id}>
                        <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                        <p className="font-semibold text-blue-600">{exp.company}</p>
                        <p className="text-gray-600 mb-1 text-xs">{exp.startDate} - {exp.endDate}</p>
                        <p className="text-gray-700 text-xs">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-4">
                <section>
                  <h2 className="text-base font-bold text-blue-900 mb-2">SKILLS</h2>
                  <div className="space-y-2">
                    {data.skills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1 rounded">
                          <div className="bg-blue-600 h-1 rounded" style={{width: `${skill.level}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-base font-bold text-blue-900 mb-2">EDUCATION</h2>
                  <div className="space-y-2">
                    {data.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-semibold text-gray-900 text-xs">{edu.degree}</h3>
                        <p className="text-blue-600 text-xs">{edu.institution}</p>
                        <p className="text-gray-600 text-xs">{edu.graduationYear}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case '2': // Creative Designer
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-purple-50 to-pink-50 space-y-4`}>
            <div className="text-center pb-3">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                {data.personalInfo.fullName.split(' ').map(name => name[0]).join('')}
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-purple-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Creative Professional'}</p>
              <p className="text-gray-600 mt-1 text-xs">{data.personalInfo.email} | {data.personalInfo.phone}</p>
            </div>
            
            <div className="space-y-4">
              <section className="bg-white/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-purple-800 mb-2">✨ SUMMARY</h2>
                <p className="text-gray-700 leading-relaxed text-xs">{data.personalInfo.summary}</p>
              </section>

              <section className="bg-white/60 rounded-lg p-3">
                <h2 className="text-lg font-bold text-purple-800 mb-2">🎨 EXPERIENCE</h2>
                <div className="space-y-3">
                  {data.workExperience.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-purple-500 pl-3">
                      <h3 className="font-bold text-gray-900 text-xs">{exp.jobTitle}</h3>
                      <p className="font-semibold text-purple-600 text-xs">{exp.company}</p>
                      <p className="text-gray-600 mb-1 text-xs">{exp.startDate} - {exp.endDate}</p>
                      <p className="text-gray-700 text-xs">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-2 gap-3">
                <section className="bg-white/60 rounded-lg p-3">
                  <h2 className="text-base font-bold text-purple-800 mb-2">🛠️ SKILLS</h2>
                  <div className="flex flex-wrap gap-1">
                    {data.skills.map((skill) => (
                      <span key={skill.id} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="bg-white/60 rounded-lg p-3">
                  <h2 className="text-base font-bold text-purple-800 mb-2">🎓 EDUCATION</h2>
                  <div className="space-y-1">
                    {data.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-semibold text-gray-900 text-xs">{edu.degree}</h3>
                        <p className="text-purple-600 text-xs">{edu.institution}</p>
                        <p className="text-gray-600 text-xs">{edu.graduationYear}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case '3': // Tech Minimalist
        return (
          <div className={`${baseClasses} bg-gray-50 font-mono`}>
            <div className="max-w-4xl mx-auto space-y-4">
              <header className="border-b-2 border-gray-900 pb-3">
                <h1 className="text-2xl font-bold text-gray-900 uppercase leading-tight">{data.personalInfo.fullName}</h1>
                <p className="text-lg text-gray-700 mt-1">{data.workExperience[0]?.jobTitle || 'Developer'}</p>
                <div className="flex flex-col sm:flex-row gap-2 text-gray-600 mt-2 text-xs">
                  <span>{data.personalInfo.email}</span>
                  <span>{data.personalInfo.phone}</span>
                  <span>{data.personalInfo.address}</span>
                </div>
              </header>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wider">Summary</h2>
                <p className="text-gray-700 leading-relaxed text-xs">
                  {data.personalInfo.summary || 'Minimalist-focused developer with expertise in clean, efficient solutions.'}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wider">Experience</h2>
                <div className="space-y-3">
                  {data.workExperience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                        <div>
                          <h3 className="font-bold text-gray-900 text-xs">{exp.jobTitle}</h3>
                          <p className="text-gray-600 text-xs">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 text-xs">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="text-gray-700 text-xs">→ {exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case '4': // Executive Elite
        return (
          <div className={`${baseClasses} space-y-4`}>
            <div className="text-center border-b-4 border-yellow-600 pb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-1 uppercase leading-tight">{data.personalInfo.fullName}</h1>
              <p className="text-xl text-yellow-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Executive'}</p>
              <div className="text-gray-600 mt-1 flex flex-col sm:flex-row justify-center gap-2">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.address}</span>
              </div>
            </div>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-600 pl-2">EXECUTIVE SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {data.personalInfo.summary || 'Visionary executive with proven track record of leadership and innovation.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-600 pl-2">EXPERIENCE</h2>
              <div className="space-y-4">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{exp.jobTitle}</h3>
                        <p className="text-lg font-semibold text-yellow-600">{exp.company}</p>
                      </div>
                      <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1 text-xs">• {exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case '5': // Simple Clean
        return (
          <div className={`${baseClasses} space-y-4`}>
            <div className="border-b pb-3">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">{data.personalInfo.fullName}</h1>
              <p className="text-lg text-gray-600 font-medium">{data.workExperience[0]?.jobTitle || 'Professional'}</p>
              <div className="text-gray-500 space-y-1 mt-2 text-xs">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.address}</p>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Professional Summary</h2>
              <p className="text-gray-600 leading-relaxed text-xs">
                {data.personalInfo.summary || 'Experienced professional with expertise in various fields.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">Work Experience</h2>
              <div className="space-y-4">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 pl-3">
                    <h3 className="font-medium text-gray-900 text-xs">{exp.jobTitle}</h3>
                    <p className="font-medium text-gray-600 text-xs">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-1">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-600 text-xs">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case '6': // Academic Scholar
        return (
          <div className={`${baseClasses} space-y-4`}>
            <div className="text-center border-b-2 border-green-600 pb-4">
              <h1 className="text-2xl font-bold text-green-800 leading-tight">{data.personalInfo.fullName}</h1>
              <p className="text-lg text-green-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Academic Professional'}</p>
              <div className="text-gray-600 mt-1 space-y-1 text-xs">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.address}</p>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg font-bold text-green-800 mb-3 border-b border-green-200">ACADEMIC PROFILE</h2>
              <p className="text-gray-700 leading-relaxed text-xs">
                {data.personalInfo.summary || 'Dedicated academic professional with expertise in research and education.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-green-800 mb-3 border-b border-green-200">EXPERIENCE</h2>
              <div className="space-y-3">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-green-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900 text-xs">{exp.jobTitle}</h3>
                    <p className="font-semibold text-green-600 text-xs">{exp.company}</p>
                    <p className="text-gray-600 mb-1 text-xs">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-700 text-xs">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case '7': // Healthcare Pro
        return (
          <div className={`${baseClasses} space-y-4`}>
            <div className="border-b-4 border-red-500 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">+</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-red-800 leading-tight">{data.personalInfo.fullName}</h1>
                  <p className="text-lg text-red-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Healthcare Professional'}</p>
                </div>
              </div>
              <div className="text-gray-600 flex flex-col sm:flex-row gap-2 pl-16 text-xs">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.address}</span>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-1">
                <span className="w-4 h-4 bg-red-500 rounded"></span>
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed text-xs">
                {data.personalInfo.summary || 'Dedicated healthcare professional committed to providing excellent patient care.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-1">
                <span className="w-4 h-4 bg-red-500 rounded"></span>
                CLINICAL EXPERIENCE
              </h2>
              <div className="space-y-3">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-red-50 border-l-4 border-red-400 p-3">
                    <h3 className="font-bold text-gray-900 text-xs">{exp.jobTitle}</h3>
                    <p className="font-semibold text-red-600 text-xs">{exp.company}</p>
                    <p className="text-gray-600 mb-1 text-xs">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-700 text-xs">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case '8': // Finance Expert
        return (
          <div className={`${baseClasses} space-y-4`}>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-lg">
              <h1 className="text-2xl font-bold leading-tight">{data.personalInfo.fullName}</h1>
              <p className="text-lg opacity-90">{data.workExperience[0]?.jobTitle || 'Finance Professional'}</p>
              <div className="text-sm opacity-80 mt-1 flex flex-col sm:flex-row gap-2">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.address}</span>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg font-bold text-green-700 mb-3 border-b-2 border-green-200">FINANCIAL EXPERTISE</h2>
              <p className="text-gray-700 leading-relaxed text-xs">
                {data.personalInfo.summary || 'Experienced finance professional with expertise in financial analysis and strategic planning.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-green-700 mb-3 border-b-2 border-green-200">EXPERIENCE</h2>
              <div className="space-y-3">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <div>
                        <h3 className="font-bold text-gray-900 text-xs">{exp.jobTitle}</h3>
                        <p className="font-semibold text-green-600 text-xs">{exp.company}</p>
                      </div>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-700 text-xs">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return (
          <div className={`${baseClasses} space-y-4`}>
            <div className="border-b pb-3">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">{data.personalInfo.fullName}</h1>
              <p className="text-base text-gray-600">{data.workExperience[0]?.jobTitle || 'Professional'}</p>
              <div className="text-gray-500 space-y-1 mt-2 text-xs">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.address}</p>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Professional Summary</h2>
              <p className="text-gray-600 text-xs">{data.personalInfo.summary || 'Experienced professional with expertise in various fields.'}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">Work Experience</h2>
              <div className="space-y-3">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 pl-3">
                    <h3 className="font-medium text-gray-900 text-xs">{exp.jobTitle}</h3>
                    <p className="font-medium text-gray-600 text-xs">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-1">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-600 text-xs">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {isPreview && (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2 text-center">{templateTitle} Preview</h4>
        </div>
      )}
      <div className="overflow-auto max-h-[600px]">
        {getTemplateDesign(templateId)}
      </div>
    </div>
  );
};

export default TemplatePreview;
