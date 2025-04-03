export const templates = {
  "remix": {
    "name": "Remix App",
    "description": "Full stack React framework",
    "category": "web",
    "installCommand": "npx create-remix@latest my-app"
  },
  "ecommerce": {
    "name": "E-commerce Platform",
    "description": "Complete online store setup",
    "category": "web",
    "installCommand": "npx create-next-app@latest my-store --typescript --tailwind --eslint"
  },
  "react": {
    "name": "React Application",
    "description": "Modern React with Vite and TailwindCSS",
    "category": "front",
    "installCommand": "npm create vite@latest my-react-app -- --template react-ts"
  },
  "nextjs": {
    "name": "Next.js App",
    "description": "Full-featured Next.js application",
    "category": "front",
    "installCommand": "npx create-next-app@latest my-next-app --typescript --tailwind --eslint"
  },
  "vue": {
    "name": "Vue.js App",
    "description": "Vue 3 with Composition API",
    "category": "front",
    "installCommand": "npm create vue@latest my-vue-app"
  },
  "angular": {
    "name": "Angular Application",
    "description": "Enterprise-ready Angular setup",
    "category": "front",
    "installCommand": "ng new my-angular-app"
  },
  "svelte": {
    "name": "SvelteKit App",
    "description": "Modern Svelte with SSR",
    "category": "front",
    "installCommand": "npm create svelte@latest my-svelte-app"
  },
  "nuxt": {
    "name": "Nuxt.js App",
    "description": "Vue.js framework for SSR",
    "category": "front",
    "installCommand": "npx nuxi@latest init my-nuxt-app"
  },
  "gatsby": {
    "name": "Gatsby Site",
    "description": "Static site generator with React",
    "category": "front",
    "installCommand": "npm init gatsby my-gatsby-site"
  },
  "reactNative": {
    "name": "React Native App",
    "description": "Cross-platform mobile application",
    "category": "mobile",
    "installCommand": "npx react-native@latest init MyApp"
  },
  "flutter": {
    "name": "Flutter App",
    "description": "Cross-platform app with Flutter",
    "category": "mobile",
    "installCommand": "flutter create my_flutter_app"
  },
  "ionic": {
    "name": "Ionic App",
    "description": "Hybrid mobile app with Angular",
    "category": "mobile",
    "installCommand": "npm init @ionic/app my-ionic-app"
  },
  "nativeScript": {
    "name": "NativeScript App",
    "description": "Native mobile apps with JavaScript",
    "category": "mobile",
    "installCommand": "ns create my-ns-app"
  },
  "pwa": {
    "name": "Progressive Web App",
    "description": "Installable web application",
    "category": "mobile",
    "installCommand": "npx create-pwa-app my-pwa-app"
  },
  "capacitor": {
    "name": "Capacitor App",
    "description": "Native runtime for web apps",
    "category": "mobile",
    "installCommand": "npm init @capacitor/app my-capacitor-app"
  },
  "express": {
    "name": "Express.js API",
    "description": "Node.js API with Express",
    "category": "backend",
    "installCommand": "npx express-generator my-express-api"
  },
  "nestjs": {
    "name": "NestJS Application",
    "description": "Progressive Node.js framework",
    "category": "backend",
    "installCommand": "npx @nestjs/cli new my-nest-app"
  },
  "fastify": {
    "name": "Fastify API",
    "description": "Fast and low overhead web framework",
    "category": "backend",
    "installCommand": "npm init fastify my-fastify-api"
  },
  "graphql": {
    "name": "GraphQL API",
    "description": "Apollo Server with TypeScript",
    "category": "backend",
    "installCommand": "npm init @apollo/server my-graphql-api"
  },
  "microservices": {
    "name": "Microservices",
    "description": "Microservices architecture setup",
    "category": "backend",
    "installCommand": "npx create-microservices-app my-microservices"
  },
  "django": {
    "name": "Django API",
    "description": "Python web framework",
    "category": "backend",
    "installCommand": "pip install django"
  },
  "dotnet": {
    "name": ".NET Core API",
    "description": "C# web API with .NET Core",
    "category": "backend",
    "installCommand": "dotnet new webapi -n my-dotnet-api"
  },
  "golang": {
    "name": "Go API",
    "description": "Fast and efficient Go backend",
    "category": "backend",
    "installCommand": "go mod init my-go-api" 
  },
  "dashboard": {
    "name": "Admin Dashboard",
    "description": "Enterprise admin panel",
    "category": "enterprise",
    "installCommand": "npx create-admin-dashboard my-admin-dashboard"
  },
  "saas": {
    "name": "SaaS Platform",
    "description": "Software as a Service starter",
    "category": "enterprise",
    "installCommand": "npx create-saas-app my-saas-app"
  },
  "ai": {
    "name": "AI Application",
    "description": "AI-powered application setup",
    "category": "enterprise",
    "installCommand": "npx create-ai-app my-ai-app"
  },
  "crm": {
    "name": "CRM System",
    "description": "Customer relationship management",
    "category": "enterprise",
    "installCommand": "npx create-crm-app my-crm-app"
  },
  "analytics": {
    "name": "Analytics Platform",
    "description": "Data analytics dashboard",
    "category": "enterprise",
    "installCommand": "npx create-analytics-app my-analytics-app"
  },
  "security": {
    "name": "Security Suite",
    "description": "Enterprise security setup",
    "category": "enterprise",
    "installCommand": "npx create-security-app my-security-app"
  }
  };
  
  export const features = {
    "typescript": {
      "name": "TypeScript",
      "description": "Static type checking",
      "category": "development",
      "files": ["tsconfig.json"],
      "dependencies": { "typescript": "^4.5.4" },
      "installCommand": "npm install --save-dev typescript @types/node"
    },
    "eslint": {
      "name": "ESLint",
      "description": "Code linting and formatting",
      "category": "development",
      "files": [".eslintrc.js"],
      "dependencies": {
        "eslint": "^8.0.1"
      },
      "installCommand": "npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin"
    },
    "prettier": {
      "name": "Prettier",
      "description": "Code formatting",
      "category": "development",
      "files": [".prettierrc"],
      "dependencies": {
        "prettier": "^2.3.2"
      },
      "installCommand": "npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier"
    },
    "storybook": {
      "name": "Storybook",
      "description": "UI component development",
      "category": "development",
      "files": [".storybook/main.js"],
      "dependencies": {
        "@storybook/react": "^6.4.0"
      },
      "installCommand": "npx storybook@latest init"
    },
    "webpack": {
      "name": "Webpack",
      "description": "Advanced bundling configuration",
      "category": "development",
      "files": ["webpack.config.js"],
      "dependencies": {
        "webpack": "^5.0.0"
      },
      "installCommand": "npm install --save-dev webpack webpack-cli webpack-dev-server"
    },
    "vite": {
      "name": "Vite",
      "description": "Next generation frontend tooling",
      "category": "development",
      "files": ["vite.config.js"],
      "dependencies": {
        "vite": "^2.9.9"
      },
      "installCommand": "npm install --save-dev vite @vitejs/plugin-react"
    },
    "pwa": {
      "name": "PWA Support",
      "description": "Progressive Web App capabilities",
      "category": "development",
      "files": ["public/manifest.json", "service-worker.js"],
      "dependencies": {
        "workbox-build": "^6.1.0"
      },
      "installCommand": "npm install --save-dev workbox-build"
    },
    "i18n": {
      "name": "Internationalization",
      "description": "Multi-language support",
      "category": "development",
      "files": ["i18n.config.js"],
      "dependencies": {
        "i18next": "^21.6.3",
        "react-i18next": "^11.15.0"
      },
      "installCommand": "npm install i18next react-i18next"
    },
    "tailwind": {
      "name": "Tailwind CSS",
      "description": "Utility-first CSS framework",
      "category": "styling",
      "installCommand": "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p"
    },
    "sass": {
      "name": "SASS",
      "description": "CSS preprocessor",
      "category": "styling",
      "installCommand": "npm install --save-dev sass"
    },
    "styled-components": {
      "name": "Styled Components",
      "description": "CSS-in-JS styling",
      "category": "styling",
      "installCommand": "npm install styled-components @types/styled-components"
    },
    "material-ui": {
      "name": "Material UI",
      "description": "React UI framework",
      "category": "styling",
      "installCommand": "npm install @mui/material @emotion/react @emotion/styled"
    },
    "chakra-ui": {
      "name": "Chakra UI",
      "description": "Modern component library",
      "category": "styling",
      "installCommand": "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion"
    },
    "jest": {
      "name": "Jest",
      "description": "Testing framework",
      "category": "testing",
      "installCommand": "npm install --save-dev jest @types/jest ts-jest"
    },
    "cypress": {
      "name": "Cypress",
      "description": "End-to-end testing",
      "category": "testing",
      "installCommand": "npm install --save-dev cypress"
    },
    "react-testing-library": {
      "name": "React Testing Library",
      "description": "React component testing",
      "category": "testing",
      "installCommand": "npm install --save-dev @testing-library/react @testing-library/jest-dom"
    },
    "redux": {
      "name": "Redux",
      "description": "State management",
      "category": "state",
      "installCommand": "npm install @reduxjs/toolkit react-redux"
    },
    "mobx": {
      "name": "MobX",
      "description": "State management",
      "category": "state",
      "installCommand": "npm install mobx mobx-react-lite"
    },
    "zustand": {
      "name": "Zustand",
      "description": "Lightweight state management",
      "category": "state",
      "installCommand": "npm install zustand"
    },
    "axios": {
      "name": "Axios",
      "description": "HTTP client",
      "category": "http",
      "installCommand": "npm install axios"
    },
    "react-query": {
      "name": "React Query",
      "description": "Data fetching and caching",
      "category": "http",
      "installCommand": "npm install @tanstack/react-query"
    },
    "socket-io": {
      "name": "Socket.IO",
      "description": "Real-time communication",
      "category": "http",
      "installCommand": "npm install socket.io-client"
    }
    };