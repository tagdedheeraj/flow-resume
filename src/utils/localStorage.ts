
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

const STORAGE_KEY = 'profile_ai_resume_data';

export const saveResumeData = (data: ResumeData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log('Resume data saved successfully');
  } catch (error) {
    console.error('Error saving resume data:', error);
  }
};

export const loadResumeData = (): ResumeData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('Error loading resume data:', error);
    return null;
  }
};

export const clearResumeData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    console.log('Resume data cleared successfully');
  } catch (error) {
    console.error('Error clearing resume data:', error);
  }
};

export const getDefaultResumeData = (): ResumeData => {
  return {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    workExperience: [],
    education: [],
    skills: []
  };
};
