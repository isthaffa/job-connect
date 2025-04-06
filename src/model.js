export const UserRole = {
    JOB_SEEKER: 'JOB_SEEKER',
    EMPLOYER: 'EMPLOYER',
    TRAINER: 'TRAINER',
    ADMIN: 'ADMIN'
  };
  
  export const JobType = {
    FULL_TIME: 'FULL_TIME',
    PART_TIME: 'PART_TIME',
    CONTRACT: 'CONTRACT',
    INTERNSHIP: 'INTERNSHIP',
    REMOTE: 'REMOTE'
  };
  
  export const JobStatus = {
    ACTIVE: 'ACTIVE',
    CLOSED: 'CLOSED',
    DRAFT: 'DRAFT'
  };
  
  export const ApplicationStatus = {
    APPLIED: 'APPLIED',
    REVIEWING: 'REVIEWING',
    SHORTLISTED: 'SHORTLISTED',
    INTERVIEW: 'INTERVIEW',
    OFFERED: 'OFFERED',
    HIRED: 'HIRED',
    REJECTED: 'REJECTED'
  };
  
  export const CourseLevel = {
    BEGINNER: 'BEGINNER',
    INTERMEDIATE: 'INTERMEDIATE',
    ADVANCED: 'ADVANCED'
  };
  
  export const MaterialType = {
    VIDEO: 'VIDEO',
    DOCUMENT: 'DOCUMENT',
    QUIZ: 'QUIZ'
  };
  
  // Optional example structures for context (not enforced in JS)
  export const defaultUser = {
    id: '',
    name: '',
    email: '',
    role: '',
    createdAt: ''
  };
  
  export const defaultJobSeekerProfile = {
    title: '',
    summary: '',
    skills: [],
    experience: [],
    education: []
  };
  
  export const defaultCompany = {
    id: '',
    name: '',
    description: '',
    location: '',
    industry: '',
    size: '',
    website: '',
    logo: ''
  };
  
  export const defaultJob = {
    id: '',
    title: '',
    company: defaultCompany,
    location: '',
    type: '',
    description: '',
    requirements: [],
    responsibilities: [],
    salary: {
      min: 0,
      max: 0,
      currency: ''
    },
    postedAt: '',
    deadline: '',
    status: ''
  };
  
  export const defaultCourse = {
    id: '',
    title: '',
    description: '',
    category: '',
    level: '',
    duration: 0,
    materials: [],
    price: 0,
    currency: '',
    createdAt: ''
  };
  