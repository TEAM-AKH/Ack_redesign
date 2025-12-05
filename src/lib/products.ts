
import { Calendar, Code, FileText, User, Clock, Hash, Bot, Briefcase } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const products = [
    {
      id: 1,
      title: 'TMS - Team Management System',
      shortTitle: '"Manage better . Perform Smarter"',
      slug: 'tms-team-management-system',
      description: 'A comprehensive tool for managing teams, tasks, and project workflows efficiently.',
      link: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTk3NzQzNDd8MA&ixlib-rb-4.1.0&q=80&w=1080',
      color: '#5196fd',
      releaseDate: 'Jan 2024',
      category: 'Productivity',
      icon: Briefcase,
      fullDescription: 'TMS is an all-in-one solution for modern teams. It combines task management, real-time communication, and performance tracking to help your team stay aligned and productive. Say goodbye to scattered tools and hello to streamlined success.',
      features: [
        'Agile and Kanban boards',
        'Real-time chat and collaboration',
        'Time tracking and reporting',
        'Gantt charts and project timelines',
      ],
      problemStatement: "Teams often struggle with disjointed tools for communication, task tracking, and project planning, leading to inefficiencies, missed deadlines, and a lack of visibility into project progress.",
      solutionsOffered: [
          "A unified platform for all project-related activities.",
          "Clear visibility into team workload and project status.",
          "Automated workflows to reduce manual overhead.",
          "Integrations with popular tools like Git, Slack, and Figma.",
      ],
      toolsTechStack: [
          { name: 'React', icon: 'Code' },
          { name: 'Node.js', icon: 'Server' },
          { name: 'PostgreSQL', icon: 'Server' },
          { name: 'GraphQL', icon: 'Code' },
          { name: 'WebSocket', icon: 'Bot' },
      ],
      caseStudies: [
          { title: "Startup increases velocity by 30%", description: "How a fast-growing startup used TMS to streamline their development process and ship features faster.", link: "#" },
      ],
    },
    {
      id: 2,
      title: 'RMS - Resource Management System',
      shortTitle: 'RMS',
      slug: 'rms-resource-management-system',
      description: 'Optimize resource allocation, track utilization, and forecast needs with our powerful RMS.',
      link: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZXNvdXJjZSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzY1NTc3MTEyfDA&ixlib-rb-4.1.0&q=80&w=1080',
      color: '#8f89ff',
      releaseDate: 'Feb 2024',
      category: 'Operations',
      icon: User,
      fullDescription: 'RMS provides a bird\'s-eye view of your organization\'s resources, from personnel to equipment. Plan projects effectively, avoid bottlenecks, and ensure your resources are allocated for maximum impact.',
      features: [
        'Resource scheduling and allocation',
        'Skills and availability tracking',
        'Utilization and forecasting reports',
        'Project budget and cost management',
      ],
      problemStatement: "Organizations lack a clear, centralized view of their resources, leading to over-allocation, under-utilization, and difficulty in planning for future projects.",
      solutionsOffered: [
          "A real-time dashboard of all company resources.",
          "Forecasting tools to predict future resource needs.",
          "Skills-based resource matching for projects.",
          "Integration with HR and project management systems.",
      ],
      toolsTechStack: [
          { name: 'Vue.js', icon: 'Code' },
          { name: 'Django', icon: 'Server' },
          { name: 'MySQL', icon: 'Server' },
          { name: 'D3.js', icon: 'BarChart' },
      ],
      caseStudies: [
          { title: "Consulting firm improves billable hours by 20%", description: "By optimizing consultant allocation with RMS, the firm was able to increase their overall billable hours and profitability.", link: "#" },
      ],
    },
    {
      id: 3,
      title: 'WFx -  Wolfronix',
      shortTitle: 'WFx',
      slug: 'wfx-wolfronix',
      description: 'An innovative platform for next-generation workflow automation and integration.',
      link: 'https://images.unsplash.com/photo-1611095790444-1dfa3c8a1f2w?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b3JrZmxvdyUyMGF1dG9tYXRpb258ZW58MHx8fHwxNzY1NTc3MTM4fDA&ixlib-rb-4.1.0&q=80&w=1080',
      color: '#13006c',
      releaseDate: 'Mar 2024',
      category: 'Automation',
      icon: Bot,
      fullDescription: 'WFx is a low-code/no-code platform that empowers anyone to automate repetitive tasks and create complex workflows across multiple applications. Connect your apps, design your logic, and let WFx handle the rest.',
      features: [
        'Visual drag-and-drop workflow builder',
        'Connectors for 500+ popular applications',
        'Custom triggers and actions',
        'Real-time monitoring and logging',
      ],
      problemStatement: "Repetitive manual tasks consume valuable employee time and are prone to human error. Businesses need a way to automate processes without requiring extensive development resources.",
      solutionsOffered: [
          "A visual interface to build and manage automations.",
          "A vast library of pre-built connectors and templates.",
          "The ability to run workflows on a schedule or based on triggers.",
          "Detailed logs and error handling for reliable automation.",
      ],
      toolsTechStack: [
          { name: 'Angular', icon: 'Code' },
          { name: 'Spring Boot', icon: 'Server' },
          { name: 'RabbitMQ', icon: 'Server' },
          { name: 'gRPC', icon: 'Code' },
      ],
      caseStudies: [
          { title: "Marketing team automates lead nurturing process", description: "Using WFx, a marketing team automated their lead entry and email follow-up process, saving 10 hours per week.", link: "#" },
      ],
    },
    {
      id: 4,
      title: 'CST - Customer Support Tool',
      shortTitle: 'CST',
      slug: 'cst-customer-support-tool',
      description: 'Enhance customer satisfaction with a streamlined and intelligent support ticketing system.',
      link: 'https://images.unsplash.com/photo-1611095782313-0b0a8f3c7f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MHx8fHwxNzY1NTc3MTY1fDA&ixlib-rb-4.1.0&q=80&w=1080',
      color: '#ed649e',
      releaseDate: 'Apr 2024',
      category: 'Customer Service',
      icon: FileText,
      fullDescription: 'CST is a modern help desk solution that brings all your customer conversations into one place. With powerful automations and an integrated knowledge base, your team can resolve issues faster and deliver exceptional service.',
      features: [
        'Omnichannel ticket management (email, chat, social)',
        'AI-powered ticket routing and categorization',
        'Integrated knowledge base',
        'Customer satisfaction (CSAT) surveys',
      ],
      problemStatement: "Customer support teams are overwhelmed with inquiries from multiple channels, leading to slow response times, inconsistent answers, and a poor customer experience.",
      solutionsOffered: [
          "A unified inbox for all customer interactions.",
          "AI-powered suggestions to help agents respond faster.",
          "A self-service portal and knowledge base to deflect common questions.",
          "Analytics to track team performance and customer satisfaction.",
      ],
      toolsTechStack: [
          { name: 'Svelte', icon: 'Code' },
          { name: 'Elixir', icon: 'Server' },
          { name: 'Phoenix', icon: 'Server' },
          { name: 'PostgreSQL', icon: 'Server' },
      ],
      caseStudies: [
          { title: "Online retailer reduces response time by 50%", description: "By implementing CST and its AI features, a retailer was able to handle a higher volume of tickets with the same team size.", link: "#" },
      ],
    },
  ];




