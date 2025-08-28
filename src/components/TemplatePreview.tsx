
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
  const data = resumeData || {
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      address: 'New York, NY',
      summary: 'Experienced professional with 5+ years in the industry.'
    },
    workExperience: [{
      id: '1',
      jobTitle: 'Senior Developer',
      company: 'Tech Company Inc.',
      startDate: '2020',
      endDate: 'Present',
      description: 'Led development of multiple web applications.'
    }],
    education: [{
      id: '1',
      degree: 'Bachelor of Computer Science',
      institution: 'University',
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
    switch (id) {
      case '1': // Modern Professional
        return (
          <div className="bg-white border rounded-lg p-3 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="border-b-2 border-blue-600 pb-2 md:pb-4">
              <h1 className="text-xl md:text-3xl font-bold text-blue-900">{data.personalInfo.fullName}</h1>
              <p className="text-blue-600 font-semibold text-sm md:text-base">
                {data.workExperience[0]?.jobTitle || 'Professional'}
              </p>
              <div className="text-xs md:text-sm text-gray-600 mt-2 flex flex-col md:flex-row gap-1 md:gap-4">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.address}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              <div className="md:col-span-2 space-y-3 md:space-y-6">
                <section>
                  <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3 border-b border-blue-200">SUMMARY</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {data.personalInfo.summary || 'Experienced professional with expertise in various technologies.'}
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3 border-b border-blue-200">EXPERIENCE</h2>
                  <div className="space-y-2 md:space-y-4">
                    {data.workExperience.map((exp) => (
                      <div key={exp.id}>
                        <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                        <p className="font-semibold text-blue-600">{exp.company}</p>
                        <p className="text-gray-600 mb-1 md:mb-2">{exp.startDate} - {exp.endDate}</p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-3 md:space-y-6">
                <section>
                  <h2 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">SKILLS</h2>
                  <div className="space-y-2">
                    {data.skills.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex-1 bg-gray-200 h-1.5 md:h-2 rounded">
                          <div className="bg-blue-600 h-1.5 md:h-2 rounded" style={{width: `${skill.level}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">EDUCATION</h2>
                  <div className="space-y-2">
                    {data.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-blue-600">{edu.institution}</p>
                        <p className="text-gray-600">{edu.graduationYear}</p>
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border rounded-lg p-3 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="text-center pb-2 md:pb-4">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-2 md:mb-4 flex items-center justify-center text-white font-bold text-xl">
                {data.personalInfo.fullName.split(' ').map(name => name[0]).join('')}
              </div>
              <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {data.personalInfo.fullName}
              </h1>
              <p className="text-purple-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Creative Professional'}</p>
              <div className="text-gray-600 mt-1 md:mt-2">
                <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-6">
              <section className="bg-white/60 rounded-lg p-2 md:p-4">
                <h2 className="text-lg md:text-xl font-bold text-purple-800 mb-2 md:mb-3">✨ CREATIVE SUMMARY</h2>
                <p className="text-gray-700 leading-relaxed">
                  {data.personalInfo.summary || 'Passionate creative professional with expertise in design and innovation.'}
                </p>
              </section>

              <section className="bg-white/60 rounded-lg p-2 md:p-4">
                <h2 className="text-lg md:text-xl font-bold text-purple-800 mb-2 md:mb-3">🎨 EXPERIENCE</h2>
                <div className="space-y-3">
                  {data.workExperience.map((exp) => (
                    <div key={exp.id} className="border-l-4 border-purple-500 pl-2 md:pl-4">
                      <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                      <p className="font-semibold text-purple-600">{exp.company}</p>
                      <p className="text-gray-600 mb-1 md:mb-2">{exp.startDate} - {exp.endDate}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <section className="bg-white/60 rounded-lg p-2 md:p-4">
                  <h2 className="text-base md:text-lg font-bold text-purple-800 mb-2 md:mb-3">🛠️ SKILLS</h2>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {data.skills.map((skill) => (
                      <span key={skill.id} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="bg-white/60 rounded-lg p-2 md:p-4">
                  <h2 className="text-base md:text-lg font-bold text-purple-800 mb-2 md:mb-3">🎓 EDUCATION</h2>
                  <div className="space-y-2">
                    {data.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-purple-600">{edu.institution}</p>
                        <p className="text-gray-600">{edu.graduationYear}</p>
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
          <div className="bg-gray-50 border rounded-lg p-3 md:p-8 min-h-[400px] md:min-h-[600px] font-mono text-xs md:text-sm">
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
              <header className="border-b-2 border-gray-900 pb-2 md:pb-4">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase">{data.personalInfo.fullName}</h1>
                <p className="text-base md:text-lg text-gray-700 mt-1">{data.workExperience[0]?.jobTitle || 'Developer'}</p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-600 mt-2">
                  <span>{data.personalInfo.email}</span>
                  <span>{data.personalInfo.phone}</span>
                  <span>{data.personalInfo.address}</span>
                </div>
              </header>

              <section>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  {data.personalInfo.summary || 'Minimalist-focused developer with expertise in clean, efficient solutions.'}
                </p>
              </section>

              <section>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Experience</h2>
                <div className="space-y-3 md:space-y-6">
                  {data.workExperience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                          <p className="text-gray-600">{exp.company}</p>
                        </div>
                        <span className="text-gray-500">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="text-gray-700">→ {exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <section>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Skills</h2>
                  <div className="grid grid-cols-2 gap-1 md:gap-2">
                    {data.skills.map((skill) => (
                      <div key={skill.id} className="bg-gray-900 text-gray-100 px-2 py-1 text-center text-xs">
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 uppercase tracking-wider">Education</h2>
                  <div className="space-y-2">
                    {data.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-gray-500">{edu.graduationYear}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case '4': // Executive Elite
        return (
          <div className="bg-white border rounded-lg p-4 md:p-8 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="text-center border-b-4 border-yellow-600 pb-4 md:pb-6">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 uppercase">{data.personalInfo.fullName}</h1>
              <p className="text-lg md:text-xl text-yellow-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Executive'}</p>
              <div className="text-xs md:text-sm text-gray-600 mt-3 flex flex-col md:flex-row justify-center gap-2 md:gap-6">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.address}</span>
              </div>
            </div>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 border-l-4 border-yellow-600 pl-4">EXECUTIVE SUMMARY</h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                {data.personalInfo.summary || 'Visionary executive with proven track record of leadership and innovation.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 border-l-4 border-yellow-600 pl-4">LEADERSHIP EXPERIENCE</h2>
              <div className="space-y-4 md:space-y-6">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{exp.jobTitle}</h3>
                        <p className="text-base md:text-lg font-semibold text-yellow-600">{exp.company}</p>
                      </div>
                      <span className="bg-yellow-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-medium mt-2 md:mt-0 self-start">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2 md:mt-3">• {exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <section>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 border-l-4 border-yellow-600 pl-4">CORE COMPETENCIES</h2>
                <div className="space-y-2">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></div>
                      <span className="text-xs md:text-sm font-medium text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 border-l-4 border-yellow-600 pl-4">EDUCATION & CREDENTIALS</h2>
                <div className="space-y-3">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-yellow-600 font-semibold">{edu.institution}</p>
                      <p className="text-xs md:text-sm text-gray-600">{edu.graduationYear}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case '5': // Simple Clean
        return (
          <div className="bg-white border rounded-lg p-4 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="border-b pb-3 md:pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{data.personalInfo.fullName}</h1>
              <p className="text-base md:text-lg text-gray-600 font-medium">{data.workExperience[0]?.jobTitle || 'Professional'}</p>
              <div className="text-gray-500 space-y-1 mt-2">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.address}</p>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">Professional Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                {data.personalInfo.summary || 'Experienced professional with expertise in various fields.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Work Experience</h2>
              <div className="space-y-4">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900">{exp.jobTitle}</h3>
                    <p className="font-medium text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <section>
                <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Skills</h2>
                <div className="space-y-2">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <div className="w-20 bg-gray-200 h-2 rounded">
                        <div className="bg-gray-600 h-2 rounded" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Education</h2>
                <div className="space-y-2">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.graduationYear}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case '6': // Academic Scholar
        return (
          <div className="bg-white border rounded-lg p-4 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="text-center border-b-2 border-green-600 pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-green-800">{data.personalInfo.fullName}</h1>
              <p className="text-base md:text-lg text-green-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Academic Professional'}</p>
              <div className="text-gray-600 mt-2 space-y-1">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.address}</p>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg md:text-xl font-bold text-green-800 mb-3 border-b border-green-200">ACADEMIC PROFILE</h2>
              <p className="text-gray-700 leading-relaxed">
                {data.personalInfo.summary || 'Dedicated academic professional with expertise in research and education.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-green-800 mb-3 border-b border-green-200">ACADEMIC EXPERIENCE</h2>
              <div className="space-y-3">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-green-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                    <p className="font-semibold text-green-600">{exp.company}</p>
                    <p className="text-gray-600 mb-2">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <section>
                <h2 className="text-base md:text-lg font-bold text-green-800 mb-3">RESEARCH AREAS</h2>
                <div className="space-y-1">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-base md:text-lg font-bold text-green-800 mb-3">EDUCATION</h2>
                <div className="space-y-2">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-green-200 pl-3">
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-green-600">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.graduationYear}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case '7': // Healthcare Pro
        return (
          <div className="bg-white border rounded-lg p-4 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="border-b-4 border-red-500 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">+</span>
                </div>
                <div>
                  <h1 className="text-xl md:text-3xl font-bold text-red-800">{data.personalInfo.fullName}</h1>
                  <p className="text-base md:text-lg text-red-600 font-semibold">{data.workExperience[0]?.jobTitle || 'Healthcare Professional'}</p>
                </div>
              </div>
              <div className="text-gray-600 flex flex-col md:flex-row gap-2 md:gap-4 pl-16 md:pl-20">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.address}</span>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg md:text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                <span className="w-4 h-4 bg-red-500 rounded"></span>
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {data.personalInfo.summary || 'Dedicated healthcare professional committed to providing excellent patient care.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                <span className="w-4 h-4 bg-red-500 rounded"></span>
                CLINICAL EXPERIENCE
              </h2>
              <div className="space-y-3">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-red-50 border-l-4 border-red-400 p-3">
                    <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                    <p className="font-semibold text-red-600">{exp.company}</p>
                    <p className="text-gray-600 mb-2">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <section>
                <h2 className="text-base md:text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded"></span>
                  SPECIALIZATIONS
                </h2>
                <div className="space-y-1">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-base md:text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded"></span>
                  EDUCATION & CERTIFICATIONS
                </h2>
                <div className="space-y-2">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-red-600">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.graduationYear}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case '8': // Finance Expert
        return (
          <div className="bg-white border rounded-lg p-4 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-lg">
              <h1 className="text-2xl md:text-3xl font-bold">{data.personalInfo.fullName}</h1>
              <p className="text-base md:text-lg opacity-90">{data.workExperience[0]?.jobTitle || 'Finance Professional'}</p>
              <div className="text-sm opacity-80 mt-2 flex flex-col md:flex-row gap-2 md:gap-4">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.address}</span>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg md:text-xl font-bold text-green-700 mb-3 border-b-2 border-green-200">FINANCIAL EXPERTISE</h2>
              <p className="text-gray-700 leading-relaxed">
                {data.personalInfo.summary || 'Experienced finance professional with expertise in financial analysis and strategic planning.'}
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-green-700 mb-3 border-b-2 border-green-200">PROFESSIONAL EXPERIENCE</h2>
              <div className="space-y-3">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                        <p className="font-semibold text-green-600">{exp.company}</p>
                      </div>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium mt-2 md:mt-0">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <section>
                <h2 className="text-base md:text-lg font-bold text-green-700 mb-3">CORE COMPETENCIES</h2>
                <div className="grid grid-cols-1 gap-2">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mr-1 ${
                              i < Math.floor(skill.level / 20) ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-base md:text-lg font-bold text-green-700 mb-3">EDUCATION & QUALIFICATIONS</h2>
                <div className="space-y-2">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="bg-blue-50 p-2 rounded">
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.graduationYear}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white border rounded-lg p-4 md:p-6 min-h-[400px] md:min-h-[600px] space-y-4 md:space-y-6 text-xs md:text-sm">
            <div className="border-b pb-3 md:pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{data.personalInfo.fullName}</h1>
              <p className="text-base md:text-lg text-gray-600">{data.workExperience[0]?.jobTitle || 'Professional'}</p>
              <div className="text-gray-500 space-y-1 mt-2">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.address}</p>
              </div>
            </div>
            
            <section>
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Professional Summary</h2>
              <p className="text-gray-600">{data.personalInfo.summary || 'Experienced professional with expertise in various fields.'}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">Work Experience</h2>
              <div className="space-y-4">
                {data.workExperience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900">{exp.jobTitle}</h3>
                    <p className="font-medium text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-gray-600">{exp.description}</p>
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
        <div className="bg-gray-100 p-2 md:p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2 text-center text-sm md:text-base">{templateTitle} Preview</h4>
        </div>
      )}
      <div className="overflow-auto max-h-[500px] md:max-h-[600px]">
        {getTemplateDesign(templateId)}
      </div>
    </div>
  );
};

export default TemplatePreview;
