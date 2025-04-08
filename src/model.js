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
  


export const MentorshipStatus = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export const SessionStatus = {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

// Shape definitions (interfaces converted to object shapes)
export const JobShape = {
  id: String,
  title: String,
  company: Object, // Company shape would be defined separately
  location: String,
  type: String, // JobType
  description: String,
  requirements: Array,
  responsibilities: Array,
  salary: Object, // SalaryRange shape
  postedAt: String,
  deadline: String,
  status: String, // JobStatus
  applicationsCount: Number
};

export const SalaryRangeShape = {
  min: Number,
  max: Number,
  currency: String
};

export const JobApplicationShape = {
  id: String,
  job: Object, // Job shape
  resume: Object, // Resume shape
  status: String, // ApplicationStatus
  appliedAt: String,
  candidate: Object // JobSeeker shape (optional)
};

export const CourseShape = {
  id: String,
  title: String,
  description: String,
  category: String,
  level: String, // CourseLevel
  duration: Number,
  materials: Array, // Array of CourseMaterial
  price: Number,
  currency: String,
  createdAt: String,
  enrolledStudents: Number,
  thumbnail: String,
  trainer: Object // Trainer shape
};

export const CourseMaterialShape = {
  id: String,
  title: String,
  type: String, // MaterialType
  url: String
};

export const MentorshipShape = {
  id: String,
  title: String,
  description: String,
  trainer: Object, // Trainer shape
  student: Object, // JobSeeker shape
  status: String, // MentorshipStatus
  startDate: String,
  endDate: String,
  sessions: Array // Array of MentorshipSession
};

export const MentorshipSessionShape = {
  id: String,
  title: String,
  description: String,
  date: String,
  duration: Number,
  status: String, // SessionStatus
  notes: String
};

export const AdminStatsShape = {
  totalUsers: Number,
  totalJobs: Number,
  totalCourses: Number,
  totalApplications: Number,
  newUsersThisMonth: Number,
  newJobsThisMonth: Number
};