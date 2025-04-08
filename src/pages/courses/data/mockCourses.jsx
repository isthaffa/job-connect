
const mockTrainer = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@example.com',
  role: 'TRAINER',
  createdAt: '2023-01-15T08:00:00Z',
  courses: [],
  mentorships: []
};

export const mockCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js and more.',
    category: 'Web Development',
    level: 'BEGINNER',
    duration: 48,
    materials: [
      {
        id: '1-1',
        title: 'Introduction to HTML',
        type: 'VIDEO',
        url: '/videos/intro-html.mp4'
      },
      {
        id: '1-2',
        title: 'CSS Fundamentals',
        type: 'VIDEO',
        url: '/videos/css-fundamentals.mp4'
      },
      {
        id: '1-3',
        title: 'JavaScript Basics',
        type: 'DOCUMENT',
        url: '/docs/js-basics.pdf'
      }
    ],
    price: 79.99,
    currency: 'USD',
    createdAt: '2023-02-15T10:00:00Z',
    enrolledStudents: 1250,
    thumbnail: '/placeholder.svg',
    trainer: mockTrainer
  },
  {
    id: '2',
    title: 'Advanced React & Redux',
    description: 'Take your React skills to the next level with advanced concepts, state management with Redux, and performance optimization techniques.',
    category: 'Frontend Development',
    level: 'INTERMEDIATE',
    duration: 32,
    materials: [
      {
        id: '2-1',
        title: 'Advanced React Hooks',
        type: 'VIDEO',
        url: '/videos/advanced-hooks.mp4'
      },
      {
        id: '2-2',
        title: 'Redux Architecture',
        type: 'DOCUMENT',
        url: '/docs/redux-architecture.pdf'
      }
    ],
    price: 89.99,
    currency: 'USD',
    createdAt: '2023-03-10T14:30:00Z',
    enrolledStudents: 850,
    thumbnail: '/placeholder.svg',
    trainer: mockTrainer
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Learn the basics of data science, including statistics, Python programming, data visualization, and machine learning algorithms.',
    category: 'Data Science',
    level: 'BEGINNER',
    duration: 40,
    materials: [
      {
        id: '3-1',
        title: 'Introduction to Python',
        type: 'VIDEO',
        url: '/videos/intro-python.mp4'
      },
      {
        id: '3-2',
        title: 'Data Visualization with Matplotlib',
        type: 'VIDEO',
        url: '/videos/matplotlib.mp4'
      },
      {
        id: '3-3',
        title: 'Machine Learning Basics',
        type: 'QUIZ',
        url: '/quizzes/ml-basics.json'
      }
    ],
    price: 69.99,
    currency: 'USD',
    createdAt: '2023-04-05T09:15:00Z',
    enrolledStudents: 1100,
    thumbnail: '/placeholder.svg',
    trainer: mockTrainer
  },
  {
    id: '4',
    title: 'DevOps Engineering',
    description: 'Master the tools and practices of DevOps including CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes.',
    category: 'DevOps',
    level: 'ADVANCED',
    duration: 36,
    materials: [
      {
        id: '4-1',
        title: 'Docker Fundamentals',
        type: 'VIDEO',
        url: '/videos/docker-fundamentals.mp4'
      },
      {
        id: '4-2',
        title: 'Kubernetes in Production',
        type: 'DOCUMENT',
        url: '/docs/kubernetes-production.pdf'
      }
    ],
    price: 99.99,
    currency: 'USD',
    createdAt: '2023-05-20T11:45:00Z',
    enrolledStudents: 620,
    thumbnail: '/placeholder.svg',
    trainer: mockTrainer
  },
  {
    id: '5',
    title: 'UI/UX Design Principles',
    description: 'Learn the fundamentals of user interface and user experience design, including wireframing, prototyping, and usability testing.',
    category: 'Design',
    level: 'BEGINNER',
    duration: 28,
    materials: [
      {
        id: '5-1',
        title: 'Design Thinking Process',
        type: 'VIDEO',
        url: '/videos/design-thinking.mp4'
      },
      {
        id: '5-2',
        title: 'Prototyping with Figma',
        type: 'VIDEO',
        url: '/videos/figma-prototyping.mp4'
      }
    ],
    price: 59.99,
    currency: 'USD',
    createdAt: '2023-06-12T13:20:00Z',
    enrolledStudents: 930,
    thumbnail: '/placeholder.svg',
    trainer: mockTrainer
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    description: 'Build cross-platform mobile applications using Google\'s Flutter framework and the Dart programming language.',
    category: 'Mobile Development',
    level: 'INTERMEDIATE',
    duration: 38,
    materials: [
      {
        id: '6-1',
        title: 'Dart Programming Basics',
        type: 'VIDEO',
        url: '/videos/dart-basics.mp4'
      },
      {
        id: '6-2',
        title: 'Flutter Widget System',
        type: 'DOCUMENT',
        url: '/docs/flutter-widgets.pdf'
      },
      {
        id: '6-3',
        title: 'State Management',
        type: 'QUIZ',
        url: '/quizzes/state-management.json'
      }
    ],
    price: 84.99,
    currency: 'USD',
    createdAt: '2023-07-08T15:50:00Z',
    enrolledStudents: 780,
    thumbnail: '/placeholder.svg',
    trainer: mockTrainer
  }
];
