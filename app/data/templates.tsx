import {
  Code2,
  Globe,
  Store,
  Laptop,
  PenTool,
  Server,
  Database,
  Building2,
  Blocks,
  Cloud,
  Bot,
  Briefcase,
  LineChart,
  ShieldCheck,
  Smartphone,
  Palette,
  Layers,
  Cpu,
  Radio,
  Rocket,
  Box,
  Layout,
  Workflow,
  Network,
  Zap,
  Library,
  Factory,
  Gamepad2,
  Terminal,
} from "lucide-react";
import { Template } from "../types";

export const templates: Template[] = [
  // Web Applications
  {
    id: "remix",
    name: "Remix App",
    description: "Full stack React framework",
    icon: <Workflow className="w-8 h-8" />,
    category: "web",
    installCommand: "npx create-remix@latest my-remix-app",
    thumbnail: "https://raw.githubusercontent.com/remix-run/remix/main/templates/_shared/remix.png"
  },

  {
    id: "ecommerce",
    name: "E-commerce Platform",
    description: "Complete online store setup",
    icon: <Store className="w-8 h-8" />,
    category: "web",
    installCommand: "npx create-next-app@latest my-store --typescript --tailwind --eslint",
    thumbnail: "https://raw.githubusercontent.com/vercel/next.js/canary/examples/with-stripe-typescript/public/og-image.png"
  },

  {
    id: "blog",
    name: "Blog Platform",
    description: "Modern blog with Next.js and MDX",
    icon: <PenTool className="w-8 h-8" />,
    category: "web",
    installCommand: "npx create-next-app@latest my-blog --typescript --tailwind --mdx",
    thumbnail: "https://raw.githubusercontent.com/vercel/next.js/canary/examples/blog-starter/public/favicon.ico"
  },

  {
    id: "portfolio",
    name: "Portfolio Website",
    description: "Professional portfolio with Astro",
    icon: <Globe className="w-8 h-8" />,
    category: "web",
    installCommand: "npm create astro@latest my-portfolio",
    thumbnail: "https://raw.githubusercontent.com/withastro/astro/main/assets/social/banner.jpg"
  },

  {
    id: "docs",
    name: "Documentation Site",
    description: "Technical documentation with VitePress",
    icon: <Library className="w-8 h-8" />,
    category: "web",
    installCommand: "npm create vitepress@latest my-docs",
    thumbnail: "https://raw.githubusercontent.com/vuejs/vitepress/main/docs/public/vitepress-logo-mini.svg"
  },

  // frontend
  {
    id: "react",
    name: "React Application",
    description: "Modern React with Vite and TailwindCSS",
    icon: <Code2 className="w-8 h-8" />,
    category: "front",
    installCommand: "npm create vite@latest my-react-app -- --template react-ts",
    thumbnail: "https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg"
  },
  {
    id: "nextjs",
    name: "Next.js App",
    description: "Full-featured Next.js application",
    icon: <Globe className="w-8 h-8" />,
    category: "front",
    installCommand: "npx create-next-app@latest my-next-app --typescript --tailwind --eslint",
    thumbnail: "https://raw.githubusercontent.com/vercel/next.js/canary/docs/public/images/next-logo.png"
  },
  {
    id: "vue",
    name: "Vue.js App",
    description: "Vue 3 with Composition API",
    icon: <Layers className="w-8 h-8" />,
    category: "front",
    installCommand: "npm create vue@latest my-vue-app"
  },
  {
    id: "angular",
    name: "Angular Application",
    description: "Enterprise-ready Angular setup",
    icon: <Layout className="w-8 h-8" />,
    category: "front",
    installCommand: "ng new my-angular-app"
  },
  {
    id: "svelte",
    name: "SvelteKit App",
    description: "Modern Svelte with SSR",
    icon: <Rocket className="w-8 h-8" />,
    category: "front",
    installCommand: "npm create svelte@latest my-svelte-app"
  },
  {
    id: "nuxt",
    name: "Nuxt.js App",
    description: "Vue.js framework for SSR",
    icon: <Box className="w-8 h-8" />,
    category: "front",
    installCommand: "npx nuxi@latest init my-nuxt-app"
  },
  {
    id: "gatsby",
    name: "Gatsby Site",
    description: "Static site generator with React",
    icon: <Zap className="w-8 h-8" />,
    category: "front",
    installCommand: "npm init gatsby my-gatsby-site"
  },
  {
    id: "solid",
    name: "SolidJS App",
    description: "High-performance reactive JavaScript library",
    icon: <Blocks className="w-8 h-8" />,
    category: "front",
    installCommand: "npx degit solidjs/templates/ts my-solid-app",
    thumbnail: "https://raw.githubusercontent.com/solidjs/solid/main/assets/logo.png"
  },
  {
    id: "qwik",
    name: "Qwik App",
    description: "Instant-loading web applications",
    icon: <Zap className="w-8 h-8" />,
    category: "front",
    installCommand: "npm create qwik@latest my-qwik-app",
    thumbnail: "https://raw.githubusercontent.com/BuilderIO/qwik/main/packages/docs/public/qwik-logo.svg"
  },

  // Mobile Applications
  {
    id: "reactNative",
    name: "React Native App",
    description: "Cross-platform mobile application",
    icon: <Laptop className="w-8 h-8" />,
    category: "mobile",
    installCommand: "npx react-native@latest init MyApp",
    thumbnail: "https://raw.githubusercontent.com/facebook/react-native/main/docs/assets/ReactNative.png"
  },
  {
    id: "flutter",
    name: "Flutter App",
    description: "Cross-platform app with Flutter",
    icon: <Smartphone className="w-8 h-8" />,
    category: "mobile",
    installCommand: "flutter create my_flutter_app"
  },
  {
    id: "ionic",
    name: "Ionic App",
    description: "Hybrid mobile app with Angular",
    icon: <Radio className="w-8 h-8" />,
    category: "mobile",
    installCommand: "npm init @ionic/app my-ionic-app"
  },
  {
    id: "nativeScript",
    name: "NativeScript App",
    description: "Native mobile apps with JavaScript",
    icon: <Palette className="w-8 h-8" />,
    category: "mobile",
    installCommand: "ns create my-ns-app"
  },
  {
    id: "pwa",
    name: "Progressive Web App",
    description: "Installable web application",
    icon: <PenTool className="w-8 h-8" />,
    category: "mobile",
    installCommand: "npx create-pwa-app my-pwa-app"
  },
  {
    id: "capacitor",
    name: "Capacitor App",
    description: "Native runtime for web apps",
    icon: <Library className="w-8 h-8" />,
    category: "mobile",
    installCommand: "npm init @capacitor/app my-capacitor-app"
  },
  {
    id: "expo",
    name: "Expo App",
    description: "React Native with Expo framework",
    icon: <Smartphone className="w-8 h-8" />,
    category: "mobile",
    installCommand: "npx create-expo-app my-expo-app",
    thumbnail: "https://raw.githubusercontent.com/expo/expo/main/docs/public/images/expo-icon.png"
  },
  {
    id: "tauri",
    name: "Tauri App",
    description: "Lightweight desktop applications",
    icon: <Terminal className="w-8 h-8" />,
    category: "mobile",
    installCommand: "npm create tauri-app my-tauri-app",
    thumbnail: "https://raw.githubusercontent.com/tauri-apps/tauri/main/app-icon.png"
  },

  // Backend Applications
  {
    id: "express",
    name: "Express.js API",
    description: "Node.js API with Express",
    icon: <Server className="w-8 h-8" />,
    category: "backend",
    installCommand: "npx express-generator my-express-api",
    thumbnail: "https://raw.githubusercontent.com/expressjs/expressjs.com/main/public/images/express-facebook-share.png"
  },
  {
    id: "nestjs",
    name: "NestJS Application",
    description: "Progressive Node.js framework",
    icon: <Factory className="w-8 h-8" />,
    category: "backend",
    installCommand: "npx @nestjs/cli new my-nest-app"
  },
  {
    id: "fastify",
    name: "Fastify API",
    description: "Fast and low overhead web framework",
    icon: <Rocket className="w-8 h-8" />,
    category: "backend",
    installCommand: "npm init fastify my-fastify-api"
  },
  {
    id: "graphql",
    name: "GraphQL API",
    description: "Apollo Server with TypeScript",
    icon: <Database className="w-8 h-8" />,
    category: "backend",
    installCommand: "npm init @apollo/server my-graphql-api"
  },
  {
    id: "microservices",
    name: "Microservices",
    description: "Microservices architecture setup",
    icon: <Blocks className="w-8 h-8" />,
    category: "backend",
    installCommand: "npx create-microservices-app my-microservices"
  },
  {
    id: "django",
    name: "Django API",
    description: "Python web framework",
    icon: <Network className="w-8 h-8" />,
    category: "backend",
    installCommand: "django-admin startproject my_django_api"
  },
  {
    id: "dotnet",
    name: ".NET Core API",
    description: "C# web API with .NET Core",
    icon: <Cpu className="w-8 h-8" />,
    category: "backend",
    installCommand: "dotnet new webapi -n my-dotnet-api"
  },
  {
    id: "golang",
    name: "Go API",
    description: "Fast and efficient Go backend",
    icon: <Gamepad2 className="w-8 h-8" />,
    category: "backend",
    installCommand: "go mod init my-go-api"
  },
  {
    id: "spring",
    name: "Spring Boot API",
    description: "Java-based enterprise framework",
    icon: <Server className="w-8 h-8" />,
    category: "backend",
    installCommand: "spring init --dependencies=web,data-jpa my-spring-api",
    thumbnail: "https://raw.githubusercontent.com/spring-projects/spring-boot/main/spring-boot-project/spring-boot/src/main/resources/org/springframework/boot/spring-boot.png"
  },
  {
    id: "laravel",
    name: "Laravel API",
    description: "PHP web application framework",
    icon: <Server className="w-8 h-8" />,
    category: "backend",
    installCommand: "composer create-project laravel/laravel my-laravel-api",
    thumbnail: "https://raw.githubusercontent.com/laravel/art/main/laravel-logo.png"
  },

  // Enterprise Applications
  {
    id: "dashboard",
    name: "Admin Dashboard",
    description: "Enterprise admin panel",
    icon: <Building2 className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-next-app@latest my-admin --typescript --tailwind"
  },
  {
    id: "saas",
    name: "SaaS Platform",
    description: "Software as a Service starter",
    icon: <Cloud className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-next-app@latest my-saas --typescript --tailwind"
  },
  {
    id: "ai",
    name: "AI Application",
    description: "AI-powered application setup",
    icon: <Bot className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-next-app@latest my-ai-app --typescript --tailwind"
  },
  {
    id: "crm",
    name: "CRM System",
    description: "Customer relationship management",
    icon: <Briefcase className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-next-app@latest my-crm --typescript --tailwind"
  },
  {
    id: "analytics",
    name: "Analytics Platform",
    description: "Data analytics dashboard",
    icon: <LineChart className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-next-app@latest my-analytics --typescript --tailwind"
  },
  {
    id: "security",
    name: "Security Suite",
    description: "Enterprise security setup",
    icon: <ShieldCheck className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-next-app@latest my-security --typescript --tailwind"
  },
  {
    id: "erp",
    name: "ERP System",
    description: "Enterprise Resource Planning",
    icon: <Building2 className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-next-app@latest my-erp --typescript --tailwind",
    thumbnail: "https://raw.githubusercontent.com/vercel/next.js/canary/examples/with-stripe-typescript/public/og-image.png"
  },
  {
    id: "cms",
    name: "Content Management",
    description: "Enterprise CMS platform",
    icon: <Database className="w-8 h-8" />,
    category: "enterprise",
    installCommand: "npx create-strapi-app@latest my-cms",
    thumbnail: "https://raw.githubusercontent.com/strapi/strapi/main/packages/core/strapi-admin/admin/src/assets/images/logo-strapi.png"
  }
];
