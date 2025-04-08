import { MentorshipStatus, SessionStatus, UserRole } from '../../../model';

export const mockMentorships = [
  {
    id: '1',
    title: 'JavaScript Career Advancement',
    description: 'One-on-one mentorship to help advance your JavaScript career and prepare for senior roles.',
    trainer: {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: UserRole.TRAINER,
      createdAt: '2022-12-01T08:00:00Z',
      courses: [],
      mentorships: []
    },
    student: {
      id: 'u1',
      name: 'Emily Clark',
      email: 'emily.clark@example.com',
      role: UserRole.JOB_SEEKER,
      createdAt: '2023-01-15T10:00:00Z',
      profile: {
        title: 'Frontend Developer',
        summary: 'Passionate frontend developer with 2 years of experience',
        skills: ['JavaScript', 'React', 'CSS'],
        experience: [],
        education: []
      },
      resumes: [],
      applications: [],
      photo: '/placeholder.svg'
    },
    status: MentorshipStatus.IN_PROGRESS,
    startDate: '2023-03-10T14:00:00Z',
    endDate: '2023-06-10T14:00:00Z',
    sessions: [
      {
        id: 's1',
        title: 'Career Goals Assessment',
        description: 'Identifying strengths, weaknesses, and setting career objectives.',
        date: '2023-03-15T15:00:00Z',
        duration: 60,
        status: SessionStatus.COMPLETED,
        notes: 'Emily has strong frontend skills but needs to work on advanced JavaScript concepts.'
      },
      {
        id: 's2',
        title: 'Advanced JavaScript Concepts',
        description: 'Deep dive into closures, prototypes, and async patterns.',
        date: '2023-03-29T15:00:00Z',
        duration: 90,
        status: SessionStatus.COMPLETED,
        notes: 'Covered closures and prototypes. Emily needs more practice with async/await.'
      },
      {
        id: 's3',
        title: 'Portfolio Review',
        description: 'Review and improvement of personal portfolio projects.',
        date: '2023-04-12T15:00:00Z',
        duration: 60,
        status: SessionStatus.SCHEDULED
      }
    ]
  },
  {
    id: '2',
    title: 'Full Stack Development Guidance',
    description: 'Comprehensive mentorship for transitioning from frontend to full stack development.',
    trainer: {
      id: '3',
      name: 'Michael Garcia',
      email: 'michael.garcia@example.com',
      role: UserRole.TRAINER,
      createdAt: '2022-10-20T13:45:00Z',
      courses: [],
      mentorships: []
    },
    student: {
      id: 'u2',
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      role: UserRole.JOB_SEEKER,
      createdAt: '2023-02-01T09:30:00Z',
      profile: {
        title: 'Frontend Developer',
        summary: 'React developer looking to expand into backend technologies',
        skills: ['React', 'JavaScript', 'HTML', 'CSS'],
        experience: [],
        education: []
      },
      resumes: [],
      applications: [],
      photo: '/placeholder.svg'
    },
    status: MentorshipStatus.SCHEDULED,
    startDate: '2023-05-01T10:00:00Z',
    sessions: [
      {
        id: 's1',
        title: 'Backend Fundamentals Introduction',
        description: 'Overview of backend development principles and technologies.',
        date: '2023-05-05T11:00:00Z',
        duration: 90,
        status: SessionStatus.SCHEDULED
      }
    ]
  }
];
