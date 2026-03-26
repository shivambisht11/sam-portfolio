export const USER_INFO = {
  name: 'Shivam Singh Bisht',
  firstName: 'Shivam Singh',
  lastName: 'Bisht',
  title: 'Full Stack Software Engineer',
  tagline: 'I build scalable web applications and real-time systems',
  email: 'hello@shivamsinghbisht.com',
  github: 'https://github.com/shivambisht11',
  linkedin: 'https://linkedin.com/in/shivambisht11',
  twitter: 'https://twitter.com/shivambisht11',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Approach', href: '#approach' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERTISE = [
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Frontend + Backend',
    description: 'Building modern, performant web applications using the latest technologies.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets'],
    icon: 'Globe',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    subtitle: 'iOS + Android',
    description: 'Creating cross-platform mobile experiences that feel native and fast.',
    skills: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Push Notifications'],
    icon: 'Smartphone',
  },
];

export const PROJECTS = {
  web: [
    {
      id: 1,
      title: 'NexFlow CRM',
      problem: 'Enterprise sales teams lacked a unified real-time collaboration tool.',
      tech: ['Next.js', 'TRPC', 'Prisma', 'Socket.io'],
      features: ['Real-time activity feed', 'Kanban task management', 'AI lead scoring'],
      github: '#',
      demo: '#',
      architecture: 'Microservices architecture with Node.js gateways and Python worker services for data processing.',
      description: 'NexFlow is a high-performance CRM designed for fast-moving sales teams. It features real-time synchronization across all users, dynamic sales pipelines, and an integrated AI engine that helps prioritize leads based on historical conversion data.',
    },
    {
      id: 2,
      title: 'Titan Analytics',
      problem: 'Processing multi-terabyte datasets was slow and expensive for small companies.',
      tech: ['React', 'D3.js', 'Go', 'ClickHouse'],
      features: ['Sub-second query response', 'Custom dashboard builder', 'Data export'],
      github: '#',
      demo: '#',
      architecture: 'Direct integration with ClickHouse for column-based storage and high-speed aggregation.',
      description: 'Titan Analytics brings enterprise-grade data processing to small and medium businesses. By leveraging Go-based ingestion and ClickHouse storage, it allows users to perform complex analytical queries on millions of rows in real-time.',
    },
  ],
  app: [
    {
      id: 3,
      title: 'HealthSync App',
      problem: 'Patients struggled to track medications and share vital data with doctors.',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'HealthKit'],
      features: ['Medication reminders', 'Vitals tracking', 'Doctor messaging'],
      github: '#',
      demo: '#',
      architecture: 'Encrypted HIPAA-compliant data store with secure peer-to-peer messaging.',
      description: 'HealthSync is a patient-first mobile application that simplifies healthcare management. It integrates with Apple HealthKit and Google Fit to provide a holistic view of patient health, allowing for proactive medical intervention.',
    },
  ],
};

export const ENGINEERING_STEPS = [
  {
    id: 1,
    title: 'System Design & API First',
    description: 'I start by designing robust, scalable API contracts and system architectures that can handle high loads.',
    icon: 'Layers',
  },
  {
    id: 2,
    title: 'Real-time Communication',
    description: 'Implementing low-latency real-time features using WebSockets, WebRTC, and message queues.',
    icon: 'Activity',
  },
  {
    id: 3,
    title: 'Scalable Infrastructure',
    description: 'Deploying containerized services ensuring high availability and fault tolerance.',
    icon: 'Server',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Sarah Johnson',
    role: 'CTO @ TechFlow',
    content: 'The architectural decisions made on our project were top-notch. Scalability was never an issue.',
  },
  {
    id: 2,
    author: 'Michael Chen',
    role: 'Founder @ HealthSync',
    content: 'An absolute professional. The mobile app they built transformed how our patients interact with their health data.',
  },
  {
    id: 3,
    author: 'Elena Rodriguez',
    role: 'Product Manager @ Nexa',
    content: 'Fast, efficient, and great at communicating complex technical concepts.',
  },
  {
    id: 4,
    author: 'David Smith',
    role: 'Engineering Lead @ Alpha',
    content: 'The code quality is exceptional. Very maintainable and followed all the best practices.',
  },
];
