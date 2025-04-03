import { Feature } from "../types";

export const initialFeatures: Feature[] = [
  // Development Features
  {
    id: "typescript",
    name: "TypeScript",
    description: "Static type checking",
    enabled: true,
    category: "development",
  },
  {
    id: "eslint",
    name: "ESLint",
    description: "Code linting and formatting",
    enabled: true,
    category: "development",
  },
  {
    id: "prettier",
    name: "Prettier",
    description: "Code formatting",
    enabled: true,
    category: "development",
  },
  {
    id: "storybook",
    name: "Storybook",
    description: "UI component development",
    enabled: false,
    category: "development",
  },
  {
    id: "webpack",
    name: "Webpack",
    description: "Advanced bundling configuration",
    enabled: false,
    category: "development",
  },
  {
    id: "vite",
    name: "Vite",
    description: "Next generation frontend tooling",
    enabled: false,
    category: "development",
  },
  {
    id: "pwa",
    name: "PWA Support",
    description: "Progressive Web App capabilities",
    enabled: false,
    category: "development",
  },
  {
    id: "i18n",
    name: "Internationalization",
    description: "Multi-language support",
    enabled: false,
    category: "development",
  },

  // // Testing Features
  // { id: 'testing', name: 'Testing Setup', description: 'Vitest and testing utilities', enabled: false, category: 'testing' },
  // { id: 'e2e', name: 'E2E Testing', description: 'Cypress for end-to-end testing', enabled: false, category: 'testing' },
  // { id: 'coverage', name: 'Test Coverage', description: 'Code coverage reporting', enabled: false, category: 'testing' },
  // { id: 'jest', name: 'Jest', description: 'Unit testing framework', enabled: false, category: 'testing' },
  // { id: 'rtl', name: 'React Testing Library', description: 'Component testing utilities', enabled: false, category: 'testing' },
  // { id: 'playwright', name: 'Playwright', description: 'Cross-browser testing', enabled: false, category: 'testing' },

  // // Deployment Features
  // { id: 'ci', name: 'CI/CD', description: 'GitHub Actions workflow', enabled: false, category: 'deployment' },
  // { id: 'docker', name: 'Docker', description: 'Containerization setup', enabled: false, category: 'deployment' },
  // { id: 'kubernetes', name: 'Kubernetes', description: 'Container orchestration', enabled: false, category: 'deployment' },
  // { id: 'aws', name: 'AWS Setup', description: 'Amazon Web Services configuration', enabled: false, category: 'deployment' },
  // { id: 'vercel', name: 'Vercel', description: 'Vercel deployment setup', enabled: false, category: 'deployment' },
  // { id: 'netlify', name: 'Netlify', description: 'Netlify deployment setup', enabled: false, category: 'deployment' },

  // // Employment Features
  // { id: 'resume', name: 'Resume Builder', description: 'Developer resume generator', enabled: false, category: 'employment' },
  // { id: 'portfolio', name: 'Portfolio', description: 'Developer portfolio template', enabled: false, category: 'employment' },
  // { id: 'jobBoard', name: 'Job Board', description: 'Job listing integration', enabled: false, category: 'employment' },
  // { id: 'interview', name: 'Interview Prep', description: 'Technical interview materials', enabled: false, category: 'employment' },
  // { id: 'skills', name: 'Skills Assessment', description: 'Technical skills evaluation', enabled: false, category: 'employment' },
  // { id: 'networking', name: 'Professional Network', description: 'Developer networking tools', enabled: false, category: 'employment' },
  // { id: 'mentorship', name: 'Mentorship', description: 'Connect with mentors', enabled: false, category: 'employment' },
  // { id: 'certifications', name: 'Certifications', description: 'Professional certification prep', enabled: false, category: 'employment' }
];
