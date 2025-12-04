
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Server, Code, Shield, BrainCircuit, BarChart, ShoppingCart, Bot } from 'lucide-react';

export const services = [
  {
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Scalable and secure cloud infrastructure to power your applications, ensuring reliability and performance.',
    link: '/services/cloud-solutions',
    fullDescription: 'We provide comprehensive cloud solutions, from infrastructure setup to migration and management. Our services are designed to be scalable, secure, and cost-effective, helping you leverage the full power of the cloud.',
    image: PlaceHolderImages.find((img) => img.id === 'service-1'),
    features: [
      'Cloud infrastructure setup (AWS, Azure, GCP)',
      'Serverless architecture design',
      'Cloud migration and modernization',
      'Containerization with Docker and Kubernetes',
    ],
    problemStatement: "Businesses often struggle with managing complex, on-premise infrastructure that is expensive, difficult to scale, and prone to downtime. This limits their ability to innovate and respond to market changes quickly.",
    solutionsOffered: [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS) development",
        "Hybrid and Multi-Cloud Strategies",
    ],
    toolsTechStack: [
        { name: 'AWS', icon: <Server /> },
        { name: 'Azure', icon: <Server /> },
        { name: 'Google Cloud', icon: <Server /> },
        { name: 'Docker', icon: <Code /> },
        { name: 'Kubernetes', icon: <Code /> },
        { name: 'Terraform', icon: <Code /> },
    ],
    whyChooseGAH: "Our certified cloud experts design and implement bespoke cloud strategies that align with your business goals. We focus on cost-optimization, security, and scalability, ensuring your cloud environment is a powerful asset, not a complex liability. With our 24/7 management, you can focus on your core business while we handle the cloud.",
    caseStudies: [
        { title: "E-commerce Platform Scales for Black Friday", description: "How we migrated a major e-commerce client to a scalable AWS architecture, resulting in zero downtime during peak traffic.", link: "#" },
        { title: "Financial Firm Achieves Compliance in the Cloud", description: "We implemented a secure and compliant multi-cloud environment for a financial services firm, meeting all regulatory requirements.", link: "#" },
    ],
    faqs: [
        { question: "Which cloud provider is best for my business?", answer: "The best provider depends on your specific needs, existing technology stack, and budget. We conduct a thorough analysis to recommend the optimal solution, whether it's AWS, Azure, GCP, or a hybrid approach." },
        { question: "How do you ensure data security in the cloud?", answer: "Security is our top priority. We implement a multi-layered security strategy including encryption, identity and access management (IAM), network security, and continuous monitoring to protect your data at all times." },
    ],
    outcomeFocus: [
        'Reduced operational costs',
        'Increased scalability and flexibility',
        'Enhanced security and compliance',
        'Improved development agility'
    ],
  },
  {
    title: 'Cyber Security',
    slug: 'cyber-security',
    description: 'Protect your digital assets with our advanced threat detection and prevention services.',
    link: '/services/cyber-security',
    fullDescription: 'Our cybersecurity services offer 360-degree protection for your digital assets. We identify vulnerabilities, protect against threats, and ensure compliance with industry standards.',
    image: PlaceHolderImages.find((img) => img.id === 'service-2'),
    features: [
      'Vulnerability assessment and penetration testing',
      'Managed detection and response (MDR)',
      'Security architecture review',
      'Compliance and governance (ISO 27001, SOC 2)',
    ],
    problemStatement: "The increasing sophistication of cyber threats puts businesses at constant risk of data breaches, financial loss, and reputational damage. Many organizations lack the specialized expertise to effectively defend against these advanced attacks.",
    solutionsOffered: [
        "Threat Intelligence and Monitoring",
        "Identity and Access Management (IAM)",
        "Endpoint Detection and Response (EDR)",
        "Security Audits and Compliance",
    ],
    toolsTechStack: [
        { name: 'CrowdStrike', icon: <Shield /> },
        { name: 'Splunk', icon: <BarChart /> },
        { name: 'Okta', icon: <Shield /> },
        { name: 'Nessus', icon: <Shield /> },
        { name: 'Metasploit', icon: <Code /> },
    ],
    whyChooseGAH: "Our team of ethical hackers and security analysts acts as an extension of your team. We use industry-leading tools and proactive strategies to identify and neutralize threats before they can impact your business, providing you with peace of mind and robust protection.",
    caseStudies: [
        { title: "Healthcare Provider Thwarts Ransomware Attack", description: "Our rapid response team contained a ransomware attack on a large hospital network, restoring operations within hours and preventing data exfiltration.", link: "#" },
        { title: "Startup Secures Series A Funding with Proven Security Posture", description: "We conducted a full security audit and implemented a robust security program for a tech startup, which was a key factor in their successful funding round.", link: "#" },
    ],
    faqs: [
        { question: "How often should we conduct penetration testing?", answer: "We recommend at least one comprehensive penetration test annually, with additional tests after any significant changes to your network or applications. Continuous vulnerability scanning is also crucial." },
        { question: "What is Managed Detection and Response (MDR)?", answer: "MDR is a service where we provide 24/7 monitoring of your network, endpoints, and cloud environments to detect, investigate, and respond to threats in real-time. It's like having an elite security operations center without the overhead." },
    ],
     outcomeFocus: [
        'Reduced risk of data breaches',
        'Strengthened security posture',
        'Compliance with industry regulations',
        'Increased customer trust'
    ],
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Leverage the power of AI to unlock insights, automate processes, and drive innovation.',
    link: '/services/ai-machine-learning',
    fullDescription: 'We help you harness the power of Artificial Intelligence and Machine Learning to build intelligent applications, automate processes, and gain a competitive edge.',
    image: PlaceHolderImages.find((img) => img.id === 'service-3'),
    features: [
      'Custom machine learning model development',
      'Natural Language Processing (NLP) solutions',
      'Computer vision and image analysis',
      'Predictive analytics and forecasting',
    ],
    problemStatement: "Businesses are collecting more data than ever, but most struggle to extract meaningful, actionable insights from it. This untapped potential leads to missed opportunities, operational inefficiencies, and a failure to innovate.",
    solutionsOffered: [
        "Predictive Modeling and Forecasting",
        "Natural Language Processing (NLP) for text analysis",
        "Computer Vision for image and video analysis",
        "AI-Powered Robotic Process Automation (RPA)",
    ],
    toolsTechStack: [
        { name: 'Python', icon: <Code /> },
        { name: 'TensorFlow', icon: <BrainCircuit /> },
        { name: 'PyTorch', icon: <BrainCircuit /> },
        { name: 'scikit-learn', icon: <BarChart /> },
        { name: 'OpenCV', icon: <Code /> },
    ],
    whyChooseGAH: "We are not just data scientists; we are business problem-solvers. We partner with you to understand your challenges and apply the right AI/ML techniques to solve them. Our focus is on delivering practical, high-impact solutions that provide a clear return on investment.",
    caseStudies: [
        { title: "Retailer Increases Sales by 20% with Recommendation Engine", description: "We built a custom recommendation engine that personalized the online shopping experience, leading to a significant increase in conversion rates and customer lifetime value.", link: "#" },
        { title: "Manufacturer Reduces Defects with AI-Powered Quality Control", description: "An automated quality control system using computer vision was implemented on the factory floor, reducing product defects by over 60%.", link: "#" },
    ],
    faqs: [
        { question: "What kind of data do I need for an AI project?", answer: "The data required depends on the problem you're trying to solve. It can range from sales transactions and customer feedback to sensor readings and images. We start with a data audit to assess what you have and what you might need." },
        { question: "How long does it take to see results from an AI project?", answer: "While some 'quick wins' can be achieved in a few weeks, a full-scale AI implementation is a journey. We typically deliver a proof-of-concept within 2-3 months to demonstrate value, followed by an iterative rollout." },
    ],
     outcomeFocus: [
        'Data-driven decision making',
        'Increased operational efficiency',
        'New revenue streams',
        'Enhanced customer experiences'
    ],
  },
  {
    title: 'Data Analytics',
    slug: 'data-analytics',
    description: 'Turn your data into actionable intelligence with our comprehensive analytics platforms.',
    link: '/services/data-analytics',
    fullDescription: 'Our data analytics services help you make sense of your data. We build data pipelines, create interactive dashboards, and provide insights to drive business decisions.',
    image: PlaceHolderImages.find((img) => img.id === 'service-4'),
    features: [
      'Data warehousing and ETL pipelines',
      'Business intelligence dashboard development',
      'Real-time data processing and analytics',
      'Big data solutions (Hadoop, Spark)',
    ],
    problemStatement: "Data is often siloed across different departments and systems, making it impossible to get a holistic view of business performance. Decision-making is based on guesswork rather than facts, hindering growth.",
    solutionsOffered: [
        "Centralized Data Warehousing",
        "Interactive Business Intelligence (BI) Dashboards",
        "Real-time Analytics and Reporting",
        "Customer and Marketing Analytics",
    ],
    toolsTechStack: [
        { name: 'Tableau', icon: <BarChart /> },
        { name: 'Power BI', icon: <BarChart /> },
        { name: 'Snowflake', icon: <Server /> },
        { name: 'dbt', icon: <Code /> },
        { name: 'Airflow', icon: <Code /> },
    ],
    whyChooseGAH: "We democratize data. Our approach is to break down data silos and empower your entire organization with self-service analytics tools. We build robust, scalable data platforms and intuitive dashboards that put actionable insights at your fingertips, fostering a culture of data-driven decision-making.",
    caseStudies: [
        { title: "Logistics Company Optimizes Routes, Saving Millions", description: "By creating a central analytics platform, a logistics company was able to analyze route efficiency and weather patterns, leading to significant fuel and time savings.", link: "#" },
        { title: "SaaS Company Reduces Churn with Customer Analytics", description: "We developed a customer health dashboard that identified at-risk users, allowing the success team to intervene proactively and reduce churn by 15%.", link: "#" },
    ],
    faqs: [
        { question: "What's the difference between BI and AI?", answer: "Business Intelligence (BI) focuses on describing what has happened in the past using historical data. Artificial Intelligence (AI) and Machine Learning focus on predicting what will happen in the future and prescribing actions to take. BI tells you what, AI tells you why and what's next." },
        { question: "Can you work with our existing data infrastructure?", answer: "Absolutely. Our solutions are tool-agnostic. We can integrate with your existing databases, data warehouses, and applications, or help you build a new, modern data stack from the ground up." },
    ],
     outcomeFocus: [
        'Single source of truth for data',
        'Improved strategic planning',
        'Enhanced operational visibility',
        'Higher ROI on marketing spend'
    ],
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Expand your reach and engage your audience with data-driven marketing strategies.',
    link: '/services/digital-marketing',
    fullDescription: 'Our digital marketing services are designed to grow your online presence. From SEO to social media, we create and execute strategies that deliver results.',
    image: PlaceHolderImages.find((img) => img.id === 'service-5'),
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) advertising',
      'Social media marketing and management',
      'Content marketing and strategy',
    ],
    problemStatement: "In a crowded digital landscape, it's difficult to capture audience attention and convert them into customers. Many businesses waste marketing budgets on strategies that are not targeted, measurable, or integrated.",
    solutionsOffered: [
        "Omni-channel Marketing Strategy",
        "Search Engine Optimization (SEO) & Content Marketing",
        "Paid Advertising (PPC & Social Ads)",
        "Marketing Automation & CRM Integration",
    ],
    toolsTechStack: [
        { name: 'Google Analytics', icon: <BarChart /> },
        { name: 'HubSpot', icon: <ShoppingCart /> },
        { name: 'Salesforce', icon: <ShoppingCart /> },
        { name: 'SEMrush', icon: <BarChart /> },
        { name: 'Meta Ads', icon: <Code /> },
    ],
    whyChooseGAH: "We are a performance-driven digital marketing agency. Every campaign we run is tracked, measured, and optimized for ROI. We combine creative storytelling with data science to create compelling campaigns that resonate with your target audience and drive measurable business growth.",
    caseStudies: [
        { title: "B2B Tech Company Generates 500% More Leads", description: "Through a targeted LinkedIn and content marketing strategy, we helped a B2B software company fill their sales pipeline with high-quality leads.", link: "#" },
        { title: "DTC Brand Doubles Revenue with SEO and PPC", description: "A combination of organic search optimization and strategic Google Ads campaigns led to a 100% increase in online revenue for a direct-to-consumer brand.", link: "#" },
    ],
    faqs: [
        { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. While some improvements can be seen in 3-4 months, significant results typically take 6-12 months. However, the benefits are compounding and sustainable." },
        { question: "What should my marketing budget be?", answer: "Your budget will depend on your industry, goals, and the channels you're targeting. We work with you to develop a budget that aligns with your business objectives and provides a positive return on ad spend (ROAS)." },
    ],
     outcomeFocus: [
        'Increased brand awareness',
        'Higher quality lead generation',
        'Improved conversion rates',
        'Greater customer loyalty'
    ],
  },
  {
    title: 'UX/UI Design',
    slug: 'ux-ui-design',
    description: 'Create beautiful, intuitive, and user-centric digital experiences that delight users.',
    link: '/services/ux-ui-design',
    fullDescription: 'We design user-centric digital products that are not only visually appealing but also easy to use. Our design process is collaborative, iterative, and focused on your business goals.',
    image: PlaceHolderImages.find((img) => img.id === 'service-6'),
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'User interface (UI) design',
      'User experience (UX) strategy',
    ],
    problemStatement: "Poor user experience leads to customer frustration, high bounce rates, and low conversion. Many products fail not because of a lack of features, but because they are difficult and confusing to use.",
    solutionsOffered: [
        "User Research and Persona Development",
        "Information Architecture and User Flows",
        "Wireframing and Interactive Prototyping",
        "High-Fidelity UI Design and Design Systems",
    ],
    toolsTechStack: [
        { name: 'Figma', icon: <Code /> },
        { name: 'Adobe XD', icon: <Code /> },
        { name: 'Sketch', icon: <Code /> },
        { name: 'InVision', icon: <Code /> },
        { name: 'Miro', icon: <BrainCircuit /> },
    ],
    whyChooseGAH: "We believe great design is great business. Our human-centered design process puts your users at the core of every decision. We blend creativity with data-driven insights to create interfaces that are not only beautiful but also drive user engagement, satisfaction, and business results.",
    caseStudies: [
        { title: "Mobile App Redesign Increases User Retention by 40%", description: "A complete overhaul of a popular mobile app's user experience led to a dramatic increase in daily active users and a 40% improvement in user retention.", link: "#" },
        { title: "Complex Enterprise Software Gets a User-Friendly Facelift", description: "We redesigned a complex enterprise platform, simplifying workflows and reducing user error rates by 75%, which significantly cut down on support tickets.", link: "#" },
    ],
    faqs: [
        { question: "What is the difference between UX and UI?", answer: "User Experience (UX) is the overall experience a user has with a product, focusing on how it feels. User Interface (UI) is the specific visual design of the product's screens and controls, focusing on how it looks. We believe you can't have one without the other." },
        { question: "How do you involve stakeholders in the design process?", answer: "We follow a collaborative and transparent process. Stakeholders are involved at key stages, from initial research and workshops to regular design reviews and usability testing sessions. This ensures the final product aligns with both user needs and business goals." },
    ],
     outcomeFocus: [
        'Increased user engagement',
        'Higher conversion rates',
        'Reduced customer support costs',
        'Stronger brand perception'
    ],
  },
];
