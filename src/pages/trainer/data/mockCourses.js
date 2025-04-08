import { CourseLevel, MaterialType, UserRole } from '../../../model';

export const mockCourses = [
  {
    id: '1',
    title: 'Modern JavaScript for Web Developers',
    description: 'Learn the latest JavaScript features and best practices for modern web development. This course covers ES6+, asynchronous programming, and modern JavaScript tooling.',
    category: 'Web Development',
    level: CourseLevel.INTERMEDIATE,
    duration: 20, // hours
    materials: [
      {
        id: 'm1',
        title: 'Introduction to Modern JavaScript',
        type: MaterialType.VIDEO,
        url: '/videos/js-intro.mp4'
      },
      {
        id: 'm2',
        title: 'ES6+ Features Explained',
        type: MaterialType.DOCUMENT,
        url: '/docs/es6-features.pdf'
      },
      {
        id: 'm3',
        title: 'JavaScript Knowledge Check',
        type: MaterialType.QUIZ,
        url: '/quizzes/js-check'
      }
    ],
    price: 49.99,
    currency: 'USD',
    createdAt: '2023-01-15T10:00:00Z',
    enrolledStudents: 143,
    thumbnail: '/placeholder.svg',
    trainer: {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: UserRole.TRAINER,
      createdAt: '2022-12-01T08:00:00Z',
      courses: [],
      mentorships: []
    }
  },
  {
    id: '2',
    title: 'React.js: From Zero to Hero',
    description: 'A comprehensive guide to building modern web applications with React. Learn component-based architecture, state management, hooks, and more.',
    category: 'Frontend Development',
    level: CourseLevel.BEGINNER,
    duration: 25, // hours
    materials: [
      {
        id: 'm1',
        title: 'React Fundamentals',
        type: MaterialType.VIDEO,
        url: '/videos/react-fundamentals.mp4'
      },
      {
        id: 'm2',
        title: 'Component Patterns',
        type: MaterialType.DOCUMENT,
        url: '/docs/component-patterns.pdf'
      }
    ],
    price: 59.99,
    currency: 'USD',
    createdAt: '2023-02-10T14:30:00Z',
    enrolledStudents: 217,
    thumbnail: '/placeholder.svg',
    trainer: {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: UserRole.TRAINER,
      createdAt: '2022-11-15T09:30:00Z',
      courses: [],
      mentorships: []
    }
  },
  {
    id: '3',
    title: 'Advanced Node.js for Backend Developers',
    description: 'Take your Node.js skills to the next level. This course covers advanced topics like streams, performance optimization, microservices, and security.',
    category: 'Backend Development',
    level: CourseLevel.ADVANCED,
    duration: 30, // hours
    materials: [
      {
        id: 'm1',
        title: 'Node.js Architecture Deep Dive',
        type: MaterialType.VIDEO,
        url: '/videos/node-architecture.mp4'
      },
      {
        id: 'm2',
        title: 'Performance Optimization Techniques',
        type: MaterialType.DOCUMENT,
        url: '/docs/node-performance.pdf'
      }
    ],
    price: 79.99,
    currency: 'USD',
    createdAt: '2023-03-05T11:15:00Z',
    enrolledStudents: 98,
    thumbnail: '/placeholder.svg',
    trainer: {
      id: '3',
      name: 'Michael Garcia',
      email: 'michael.garcia@example.com',
      role: UserRole.TRAINER,
      createdAt: '2022-10-20T13:45:00Z',
      courses: [],
      mentorships: []
    }
  }
];
