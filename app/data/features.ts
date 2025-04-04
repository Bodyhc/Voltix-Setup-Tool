import { Feature } from "../types";

export const initialFeatures: Feature[] = [
  // Development Features
  {
    id: "typescript",
    name: "TypeScript",
    description: "Static type checking",
    enabled: true,
    category: "development",
    installCommand: "npm install --save-dev typescript @types/node"
  },
  {
    id: "eslint",
    name: "ESLint",
    description: "Code linting and formatting",
    enabled: true,
    category: "development",
    installCommand: "npm install --save-dev eslint"
  },
  {
    id: "prettier",
    name: "Prettier",
    description: "Code formatting",
    enabled: true,
    category: "development",
    installCommand: "npm install --save-dev prettier"
  },
  {
    id: "storybook",
    name: "Storybook",
    description: "UI component development",
    enabled: false,
    category: "development",
    installCommand: "npx storybook@latest init"
  },
  {
    id: "webpack",
    name: "Webpack",
    description: "Advanced bundling configuration",
    enabled: false,
    category: "development",
    installCommand: "npm install --save-dev webpack webpack-cli"
  },
  {
    id: "vite",
    name: "Vite",
    description: "Next generation frontend tooling",
    enabled: false,
    category: "development",
    installCommand: "npm install --save-dev vite"
  },
  {
    id: "pwa",
    name: "PWA Support",
    description: "Progressive Web App capabilities",
    enabled: false,
    category: "development",
    installCommand: "npm install --save-dev vite-plugin-pwa"
  },
  {
    id: "i18n",
    name: "Internationalization",
    description: "Multi-language support", 
    enabled: false,
    category: "development",
    installCommand: "npm install --save-dev i18next react-i18next"
  },

//   // Testing Features
//   { 
//     id: 'testing', 
//     name: 'Testing Setup', 
//     description: 'Vitest and testing utilities', 
//     enabled: false, 
//     category: 'testing',
//     installCommand: "npm install --save-dev vitest"
//   },
//   { 
//     id: 'e2e', 
//     name: 'E2E Testing', 
//     description: 'Cypress for end-to-end testing', 
//     enabled: false, 
//     category: 'testing',
//     installCommand: "npm install --save-dev cypress"
//   },
//   { 
//     id: 'coverage', 
//     name: 'Test Coverage', 
//     description: 'Code coverage reporting', 
//     enabled: false, 
//     category: 'testing',
//     installCommand: "npm install --save-dev @vitest/coverage-v8"
//   },
//   { 
//     id: 'jest', 
//     name: 'Jest', 
//     description: 'Unit testing framework', 
//     enabled: false, 
//     category: 'testing',
//     installCommand: "npm install --save-dev jest @types/jest"
//   },
//   { 
//     id: 'rtl', 
//     name: 'React Testing Library', 
//     description: 'Component testing utilities', 
//     enabled: false, 
//     category: 'testing',
//     installCommand: "npm install --save-dev @testing-library/react @testing-library/jest-dom"
//   },
//   { 
//     id: 'playwright', 
//     name: 'Playwright', 
//     description: 'Cross-browser testing', 
//     enabled: false, 
//     category: 'testing',
//     installCommand: "npm install --save-dev @playwright/test"
//   },

//   // Deployment Features
//   { 
//     id: 'ci', 
//     name: 'CI/CD', 
//     description: 'GitHub Actions workflow', 
//     enabled: false, 
//     category: 'deployment',
//     installCommand: "npm install --save-dev @github/actions"
//   },
//   { 
//     id: 'docker', 
//     name: 'Docker', 
//     description: 'Containerization setup', 
//     enabled: false, 
//     category: 'deployment',
//     installCommand: "npm install --save-dev docker-compose"
//   },
//   { 
//     id: 'kubernetes', 
//     name: 'Kubernetes', 
//     description: 'Container orchestration', 
//     enabled: false, 
//     category: 'deployment',
//     installCommand: "npm install --save-dev kubectl"
//   },
//   { 
//     id: 'aws', 
//     name: 'AWS Setup', 
//     description: 'Amazon Web Services configuration', 
//     enabled: false, 
//     category: 'deployment',
//     installCommand: "npm install --save-dev aws-sdk"
//   },
//   { 
//     id: 'vercel', 
//     name: 'Vercel', 
//     description: 'Vercel deployment setup', 
//     enabled: false, 
//     category: 'deployment',
//     installCommand: "npm install --save-dev vercel"
//   },
//   { 
//     id: 'netlify', 
//     name: 'Netlify', 
//     description: 'Netlify deployment setup', 
//     enabled: false, 
//     category: 'deployment',
//     installCommand: "npm install --save-dev netlify-cli"
//   },

//   // Employment Features
//   { 
//     id: 'resume', 
//     name: 'Resume Builder', 
//     description: 'Developer resume generator', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev resume-builder"
//   },
//   { 
//     id: 'portfolio', 
//     name: 'Portfolio', 
//     description: 'Developer portfolio template', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev portfolio-generator"
//   },
//   { 
//     id: 'jobBoard', 
//     name: 'Job Board', 
//     description: 'Job listing integration', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev job-board-api"
//   },
//   { 
//     id: 'interview', 
//     name: 'Interview Prep', 
//     description: 'Technical interview materials', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev interview-prep"
//   },
//   { 
//     id: 'skills', 
//     name: 'Skills Assessment', 
//     description: 'Technical skills evaluation', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev skills-assessment"
//   },
//   { 
//     id: 'networking', 
//     name: 'Professional Network', 
//     description: 'Developer networking tools', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev professional-network"
//   },
//   { 
//     id: 'mentorship', 
//     name: 'Mentorship', 
//     description: 'Connect with mentors', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev mentorship-platform"
//   },
//   { 
//     id: 'certifications', 
//     name: 'Certifications', 
//     description: 'Professional certification prep', 
//     enabled: false, 
//     category: 'employment',
//     installCommand: "npm install --save-dev certification-prep"
//   }
 ];
