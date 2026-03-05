import { useState, useEffect, useRef } from "react";

const portfolioData = {
  name: "Abhishek Adurti",
  tagline: "Associate Consultant · MISM @ Carnegie Mellon · Cloud & Data Engineering",
  rotatingTaglines: [
    "Product Enthusiast",
    "Cloud Engineer",
    "Data Engineering",
    "Tech Consultant",
    "Tennis Player",
    "Traveller",
    "AI Enthusiast"
  ],
  email: "aadurti@andrew.cmu.edu",
  phone: "+1 (412) 608-8085",
  location: "Pittsburgh, PA",
  availability: "Open to Work",
  about: [
    "Mechanical engineer turned tech consultant turned product thinker. I spent 3+ years at KPMG building enterprise platforms for Fortune 500 clients, automating 10,000+ monthly transactions, hitting 95% user adoption, and mentoring a dev team along the way.",
    "Now I'm at Carnegie Mellon's Heinz College pursuing my Master's in Information Systems Management, sharpening the product and strategy toolkit while keeping my hands dirty with code. I'm the person who can whiteboard the architecture, run the design sprint, demo to the client, and still push a commit.",
    "Off the clock: tennis court, airport terminal, or deep in an AI rabbit hole. Probably all three in the same week."
  ],
  social: {
    github: "https://github.com/AbhishekAdurti2000",
    linkedin: "https://www.linkedin.com/in/abhishekadurti/"
  },
  projects: [
    {
      id: 1,
      title: "ESG Reporting System",
      category: "Data Engineering",
      date: "Jun 2024",
      period: ["Jun 2024", "Jul 2025"],
      description: "Automated ESG metric ingestion for 100+ stakeholders, reducing manual effort by 40%.",
      color: "#27AE60",
      tech: ["Microsoft Fabric", "Python", "Power BI", "Eco Vadis API", "RBAC"],
      github: "",
      liveUrl: "",
      // Modal details
      context: "Large enterprises needed a centralized, automated way to collect, transform, and report ESG metrics for CSRD compliance. Manual processes were slow, error-prone, and couldn't scale across business units.",
      role: "Led the end-to-end design and development as Associate Consultant at KPMG. Owned the data pipeline architecture, stakeholder demos, and Power BI dashboard design.",
      features: [
        "Multi-layer data pipeline with automated ingestion from 100+ stakeholders",
        "Python optimization scripts improving pipeline efficiency by 35%",
        "Power BI KPI models with 30% improved reporting accuracy",
        "Role-based access control (RBAC) and dynamic data masking",
        "Eco Vadis API integration with HRMS for 500+ records monthly"
      ],
      impact: "Reduced manual reporting effort by 40%. Enabled real-time CSRD compliant sustainability analysis across the organization."
    },
    {
      id: 2,
      title: "Distributor Management App",
      category: "Enterprise App",
      date: "Jun 2022",
      period: ["Jun 2022", "Jun 2024"],
      description: "Sales app with 95% adoption, automating 10,000+ monthly transactions.",
      color: "#2D9CDB",
      tech: ["PowerApps", "Azure Logic Apps", "Azure DevOps", "SharePoint"],
      github: "",
      liveUrl: "",
      context: "Distributors were managing orders manually through email and spreadsheets, leading to delays and errors. The client needed a mobile-first solution that could integrate with existing ERP systems.",
      role: "Full-stack design and development as Analyst at KPMG. Led design sprints, stakeholder demos, and mentored 5 developers on the project.",
      features: [
        "Mobile-responsive order management interface via PowerApps",
        "Automated invoicing for 10,000+ monthly transactions",
        "Azure Logic Apps workflow automation for approvals",
        "SharePoint integration for document management",
        "Real-time order tracking and status notifications"
      ],
      impact: "Reduced order processing time by 40%. Achieved 95% adoption among distributors. Increased team user adoption by 80% through design sprints."
    },
    {
      id: 3,
      title: "CO2 Emissions Forecasting",
      category: "Machine Learning",
      date: "Nov 2021",
      period: ["Nov 2021", "Jan 2022"],
      description: "Random Forest model predicting CO2 emissions with 96.8% R² score.",
      color: "#E8453C",
      tech: ["Python", "Scikit-learn", "Random Forest", "Pandas"],
      github: "https://github.com/AbhishekAdurti2000",
      liveUrl: "",
      context: "Sustainability teams needed accurate emissions forecasting to plan reduction strategies. Existing methods relied on manual estimates with poor accuracy.",
      role: "Solo project. Designed the ML pipeline, feature engineering, model selection, and evaluation.",
      features: [
        "Data preprocessing pipeline using World Bank datasets",
        "Feature engineering for temporal and regional emission patterns",
        "Random Forest Regression with hyperparameter tuning",
        "Cross-validation and model comparison framework",
        "Visualization dashboard for emissions trends"
      ],
      impact: "Achieved 96.8% R² score. Supported sustainability strategy planning with accurate, data-driven forecasting."
    },
    {
      id: 4,
      title: "Facial Expression Detection",
      category: "Deep Learning",
      date: "Dec 2021",
      period: ["Dec 2021", "Jan 2022"],
      description: "DCNN classifying seven emotions with 86.63% accuracy.",
      color: "#9B51E0",
      tech: ["Python", "TensorFlow", "DCNN", "OpenCV"],
      github: "https://github.com/AbhishekAdurti2000",
      liveUrl: "",
      context: "Explored the potential for emotion-aware AI applications in human-computer interaction. Needed a real-time emotion classifier from facial images.",
      role: "Solo project. Designed the CNN architecture, training pipeline, and evaluation framework.",
      features: [
        "Deep Convolutional Neural Network architecture for 7-class emotion recognition",
        "Data augmentation pipeline for FERC 2013 dataset",
        "Real-time inference using OpenCV for face detection",
        "Confusion matrix analysis and per-class performance tuning",
        "Model optimization for deployment readiness"
      ],
      impact: "Achieved 86.63% classification accuracy across 7 emotion categories. Demonstrated viability for emotion-aware AI applications."
    },
    // ──────────────────────────────────────────────────────
    // TO ADD A NEW PROJECT: Copy the template below,
    // fill in your details, and paste it here.
    // ──────────────────────────────────────────────────────
    // {
    //   id: 5,
    //   title: "Your Project Name",
    //   category: "Category",
    //   date: "Month Year",
    //   period: ["Start", "End"],
    //   description: "One-line summary for the card.",
    //   color: "#HEX",
    //   tech: ["Tech1", "Tech2"],
    //   github: "https://github.com/...",
    //   liveUrl: "",
    //   context: "What problem were you solving?",
    //   role: "What was your role?",
    //   features: ["Feature 1", "Feature 2"],
    //   impact: "What was the outcome?"
    // },
  ],
  skills: [
    {
      category: "Languages",
      description: "The languages I think and build in daily",
      accent: "#3B82F6",
      iconPath: "M8 3L4 7V17L8 21H16L20 17V7L16 3H8Z",
      items: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Where I deploy, scale, and automate",
      accent: "#10B981",
      iconPath: "M3 15C3 12.4 4.6 10.1 7 9C7.4 5 10.8 2 15 2C19.4 2 23 5.6 23 10C23 10.3 23 10.7 22.9 11C24.4 12 25 13.9 24 15.5",
      items: [
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
        { name: "Azure AD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      ]
    },
    {
      category: "Data & Analytics",
      description: "How I turn raw data into decisions",
      accent: "#F59E0B",
      iconPath: "M3 3V21H21M7 16L11 11L15 14L21 7",
      items: [
        { name: "Power BI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Tableau", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
        { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
        { name: "Microsoft Fabric", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Mixpanel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
      ]
    },
    {
      category: "Product & Platforms",
      description: "Tools I use to ship, manage, and design products",
      accent: "#EC4899",
      iconPath: "M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12",
      items: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Agile/Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
        { name: "Power Platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
        { name: "SharePoint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
      ]
    },
  ],
  exploring: [
    { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Amplitude", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
    { name: "WebGPU", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" },
  ],
  experience: [
    {
      company: "KPMG India",
      logoText: "KPMG",
      logoBg: "#00338D",
      role: "Associate Consultant",
      type: "Full-time",
      period: "Jun 2024 — Jul 2025",
      duration: "1 yr 1 mo",
      location: "Gurgaon, India",
      description: "Built a scalable ESG Reporting System for 100+ stakeholders using Microsoft Fabric, reducing manual effort by 40%. Designed Power BI dashboards for real-time sustainability analysis.",
      tech: ["Python", "Microsoft Fabric", "Power BI", "Azure", "RBAC"],
      projects: [
        {
          title: "ESG Reporting System",
          description: "Built a scalable ESG Reporting System using Microsoft Fabric, automating ESG metric ingestion for 100+ stakeholders. Designed multi-layer data pipelines with Python optimization scripts that improved processing efficiency by 35%. The system enabled real-time CSRD compliant sustainability analysis and reduced manual reporting effort by 40%.",
          tech: ["Microsoft Fabric", "Python", "Power BI", "Eco Vadis API"],
        },
        {
          title: "Power BI KPI Dashboard Suite",
          description: "Designed interactive dashboards covering 100+ KPIs for HR and finance teams. Created Power BI models that improved reporting accuracy by 30% with role-based access control (RBAC) and dynamic data masking for sensitive datasets.",
          tech: ["Power BI", "DAX", "RBAC", "Azure"],
        },
        {
          title: "HRMS & Sustainability Integration",
          description: "Integrated Eco Vadis APIs with HRMS data to optimize sustainability metrics processing for 500+ records monthly. Strengthened data security using dynamic data masking and role-based access controls across the pipeline.",
          tech: ["Eco Vadis API", "Python", "Azure", "REST APIs"],
        },
      ]
    },
    {
      company: "KPMG India",
      logoText: "KPMG",
      logoBg: "#00338D",
      role: "Analyst",
      duration: "2 yrs",
      location: "Gurgaon, India",
      description: "Designed a Distributor Management Sales App achieving 95% adoption and automated invoicing for 10,000+ monthly transactions. Mentored 5 developers and drove 80% user adoption through design sprints.",
      tech: ["PowerApps", "Azure Logic Apps", "Azure DevOps", "SharePoint"],
      projects: [
        {
          title: "Distributor Management Sales App",
          description: "Designed an end-to-end sales application using PowerApps and Azure Logic Apps for distributor order management. Reduced order processing time by 40% and achieved 95% adoption among distributors with a mobile-responsive interface.",
          tech: ["PowerApps", "Azure Logic Apps", "SharePoint", "Power Automate"],
        },
        {
          title: "Automated Invoicing System",
          description: "Built an automated invoicing management system handling 10,000+ monthly transactions. Increased processing efficiency by 50% through workflow automation and seamless integration with existing ERP systems.",
          tech: ["Power Automate", "SharePoint", "Azure Logic Apps", "SQL"],
        },
        {
          title: "Leave Management Platform",
          description: "Developed a leave management platform serving 1,200+ employees, cutting HR processing time by 50%. Delivered mobile-responsive solutions achieving 90% adoption rate among operational teams.",
          tech: ["PowerApps", "Power Automate", "SharePoint", "Azure AD"],
        },
      ]
    },
    {
      company: "KPMG India",
      logoText: "KPMG",
      logoBg: "#00338D",
      role: "Intern Analyst",
      duration: "6 mos",
      location: "Gurgaon, India",
      description: "Streamlined compliance audits with a PowerApps tool, cutting approval times by 90%. Implemented SSO via Azure AD for 900+ global users.",
      tech: ["PowerApps", "Azure AD", "SharePoint"],
      projects: [
        {
          title: "Compliance Audit Approval Tool",
          description: "Streamlined compliance audit reviews with a custom PowerApps approval tool. Reduced approval cycle times by 90% through automated routing and notification workflows.",
          tech: ["PowerApps", "Power Automate", "SharePoint"],
        },
        {
          title: "SSO & Document Tracking System",
          description: "Implemented Single Sign-On authentication via Azure AD for 900+ global users, improving security and usability. Integrated document tracking with SharePoint for 1,000+ audit records ensuring compliance readiness.",
          tech: ["Azure AD", "SharePoint", "Power Automate"],
        },
      ]
    },
    {
      company: "SKF India",
      logoText: "SKF",
      logoBg: "#0054A6",
      role: "Summer Intern",
      type: "Internship",
      period: "Jul 2021 — Aug 2021",
      duration: "2 mos",
      location: "Bangalore, India",
      description: "Led a New Product Development project on charging roller assembly. Contributed to supply chain and QA processes for a product launch using Fusion 360 and AutoCAD.",
      tech: ["AutoCAD", "Fusion 360", "Figma", "Supply Chain"],
      projects: [
        {
          title: "Charging Roller Assembly Project",
          description: "Led a New Product Development project on charging roller assembly, applying design and manufacturing principles. Gained hands-on insights into product innovation, prototyping, and engineering workflows.",
          tech: ["AutoCAD", "Autodesk Fusion 360", "Product Design"],
        },
        {
          title: "Supply Chain & QA Process Improvement",
          description: "Contributed to supply chain and quality assurance processes for a new product launch. Ensured standards were met and timelines maintained while supporting design, modeling, and presentation aspects using Fusion 360 and Figma.",
          tech: ["Figma", "Fusion 360", "Quality Assurance"],
        },
      ]
    }
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      logoText: "CMU",
      logoBg: "#C41230",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/bb/Carnegie_Mellon_University_seal.svg",
      degree: "Master's in Information Systems Management",
      college: "Heinz College",
      period: "Aug 2025 — Dec 2026",
      description: "Pursuing MISM with a focus on product management, data science, and distributed systems. Bridging technical depth with business strategy.",
      semesters: [
        {
          term: "Spring 2026",
          courses: ["Corporate Startup Lab", "Distributed Systems", "Professional Speaking", "Digital Transformation", "Managing Disruptive Technology", "Decision Making Under Uncertainty", "Data Science for Product Managers"]
        },
        {
          term: "Fall 2025",
          courses: ["Accounting & Financial Analytics", "Writing for ISM", "Statistics for IT Managers", "Database Management", "OOP in Java", "Economic Analysis", "Organizational Design & Implementation"]
        }
      ]
    },
    {
      school: "Vellore Institute of Technology",
      logoText: "VIT",
      logoBg: "#1A237E",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/c/c5/Vellore_Institute_of_Technology_seal_2017.svg",
      degree: "B.Tech in Mechanical Engineering",
      college: "School of Mechanical Engineering",
      period: "Jul 2018 — May 2022",
      gpa: "3.86/4.0",
      description: "Graduated with honors. Built a strong foundation in engineering, data analytics, and product development while leading the Scientific Research Society.",
      semesters: [
        {
          term: "Key Coursework",
          courses: ["Python", "Problem Solving & OOP", "Applied Numerical Methods", "Statistics for Engineers", "Statistical Data Analytics for Business Research", "Product Development & Management", "Java Programming"]
        }
      ],
      societies: ["Chairperson — The Scientific Research Society", "Led 100+ members and 15+ events on Data Science, ML, and AI"]
    },
    {
      school: "Springdales School",
      logoText: "SPS",
      logoBg: "#8B0000",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/4/42/Springdales_School_logo.png",
      degree: "High School Diploma, Science",
      college: "Delhi, India",
      period: "2005 — 2018",
      description: "Active in technology, leadership, and creative pursuits across multiple societies and competitions.",
      semesters: [
        {
          term: "Societies",
          courses: ["Executive Director — Spex Club (Computer Society)", "Founding Member — Photography Club", "News Captain — Freedom House", "Committee Member — Pi Club (Math)", "Member — Quantum Club (Science)"]
        },
        {
          term: "Achievements",
          courses: ["1st Place — National Film Making Competition (GELF)", "Special Achiever for IT Skills"]
        }
      ]
    }
  ],
  certifications: [
    // ──────────────────────────────────────────────────────
    // TO ADD A NEW CERT: Copy the template, fill details,
    // and place the cert image in public/ folder.
    // ──────────────────────────────────────────────────────
    {
      name: "Professional Scrum Master I (PSM I)",
      org: "Scrum.org",
      image: "/cert-psm1.png",
      verifyUrl: "https://www.scrum.org/certificates/free-psm-i",
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      org: "Microsoft",
      image: "/cert-az900.png",
      verifyUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
    },
    {
      name: "Power Platform App Maker (PL-100)",
      org: "Microsoft",
      image: "/cert-pl100.png",
      verifyUrl: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-app-maker/",
    },
    {
      name: "Power Platform Developer (PL-400)",
      org: "Microsoft",
      image: "/cert-pl400.png",
      verifyUrl: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-developer-associate/",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services",
      image: "/cert-aws-ccp.png",
      verifyUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    },
    // {
    //   name: "Your Cert Name",
    //   org: "Issuing Organization",
    //   image: "/your-cert-image.png",
    //   verifyUrl: "https://verify-link.com",
    // },
  ],
  awards: [
    { name: "Encore Kudos Award", org: "KPMG India", logoText: "KPMG", logoBg: "#00338D", date: "Dec 2024", description: "Recognized for professionalism, quality deliverables, and quick learning" },
    { name: "Encore Spot Award", org: "KPMG India", logoText: "KPMG", logoBg: "#00338D", date: "Dec 2024", description: "Awarded for proactive client demos, pre-sales excellence, and team impact" },
    { name: "Up for Anything Team Member", org: "KPMG India", logoText: "KPMG", logoBg: "#00338D", date: "Mar 2023", description: "Awarded for ownership and high-quality results under pressure" },
    { name: "Chairperson — The Scientific Research Society", org: "VIT", logoText: "VIT", logoBg: "#1A237E", date: "Jan 2021", description: "Led 100+ members and 15+ events on Data Science, ML, and AI, including outreach for underprivileged children" },
    { name: "Special Achiever Award", org: "Springdales School", logoText: "SPS", logoBg: "#8B0000", date: "Feb 2018", description: "Recognized by the Principal for organizing state-level technical fests and representing the school at technical competitions, bringing laurels to Springdales" }
  ],
  testimonials: [
    {
      quote: "Focused and diligent, demonstrating a great work ethic by seamlessly working on multiple projects and delivering tasks on time. He went above and beyond, leading the team in feature development, code reviews, and knowledge transfer sessions.",
      name: "Gaurav Dureja",
      title: "Technical Architect, KPMG India",
      relationship: "Direct Manager & Mentor",
      logoText: "KPMG",
      logoBg: "#00338D"
    },
    {
      quote: "His ability to coordinate across multiple departments and propose innovative solutions demonstrated his technical expertise, strategic thinking, and attention to detail. He will be an asset to any organization.",
      name: "Prince Sidana",
      title: "Director, Digital Cloud Solutions, KPMG India",
      relationship: "Manager & Mentor",
      logoText: "KPMG",
      logoBg: "#00338D"
    },
    {
      quote: "Through his technical expertise and leadership skills, he has made significant contributions across various projects. He mentored junior developers, guided code reviews, and promoted best software practices.",
      name: "Subhajyoti Majumdar",
      title: "Senior Technical Architect, KPMG India",
      relationship: "Project & Performance Manager",
      logoText: "KPMG",
      logoBg: "#00338D"
    }
  ],
  blogPosts: [
    // ──────────────────────────────────────────────────────
    // TO ADD A NEW ARTICLE: Copy the template below,
    // fill in your details, and paste it here.
    // The article body supports simple text paragraphs.
    // ──────────────────────────────────────────────────────
    {
      title: "Building Enterprise ESG Platforms That Actually Get Used",
      date: "Coming Soon",
      description: "Lessons from building an ESG reporting system at KPMG that achieved real adoption. How user-centered design, stakeholder buy-in, and iterative feedback loops made the difference.",
      tags: ["Sustainability", "Data Engineering"],
      linkedinUrl: "",
      body: null, // null = coming soon, string = full article
    },
    {
      title: "Why Power Platform Is Underrated for Enterprise Automation",
      date: "Coming Soon",
      description: "After building 10+ enterprise apps on Power Platform, here's why low-code gets a bad reputation and when it's actually the right call for serious business problems.",
      tags: ["Low-Code", "Enterprise"],
      linkedinUrl: "",
      body: null,
    },
    {
      title: "From Mechanical Engineering to Product Thinking",
      date: "Coming Soon",
      description: "My non-linear path from designing physical systems to building digital products. How engineering fundamentals translate surprisingly well to product management.",
      tags: ["Career", "Product"],
      linkedinUrl: "",
      body: null,
    },
    // {
    //   title: "Your Article Title",
    //   date: "Mar 2026",
    //   description: "A short preview of your article.",
    //   tags: ["Tag1", "Tag2"],
    //   linkedinUrl: "https://linkedin.com/...",
    //   body: "Full article text here. Use \\n\\n for paragraph breaks.",
    // },
  ]
};

// ─── Icons ────────────────────────────────────────────
const Icons = {
  Sun: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  Moon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
  Menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>,
  X: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  GitHub: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  LinkedIn: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Twitter: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  Arrow: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>,
  Download: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Award: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Cert: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M3 10h18M7 16v4M17 16v4"/></svg>,
  Quote: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>,
  Calendar: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  ChevronUp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>,
  MapPin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
};

// ─── Theme ────────────────────────────────────────────
const themes = {
  dark: {
    bg: "#09090B",
    bgAlt: "#121215",
    bgCard: "#16161A",
    bgCardHover: "#1E1E24",
    text: "#ECECEF",
    textMuted: "#94949E",
    textDim: "#56565E",
    accent: "#38BDF8",
    accentDim: "rgba(56,189,248,0.10)",
    border: "rgba(255,255,255,0.07)",
    borderHover: "rgba(255,255,255,0.14)",
    shadow: "0 4px 24px rgba(0,0,0,0.5)",
    navBg: "rgba(9,9,11,0.88)",
  },
  light: {
    bg: "#FAFBFC",
    bgAlt: "#EFF1F3",
    bgCard: "#FFFFFF",
    bgCardHover: "#F5F6F8",
    text: "#111218",
    textMuted: "#5C5E6A",
    textDim: "#9395A0",
    accent: "#0C8CE9",
    accentDim: "rgba(12,140,233,0.08)",
    border: "rgba(0,0,0,0.08)",
    borderHover: "rgba(0,0,0,0.15)",
    shadow: "0 4px 24px rgba(0,0,0,0.06)",
    navBg: "rgba(250,251,252,0.88)",
  }
};

const sections = ["Home", "About", "Skills", "Experience", "Education", "Projects", "Certifications", "Awards", "Testimonials", "Blog", "Contact"];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showTop, setShowTop] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineFade, setTaglineFade] = useState(true);
  const [expModal, setExpModal] = useState(null);
  const [eduModal, setEduModal] = useState(null);
  const [projModal, setProjModal] = useState(null);
  const [blogModal, setBlogModal] = useState(null);
  const t = dark ? themes.dark : themes.light;
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      let current = "Home";
      for (const s of sections) {
        const el = sectionRefs.current[s];
        if (el && el.getBoundingClientRect().top <= 120) current = s;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rotating tagline animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineFade(false);
      setTimeout(() => {
        setTaglineIndex(prev => (prev + 1) % portfolioData.rotatingTaglines.length);
        setTaglineFade(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = (name) => (el) => { sectionRefs.current[name] = el; };

  const chipStyle = {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "100px",
    fontSize: "13px",
    fontWeight: 500,
    background: t.accentDim,
    color: t.accent,
    border: `1px solid ${t.border}`,
    letterSpacing: "0.01em",
  };

  return (
    <div style={{ background: t.bg, color: t.text, minHeight: "100vh", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", transition: "background 0.4s, color 0.4s" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Mono:wght@400;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />

      {/* ─── Navbar ─── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: t.navBg, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${t.border}`, transition: "all 0.4s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 18, color: t.accent, cursor: "pointer" }} onClick={() => scrollTo("Home")}>
            AA<span style={{ color: t.textDim }}>.</span>
          </span>
          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="desktop-nav">
            {sections.map(s => (
              <button key={s} onClick={() => scrollTo(s)} style={{
                background: active === s ? t.accentDim : "transparent",
                color: active === s ? t.accent : t.textMuted,
                border: "none", padding: "6px 14px", borderRadius: 8, cursor: "pointer",
                fontSize: 13, fontWeight: 500, transition: "all 0.2s", fontFamily: "inherit",
              }}>
                {s}
              </button>
            ))}
            <button onClick={() => setDark(!dark)} style={{
              background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 8,
              padding: "8px", cursor: "pointer", color: t.textMuted, display: "flex", alignItems: "center", marginLeft: 8
            }}>
              {dark ? <Icons.Sun /> : <Icons.Moon />}
            </button>
          </div>
          {/* Mobile toggle */}
          <div style={{ display: "none" }} className="mobile-toggle">
            <button onClick={() => setDark(!dark)} style={{ background: "none", border: "none", color: t.textMuted, cursor: "pointer", padding: 8, display: "flex" }}>
              {dark ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: t.text, cursor: "pointer", padding: 8, display: "flex" }}>
              {menuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ padding: "8px 24px 16px", display: "flex", flexDirection: "column", gap: 4, borderTop: `1px solid ${t.border}` }}>
            {sections.map(s => (
              <button key={s} onClick={() => scrollTo(s)} style={{
                background: active === s ? t.accentDim : "transparent",
                color: active === s ? t.accent : t.textMuted,
                border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer",
                fontSize: 14, fontWeight: 500, textAlign: "left", fontFamily: "inherit",
              }}>{s}</button>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media(max-width:768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; gap: 4px; }
          .hero-layout { flex-direction: column !important; text-align: center !important; }
          .hero-layout > div:first-child { align-items: center !important; }
          .proj-grid { grid-template-columns: 1fr !important; }
          .skill-grid { grid-template-columns: 1fr !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
          .test-grid { grid-template-columns: 1fr !important; }
          .about-layout { flex-direction: column !important; }
          .section-pad { padding: 80px 16px !important; }
          .hero-title { font-size: 40px !important; }
          .timeline-line { left: 16px !important; }
          .timeline-diamond { left: 16px !important; }
          .timeline-item { justify-content: flex-end !important; }
          .timeline-card { width: calc(100% - 48px) !important; }
        }
        @media(min-width:769px) {
          .mobile-toggle { display: none !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${t.bg}; }
        ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${t.textDim}; }
        ::selection { background: ${t.accent}; color: ${t.bg}; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        @keyframes scrollCerts { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
        @keyframes glowPulse { 0%,100% { box-shadow: 0 0 40px ${t.accentDim}, 0 0 80px ${t.accentDim}; } 50% { box-shadow: 0 0 60px ${t.accent}44, 0 0 120px ${t.accentDim}; } }
        @keyframes borderRotate { 0% { border-color: ${t.accent}; } 33% { border-color: #2D9CDB; } 66% { border-color: #9B51E0; } 100% { border-color: ${t.accent}; } }
        .hero-photo {
          animation: float 5s ease-in-out infinite, glowPulse 4s ease-in-out infinite, borderRotate 8s linear infinite;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hero-photo:hover {
          transform: translateY(-6px) scale(1.03) !important;
          box-shadow: 0 0 80px ${t.accent}55, 0 0 140px ${t.accentDim} !important;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ─── Hero ─── */}
        <section ref={ref("Home")} className="section-pad" style={{ padding: "160px 0 100px", animation: "fadeUp 0.8s ease", background: `radial-gradient(ellipse at 20% 50%, ${t.accent}08 0%, transparent 60%)` }}>
          <div className="hero-layout" style={{ display: "flex", alignItems: "center", gap: 60, justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 13, color: t.textMuted, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>{portfolioData.availability}</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", fontFamily: "'Sora', 'DM Sans', sans-serif" }}>
                {portfolioData.name.split(" ")[0]}<br />
                <span style={{ color: t.accent }}>{portfolioData.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <div style={{ fontSize: 20, color: t.textMuted, lineHeight: 1.5, maxWidth: 480, height: 32, overflow: "hidden" }}>
                <span style={{
                  display: "inline-block",
                  opacity: taglineFade ? 1 : 0,
                  transform: taglineFade ? "translateY(0)" : "translateY(-12px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  fontWeight: 500,
                  color: t.accent,
                }}>{portfolioData.rotatingTaglines[taglineIndex]}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: t.textDim, fontSize: 14 }}>
                <Icons.MapPin /> {portfolioData.location}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
                <button onClick={() => scrollTo("Projects")} style={{
                  background: t.accent, color: "#fff", border: "none", padding: "14px 28px",
                  borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                  display: "flex", alignItems: "center", gap: 8, transition: "all 0.25s",
                  boxShadow: `0 4px 14px ${t.accent}40`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${t.accent}50`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 14px ${t.accent}40`; }}
                >View My Work <Icons.Arrow /></button>
                <a href="/Abhishek_Adurti_Resume.pdf" download style={{
                  background: "transparent", color: t.text, border: `1.5px solid ${t.border}`,
                  padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: "pointer",
                  fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
                  transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.text; e.currentTarget.style.transform = "translateY(0)"; }}
                ><Icons.Download /> Resume</a>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                {[
                  ["github", portfolioData.social.github, <Icons.GitHub />],
                  ["linkedin", portfolioData.social.linkedin, <Icons.LinkedIn />],
                  ["email", `mailto:${portfolioData.email}`, <Icons.Mail />],
                ].map(([k, href, icon]) => (
                  <a key={k} href={href} target={k === "email" ? undefined : "_blank"} rel="noreferrer"
                    style={{
                      width: 42, height: 42, borderRadius: 10,
                      background: t.bgCard, border: `1px solid ${t.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: t.textDim, textDecoration: "none",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = t.accent;
                      e.currentTarget.style.borderColor = t.accent;
                      e.currentTarget.style.background = t.accentDim;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = t.textDim;
                      e.currentTarget.style.borderColor = t.border;
                      e.currentTarget.style.background = t.bgCard;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >{icon}</a>
                ))}
              </div>
            </div>
            <div className="hero-photo" style={{
              width: 280, height: 280, borderRadius: 32, overflow: "hidden",
              flexShrink: 0, position: "relative",
              boxShadow: `0 0 40px ${t.accentDim}, 0 0 80px ${t.accentDim}`,
              border: `3px solid ${t.accent}`,
            }}>
              <img src="/headshot.jpeg" alt="Abhishek Adurti" style={{
                width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
                display: "block",
              }} />
            </div>
          </div>
        </section>

        {/* ─── About ─── */}
        <section ref={ref("About")} className="section-pad" style={{ padding: "100px 0" }}>
          <SectionHeader t={t} label="01" title="About Me" />
          <div className="about-layout" style={{ display: "flex", gap: 48, marginTop: 48 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: t.textMuted, marginBottom: 20 }}>
                Mechanical engineer turned tech consultant turned product thinker. I spent 3+ years at KPMG building enterprise platforms for Fortune 500 clients, automating 10,000+ monthly transactions, hitting 95% user adoption, and mentoring a dev team along the way. Somewhere in there, I realized I cared less about <em style={{ fontStyle: "italic", color: t.text }}>how</em> to build and more about <em style={{ fontStyle: "italic", color: t.text }}>what</em> to build and <em style={{ fontStyle: "italic", color: t.text }}>why</em>.
              </p>
              {portfolioData.about.slice(1).map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.75, color: t.textMuted, marginBottom: 20 }}>{p}</p>
              ))}
            </div>
            <div style={{
              width: 300, flexShrink: 0, background: t.bgCard, borderRadius: 20, padding: 28,
              border: `1px solid ${t.border}`, height: "fit-content",
            }}>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: t.textDim, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Quick Facts</p>
              {[
                ["Experience", "3+ years @ KPMG"],
                ["Now", "MISM @ CMU Heinz"],
                ["Background", "Engineer"],
                ["Superpower", "Build it AND sell it"],
                ["Fun fact", "Tennis & travel addict"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${t.border}` }}>
                  <span style={{ color: t.textDim, fontSize: 14 }}>{k}</span>
                  <span style={{ color: t.text, fontSize: 14, fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section ref={ref("Skills")} className="section-pad" style={{ padding: "100px 0", marginLeft: -24, marginRight: -24, paddingLeft: 24, paddingRight: 24, background: t.bgAlt, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}>
          <SectionHeader t={t} label="02" title="Tech Stack" />
          {/* 2x2 Main Grid */}
          <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 48 }}>
            {portfolioData.skills.map((group) => (
              <div key={group.category}
                style={{
                  borderRadius: 20, padding: 28, position: "relative", overflow: "hidden", cursor: "pointer",
                  background: `linear-gradient(135deg, ${group.accent}12 0%, ${t.bgCard} 60%)`,
                  border: `1px solid ${group.accent}25`,
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${group.accent}60`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 12px 40px ${group.accent}15`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${group.accent}25`;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Subtle glow orb */}
                <div style={{
                  position: "absolute", top: -30, right: -30, width: 120, height: 120,
                  borderRadius: "50%", background: `${group.accent}08`, filter: "blur(40px)", pointerEvents: "none",
                }} />
                {/* Category icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${group.accent}20`, display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={group.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={group.iconPath} />
                  </svg>
                </div>
                {/* Category title & description */}
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{group.category}</h3>
                <p style={{ fontSize: 13, color: t.textMuted, marginBottom: 20, lineHeight: 1.5 }}>{group.description}</p>
                {/* Skill chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map(s => (
                    <div key={s.name} style={{
                      display: "flex", alignItems: "center", gap: 7,
                      padding: "8px 16px", borderRadius: 10,
                      background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                      border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                      transition: "all 0.2s",
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${group.accent}18`;
                        e.currentTarget.style.borderColor = `${group.accent}40`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
                        e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
                      }}
                    >
                      <img src={s.icon} alt={s.name} style={{ width: 18, height: 18, objectFit: "contain" }}
                        onError={e => { e.target.style.display = "none"; }}
                      />
                      <span style={{ fontSize: 14, fontWeight: 500, color: t.text }}>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Exploring strip */}
          <div style={{
            marginTop: 24, padding: "20px 28px", borderRadius: 16,
            background: t.bgCard, border: `1px solid ${t.border}`,
            display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0" />
              </svg>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#06B6D4", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Currently Exploring</span>
            </div>
            <div style={{ width: 1, height: 24, background: t.border, flexShrink: 0 }} />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {portfolioData.exploring.map(s => (
                <div key={s.name} style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "7px 14px", borderRadius: 10,
                  background: dark ? "rgba(6,182,212,0.08)" : "rgba(6,182,212,0.06)",
                  border: `1px solid ${dark ? "rgba(6,182,212,0.15)" : "rgba(6,182,212,0.12)"}`,
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(6,182,212,0.18)";
                    e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = dark ? "rgba(6,182,212,0.08)" : "rgba(6,182,212,0.06)";
                    e.currentTarget.style.borderColor = dark ? "rgba(6,182,212,0.15)" : "rgba(6,182,212,0.12)";
                  }}
                >
                  <img src={s.icon} alt={s.name} style={{ width: 16, height: 16, objectFit: "contain" }}
                    onError={e => { e.target.style.display = "none"; }}
                  />
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#06B6D4" }}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Experience Timeline ─── */}
        <section ref={ref("Experience")} className="section-pad" style={{ padding: "100px 0" }}>
          <SectionHeader t={t} label="03" title="Experience" />
          <div style={{ position: "relative", marginTop: 48 }}>
            {/* Timeline center line */}
            <div className="timeline-line" style={{
              position: "absolute", left: "50%", top: 0, bottom: 0, width: 2,
              background: `linear-gradient(to bottom, ${t.accent}, ${t.border})`,
              transform: "translateX(-50%)",
            }} />

            {portfolioData.experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="timeline-item" style={{
                  display: "flex", justifyContent: isLeft ? "flex-start" : "flex-end",
                  position: "relative", marginBottom: i < portfolioData.experience.length - 1 ? 48 : 0,
                  paddingLeft: isLeft ? 0 : "0",
                  paddingRight: isLeft ? "0" : 0,
                }}>
                  {/* Diamond node on the line */}
                  <div className="timeline-diamond" style={{
                    position: "absolute", left: "50%", top: 28,
                    transform: "translateX(-50%) rotate(45deg)",
                    width: 16, height: 16,
                    background: t.accent, border: `3px solid ${t.bg}`,
                    zIndex: 2, boxShadow: `0 0 12px ${t.accentDim}`,
                  }} />

                  {/* Card */}
                  <div className="timeline-card" style={{
                    width: "calc(50% - 48px)",
                    background: t.bgCard, borderRadius: 20, padding: 28,
                    border: `1px solid ${t.border}`,
                    position: "relative", transition: "all 0.3s ease",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = t.accent + "40";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 12px 40px ${t.accentDim}`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = t.border;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: 10, background: exp.logoBg,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <span style={{ color: "#fff", fontSize: 11, fontWeight: 800, letterSpacing: "0.02em", fontFamily: "'DM Sans', sans-serif" }}>{exp.logoText}</span>
                      </div>
                      <div>
                        <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{exp.role}</h3>
                        <div style={{ display: "flex", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
                          <span style={{
                            fontSize: 11, padding: "3px 10px", borderRadius: 6,
                            background: t.accentDim, color: t.accent, fontWeight: 600,
                          }}>{exp.company}</span>
                          <span style={{
                            fontSize: 11, padding: "3px 10px", borderRadius: 6,
                            background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                            color: t.textDim,
                          }}>{exp.location}</span>
                          <span style={{
                            fontSize: 11, padding: "3px 10px", borderRadius: 6,
                            background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                            color: t.textDim,
                          }}>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: t.textDim, marginBottom: 14 }}>
                      {exp.period} · {exp.duration}
                    </p>

                    {/* Description */}
                    <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, marginBottom: 18 }}>
                      {exp.description}
                    </p>

                    {/* Tech icons */}
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {exp.tech.map(tech => (
                        <span key={tech} style={{
                          padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                          background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                          color: t.textMuted, border: `1px solid ${t.border}`,
                        }}>{tech}</span>
                      ))}
                    </div>

                    {/* View Projects link */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div style={{ marginTop: 16, textAlign: "right" }}>
                        <button onClick={() => setExpModal(i)} style={{
                          background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
                          fontSize: 13, fontWeight: 600, color: t.accent, fontStyle: "italic",
                          display: "inline-flex", alignItems: "center", gap: 6,
                          transition: "all 0.2s",
                        }}
                          onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
                          onMouseLeave={e => { e.currentTarget.style.gap = "6px"; }}
                        >
                          Click to view projects <Icons.Arrow />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Education ─── */}
        <section ref={ref("Education")} className="section-pad" style={{ padding: "100px 0", marginLeft: -24, marginRight: -24, paddingLeft: 24, paddingRight: 24, background: t.bgAlt, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}>
          <SectionHeader t={t} label="04" title="Education" />
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }}>
            {portfolioData.education.map((edu, i) => (
              <div key={i} style={{
                background: t.bgCard, borderRadius: 20, padding: 28, border: `1px solid ${t.border}`,
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = t.accent + "30";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 30px ${t.accentDim}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, background: edu.logoBg,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    overflow: "hidden", padding: edu.logoUrl ? 4 : 0,
                  }}>
                    <img src={edu.logoUrl || ""} alt="" style={{ width: 38, height: 38, objectFit: "contain", display: edu.logoUrl ? "block" : "none" }}
                      onError={e => { e.target.style.display = "none"; e.target.parentElement.querySelector(".logo-fallback").style.display = "block"; }}
                    />
                    <span className="logo-fallback" style={{ color: "#fff", fontSize: edu.logoText.length > 3 ? 9 : 12, fontWeight: 800, letterSpacing: "0.02em", fontFamily: "'DM Sans', sans-serif", display: edu.logoUrl ? "none" : "block" }}>{edu.logoText}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>{edu.degree}</h3>
                    <p style={{ fontSize: 14, color: t.textMuted, marginTop: 4 }}>{edu.school}</p>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: t.textDim, marginTop: 6 }}>
                      {edu.period}{edu.gpa ? `  ·  GPA: ${edu.gpa}` : ""}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, marginTop: 16 }}>
                  {edu.description}
                </p>

                {/* View Curriculum */}
                <button onClick={() => setEduModal(i)} style={{
                  background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
                  fontSize: 13, fontWeight: 600, color: t.accent, fontStyle: "italic",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  marginTop: 14, transition: "all 0.2s", padding: 0,
                }}
                  onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
                  onMouseLeave={e => { e.currentTarget.style.gap = "6px"; }}
                >
                  Click to view detailed curriculum <Icons.Arrow />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section ref={ref("Projects")} className="section-pad" style={{ padding: "100px 0" }}>
          <SectionHeader t={t} label="05" title="Projects" />
          <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 48 }}>
            {portfolioData.projects.map((p, pi) => (
              <div key={p.id} onClick={() => setProjModal(pi)} style={{
                background: t.bgCard, borderRadius: 20, padding: 28, border: `1px solid ${t.border}`,
                transition: "all 0.3s", cursor: "pointer", position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = p.color + "40";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}15`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Top row: color dot + github icon */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${p.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: p.color }} />
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{
                        width: 32, height: 32, borderRadius: 8, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                        border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                        color: t.textDim, textDecoration: "none", transition: "all 0.2s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = t.accent; e.currentTarget.style.borderColor = t.accent; }}
                        onMouseLeave={e => { e.currentTarget.style.color = t.textDim; e.currentTarget.style.borderColor = t.border; }}
                      ><Icons.GitHub /></a>
                    )}
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{
                        width: 32, height: 32, borderRadius: 8, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                        border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                        color: t.textDim, textDecoration: "none", transition: "all 0.2s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = t.accent; e.currentTarget.style.borderColor = t.accent; }}
                        onMouseLeave={e => { e.currentTarget.style.color = t.textDim; e.currentTarget.style.borderColor = t.border; }}
                      ><Icons.Arrow /></a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</h3>

                {/* Category + Date row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 13, color: p.color, fontStyle: "italic", fontWeight: 500 }}>{p.category}</span>
                  <span style={{ fontSize: 12, color: t.textDim }}>{p.date}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{p.description}</p>

                {/* Period chips */}
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  {p.period.map((per, perI) => (
                    <span key={perI} style={{
                      padding: "4px 12px", borderRadius: 8, fontSize: 11,
                      background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                      color: t.textDim, border: `1px solid ${t.border}`,
                    }}>{per}</span>
                  ))}
                </div>

                {/* Tech chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tech.map(tech => (
                    <span key={tech} style={{
                      padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 500,
                      background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                      color: t.textMuted, border: `1px solid ${t.border}`,
                    }}>{tech}</span>
                  ))}
                </div>

                {/* Expand hint */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  marginTop: 18, paddingTop: 14, borderTop: `1px solid ${t.border}`,
                  color: t.textDim, fontSize: 12, fontWeight: 500, transition: "color 0.2s",
                }}>
                  <span>View Details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Certifications ─── */}
        <section ref={ref("Certifications")} className="section-pad" style={{ padding: "100px 0", overflow: "hidden" }}>
          <SectionHeader t={t} label="06" title="Certifications" />
          {/* Auto-scrolling carousel */}
          <div style={{ marginTop: 48, position: "relative" }}>
            {/* Fade edges */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, background: `linear-gradient(to right, ${t.bg}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, background: `linear-gradient(to left, ${t.bg}, transparent)`, zIndex: 2, pointerEvents: "none" }} />

            <div className="cert-scroll" style={{
              display: "flex", gap: 24, width: "max-content",
              animation: `scrollCerts ${portfolioData.certifications.length * 5}s linear infinite`,
            }}>
              {/* Duplicate for seamless loop */}
              {[...portfolioData.certifications, ...portfolioData.certifications].map((cert, i) => (
                <a key={i} href={cert.verifyUrl} target="_blank" rel="noreferrer" style={{
                  width: 300, flexShrink: 0, textDecoration: "none", color: t.text,
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                    e.currentTarget.querySelector(".cert-img-card").style.borderColor = t.accent;
                    e.currentTarget.querySelector(".cert-img-card").style.boxShadow = `0 8px 30px ${t.accentDim}`;
                    e.currentTarget.closest(".cert-scroll").style.animationPlayState = "paused";
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.querySelector(".cert-img-card").style.borderColor = t.border;
                    e.currentTarget.querySelector(".cert-img-card").style.boxShadow = "none";
                    e.currentTarget.closest(".cert-scroll").style.animationPlayState = "running";
                  }}
                >
                  {/* Certificate image card — white bg like real certificates */}
                  <div className="cert-img-card" style={{
                    width: 300, height: 210, borderRadius: 16, overflow: "hidden",
                    background: "#FFFFFF",
                    border: `1px solid ${t.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                    padding: 12,
                  }}>
                    <img src={cert.image} alt={cert.name} style={{
                      maxWidth: "100%", maxHeight: "100%", objectFit: "contain",
                    }} onError={e => {
                      e.target.style.display = "none";
                      const fallback = e.target.parentElement.querySelector(".cert-fallback");
                      if (fallback) fallback.style.display = "flex";
                    }} />
                    <div className="cert-fallback" style={{
                      display: "none", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      width: "100%", height: "100%", gap: 8,
                    }}>
                      <span style={{ fontSize: 28, fontWeight: 800, color: "#333" }}>{cert.org.split(" ")[0]}</span>
                      <span style={{ fontSize: 11, color: "#666", textAlign: "center", padding: "0 12px", lineHeight: 1.4 }}>{cert.name}</span>
                    </div>
                  </div>
                  {/* Name */}
                  <p style={{ fontSize: 13, fontWeight: 600, textAlign: "center", lineHeight: 1.4, maxWidth: 280, color: t.text }}>{cert.name}</p>
                </a>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 12, color: t.textDim, marginTop: 24 }}>
              Click any certificate to verify · Auto-scrolling
            </p>
          </div>
        </section>

        {/* ─── Awards ─── */}
        <section ref={ref("Awards")} className="section-pad" style={{ padding: "100px 0" }}>
          <SectionHeader t={t} label="07" title="Awards & Recognition" />
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }}>
            {portfolioData.awards.map((aw, i) => (
              <div key={i} style={{
                background: t.bgCard, borderRadius: 20, padding: 28, border: `1px solid ${t.border}`,
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = t.accent + "30";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 30px ${t.accentDim}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, background: aw.logoBg,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ color: "#fff", fontSize: aw.logoText.length > 3 ? 9 : 12, fontWeight: 800, letterSpacing: "0.02em", fontFamily: "'DM Sans', sans-serif" }}>{aw.logoText}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>{aw.name}</h3>
                    <p style={{ fontSize: 14, color: t.accent, fontWeight: 500, marginTop: 4 }}>{aw.org}</p>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: t.textDim, marginTop: 6 }}>{aw.date}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, marginTop: 16 }}>{aw.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <section ref={ref("Testimonials")} className="section-pad" style={{ padding: "100px 0", marginLeft: -24, marginRight: -24, paddingLeft: 24, paddingRight: 24, background: t.bgAlt, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}>
          <SectionHeader t={t} label="08" title="Testimonials" />
          <div className="test-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 48 }}>
            {portfolioData.testimonials.map((test, i) => (
              <div key={i} style={{
                background: t.bgCard, borderRadius: 20, padding: 28, border: `1px solid ${t.border}`,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = t.accent + "30";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 30px ${t.accentDim}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <Icons.Quote />
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: t.textMuted, marginTop: 12, fontStyle: "italic" }}>"{test.quote}"</p>
                </div>
                <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${t.border}`, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, background: test.logoBg,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ color: "#fff", fontSize: test.logoText.length > 3 ? 7 : 9, fontWeight: 800, fontFamily: "'DM Sans', sans-serif" }}>{test.logoText}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600 }}>{test.name}</p>
                    <p style={{ fontSize: 12, color: t.textMuted }}>{test.title}</p>
                    <p style={{ fontSize: 11, color: t.textDim }}>{test.relationship}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Blog ─── */}
        <section ref={ref("Blog")} className="section-pad" style={{ padding: "100px 0" }}>
          <SectionHeader t={t} label="09" title="Insights" />
          <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 48 }}>
            {portfolioData.blogPosts.map((post, i) => (
              <div key={i} style={{
                background: t.bgCard, borderRadius: 20, padding: 28, border: `1px solid ${t.border}`,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                cursor: post.body ? "pointer" : "default",
                transition: "all 0.3s ease", minHeight: 240,
              }}
                onClick={() => post.body ? setBlogModal(i) : null}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = t.accent + "30";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 30px ${t.accentDim}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  {/* Date chip */}
                  <span style={{
                    display: "inline-block", padding: "4px 12px", borderRadius: 20, fontSize: 12,
                    background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                    color: t.textDim, border: `1px solid ${t.border}`, marginBottom: 16,
                  }}>{post.date}</span>

                  {/* Title */}
                  <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.35, marginBottom: 12 }}>{post.title}</h3>

                  {/* Description */}
                  <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.65 }}>{post.description}</p>
                </div>

                {/* Footer: Read Article + LinkedIn */}
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  marginTop: 20, paddingTop: 16, borderTop: `1px solid ${t.border}`,
                }}>
                  {post.body ? (
                    <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: t.accent }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                      Read Article
                    </span>
                  ) : (
                    <span style={{ fontSize: 13, fontWeight: 500, color: t.textDim, fontStyle: "italic" }}>Coming Soon</span>
                  )}
                  {post.linkedinUrl && (
                    <a href={post.linkedinUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{
                      color: t.textDim, transition: "color 0.2s", display: "flex",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = t.accent; }}
                      onMouseLeave={e => { e.currentTarget.style.color = t.textDim; }}
                    ><Icons.LinkedIn /></a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section ref={ref("Contact")} className="section-pad" style={{ padding: "100px 0 120px" }}>
          <SectionHeader t={t} label="10" title="Get In Touch" />
          <div style={{ marginTop: 48 }}>
            {/* Message */}
            <p style={{ fontSize: 18, color: t.textMuted, lineHeight: 1.6, maxWidth: 520, marginBottom: 40 }}>
              Whether it's a product role, a collaboration, or just a good conversation, I'd love to hear from you.
            </p>

            {/* Contact cards grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="cert-grid">
              {[
                {
                  icon: <Icons.Mail />,
                  label: "Email",
                  value: portfolioData.email,
                  href: `mailto:${portfolioData.email}`,
                  color: "#E8453C",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  label: "Phone",
                  value: portfolioData.phone,
                  href: `tel:${portfolioData.phone}`,
                  color: "#27AE60",
                },
                {
                  icon: <Icons.LinkedIn />,
                  label: "LinkedIn",
                  value: "abhishekadurti",
                  href: portfolioData.social.linkedin,
                  color: "#2D9CDB",
                },
                {
                  icon: <Icons.GitHub />,
                  label: "GitHub",
                  value: "AbhishekAdurti2000",
                  href: portfolioData.social.github,
                  color: "#9B51E0",
                },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"} rel="noreferrer" style={{
                  background: t.bgCard, borderRadius: 20, padding: 24, border: `1px solid ${t.border}`,
                  display: "flex", alignItems: "center", gap: 16, textDecoration: "none", color: t.text,
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = item.color + "40";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 8px 30px ${item.color}15`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = t.border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, background: `${item.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    color: item.color,
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: 12, color: t.textDim, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontSize: 15, fontWeight: 600, color: t.text }}>{item.value}</p>
                  </div>
                  <div style={{ marginLeft: "auto", color: t.textDim }}>
                    <Icons.Arrow />
                  </div>
                </a>
              ))}
            </div>

            {/* Response time note */}
            <p style={{ fontSize: 13, color: t.textDim, marginTop: 24, textAlign: "center" }}>I typically reply within 24 hours</p>
          </div>
        </section>

      </div>

      {/* ─── Experience Project Modal ─── */}
      {expModal !== null && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200,
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, animation: "fadeUp 0.3s ease",
        }} onClick={() => setExpModal(null)}>
          <div style={{
            background: t.bgCard, borderRadius: 24, padding: 36, maxWidth: 680, width: "100%",
            maxHeight: "85vh", overflowY: "auto", position: "relative",
            border: `1px solid ${t.border}`, boxShadow: `0 24px 80px rgba(0,0,0,0.4)`,
          }} onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button onClick={() => setExpModal(null)} style={{
              position: "absolute", top: 20, right: 20, background: "none", border: "none",
              color: t.textDim, cursor: "pointer", padding: 4, display: "flex",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = t.text; }}
              onMouseLeave={e => { e.currentTarget.style.color = t.textDim; }}
            >
              <Icons.X />
            </button>

            {/* Modal Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12, background: portfolioData.experience[expModal].logoBg,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 800, letterSpacing: "0.02em", fontFamily: "'DM Sans', sans-serif" }}>{portfolioData.experience[expModal].logoText}</span>
              </div>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700 }}>{portfolioData.experience[expModal].role}</h2>
                <p style={{ fontSize: 15, fontWeight: 600, color: t.accent }}>{portfolioData.experience[expModal].company}</p>
              </div>
            </div>
            <p style={{ fontSize: 13, color: t.textDim, marginBottom: 28 }}>
              {portfolioData.experience[expModal].period}  ·  {portfolioData.experience[expModal].location}
            </p>

            {/* Projects & Achievements */}
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Projects & Achievements</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {portfolioData.experience[expModal].projects.map((proj, pi) => (
                <div key={pi} style={{
                  background: t.bg, borderRadius: 16, padding: 24,
                  border: `1px solid ${t.border}`, transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent + "30"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; }}
                >
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{proj.title}</h4>
                  <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, marginBottom: 14 }}>{proj.description}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {proj.tech.map(tech => (
                      <span key={tech} style={{
                        padding: "4px 12px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                        color: t.accent, border: `1px solid ${t.accent}30`,
                        background: t.accentDim,
                      }}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Education Curriculum Modal ─── */}
      {eduModal !== null && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200,
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, animation: "fadeUp 0.3s ease",
        }} onClick={() => setEduModal(null)}>
          <div style={{
            background: t.bgCard, borderRadius: 24, padding: 36, maxWidth: 640, width: "100%",
            maxHeight: "85vh", overflowY: "auto", position: "relative",
            border: `1px solid ${t.border}`, boxShadow: `0 24px 80px rgba(0,0,0,0.4)`,
          }} onClick={e => e.stopPropagation()}>
            {/* Close */}
            <button onClick={() => setEduModal(null)} style={{
              position: "absolute", top: 20, right: 20, background: "none", border: "none",
              color: t.textDim, cursor: "pointer", padding: 4, display: "flex", transition: "color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = t.text; }}
              onMouseLeave={e => { e.currentTarget.style.color = t.textDim; }}
            ><Icons.X /></button>

            {/* Header with icon + degree + school */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 24, borderBottom: `1px solid ${t.border}`, marginBottom: 28 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, background: portfolioData.education[eduModal].logoBg,
                display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: portfolioData.education[eduModal].logoUrl ? 4 : 0,
              }}>
                <img src={portfolioData.education[eduModal].logoUrl || ""} alt="" style={{ width: 38, height: 38, objectFit: "contain", display: portfolioData.education[eduModal].logoUrl ? "block" : "none" }}
                  onError={e => { e.target.style.display = "none"; e.target.parentElement.querySelector(".logo-fallback").style.display = "block"; }}
                />
                <span className="logo-fallback" style={{ color: "#fff", fontSize: portfolioData.education[eduModal].logoText.length > 3 ? 9 : 12, fontWeight: 800, fontFamily: "'DM Sans', sans-serif", display: portfolioData.education[eduModal].logoUrl ? "none" : "block" }}>{portfolioData.education[eduModal].logoText}</span>
              </div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700 }}>{portfolioData.education[eduModal].degree}</h2>
                <p style={{ fontSize: 14, color: t.textMuted, marginTop: 2 }}>{portfolioData.education[eduModal].school}</p>
              </div>
            </div>

            {/* Coursework sections as chips */}
            {portfolioData.education[eduModal].semesters.map((sem, si) => (
              <div key={si} style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>{sem.term}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {sem.courses.map((course, ci) => (
                    <span key={ci} style={{
                      padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 500,
                      background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                      color: t.text, border: `1px solid ${t.border}`,
                      transition: "all 0.2s",
                    }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = t.accent + "40"; e.currentTarget.style.background = t.accentDim; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"; }}
                    >{course}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Societies if present */}
            {portfolioData.education[eduModal].societies && (
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Activities & Societies</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {portfolioData.education[eduModal].societies.map((s, si) => (
                    <div key={si} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: t.textDim, marginTop: 1 }}>•</span>
                      <span style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Project Detail Modal ─── */}
      {projModal !== null && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200,
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, animation: "fadeUp 0.3s ease",
        }} onClick={() => setProjModal(null)}>
          <div style={{
            background: t.bgCard, borderRadius: 24, padding: 36, maxWidth: 700, width: "100%",
            maxHeight: "85vh", overflowY: "auto", position: "relative",
            border: `1px solid ${t.border}`, boxShadow: `0 24px 80px rgba(0,0,0,0.4)`,
          }} onClick={e => e.stopPropagation()}>
            {/* Close */}
            <button onClick={() => setProjModal(null)} style={{
              position: "absolute", top: 20, right: 20, background: "none", border: "none",
              color: t.textDim, cursor: "pointer", padding: 4, display: "flex", transition: "color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = t.text; }}
              onMouseLeave={e => { e.currentTarget.style.color = t.textDim; }}
            ><Icons.X /></button>

            {(() => {
              const p = portfolioData.projects[projModal];
              return (
                <>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, paddingBottom: 24, borderBottom: `1px solid ${t.border}`, marginBottom: 28 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: `${p.color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <div style={{ width: 16, height: 16, borderRadius: "50%", background: p.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h2 style={{ fontSize: 22, fontWeight: 700, paddingRight: 40 }}>{p.title}</h2>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 4 }}>
                        <span style={{ fontSize: 13, color: p.color, fontStyle: "italic", fontWeight: 500 }}>{p.category}</span>
                        <span style={{ fontSize: 12, color: t.textDim }}>{p.period[0]} — {p.period[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* GitHub link below header */}
                  {p.github && (
                    <div style={{ display: "flex", gap: 10, marginTop: -16, marginBottom: 24 }}>
                      <a href={p.github} target="_blank" rel="noreferrer" style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "8px 16px", borderRadius: 10,
                        background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                        border: `1px solid ${t.border}`, color: t.textMuted, fontSize: 13, fontWeight: 500,
                        textDecoration: "none", transition: "all 0.2s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = t.accent; e.currentTarget.style.borderColor = t.accent; }}
                        onMouseLeave={e => { e.currentTarget.style.color = t.textMuted; e.currentTarget.style.borderColor = t.border; }}
                      ><Icons.GitHub /> View on GitHub</a>
                    </div>
                  )}

                  {/* Context */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Problem & Context</h3>
                    <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7 }}>{p.context}</p>
                  </div>

                  {/* Role */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>My Role</h3>
                    <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7 }}>{p.role}</p>
                  </div>

                  {/* Key Features */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Key Features</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {p.features.map((f, fi) => (
                        <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <span style={{ color: p.color, marginTop: 3, flexShrink: 0 }}><Icons.Check /></span>
                          <span style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div style={{
                    marginBottom: 24, padding: 20, borderRadius: 14,
                    background: `${p.color}08`, border: `1px solid ${p.color}20`,
                  }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: p.color }}>Impact</h3>
                    <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7 }}>{p.impact}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Tech Stack</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {p.tech.map(tech => (
                        <span key={tech} style={{
                          padding: "7px 16px", borderRadius: 10, fontSize: 13, fontWeight: 500,
                          background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                          color: t.text, border: `1px solid ${t.border}`,
                        }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* ─── Blog Article Modal ─── */}
      {blogModal !== null && portfolioData.blogPosts[blogModal].body && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200,
          background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
          display: "flex", alignItems: "flex-start", justifyContent: "center",
          padding: "40px 24px", overflowY: "auto", animation: "fadeUp 0.3s ease",
        }} onClick={() => setBlogModal(null)}>
          <div style={{
            background: t.bgCard, borderRadius: 24, padding: "48px 40px", maxWidth: 720, width: "100%",
            position: "relative", border: `1px solid ${t.border}`, boxShadow: `0 24px 80px rgba(0,0,0,0.4)`,
            marginTop: 20, marginBottom: 40,
          }} onClick={e => e.stopPropagation()}>
            {/* Back link */}
            <button onClick={() => setBlogModal(null)} style={{
              background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
              fontSize: 13, color: t.textDim, display: "flex", alignItems: "center", gap: 6,
              marginBottom: 28, padding: 0, transition: "color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = t.accent; }}
              onMouseLeave={e => { e.currentTarget.style.color = t.textDim; }}
            >
              ← Back to Insights
            </button>

            {/* Title */}
            <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.25, marginBottom: 16, letterSpacing: "-0.02em" }}>
              {portfolioData.blogPosts[blogModal].title}
            </h1>

            {/* Meta row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${t.border}` }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, fontSize: 12,
                background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                color: t.textDim, border: `1px solid ${t.border}`,
              }}>
                <Icons.Calendar /> {portfolioData.blogPosts[blogModal].date}
              </span>
              {portfolioData.blogPosts[blogModal].linkedinUrl && (
                <a href={portfolioData.blogPosts[blogModal].linkedinUrl} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: t.textDim,
                  textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = t.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.color = t.textDim; }}
                ><Icons.LinkedIn /> Discuss on LinkedIn</a>
              )}
            </div>

            {/* Article body */}
            <div style={{ fontSize: 16, color: t.textMuted, lineHeight: 1.85 }}>
              {portfolioData.blogPosts[blogModal].body.split("\n\n").map((para, pi) => (
                <p key={pi} style={{ marginBottom: 20 }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Footer ─── */}
      <footer style={{
        borderTop: `1px solid ${t.border}`, padding: "48px 24px 32px",
        background: t.bgAlt,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 18, color: t.accent }}>AA<span style={{ color: t.textDim }}>.</span></span>
            <p style={{ fontSize: 13, color: t.textDim, marginTop: 4 }}>Built with care in Pittsburgh.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              ["github", portfolioData.social.github, <Icons.GitHub />],
              ["linkedin", portfolioData.social.linkedin, <Icons.LinkedIn />],
              ["email", `mailto:${portfolioData.email}`, <Icons.Mail />],
            ].map(([k, href, icon]) => (
              <a key={k} href={href} target={k === "email" ? undefined : "_blank"} rel="noreferrer" style={{
                width: 36, height: 36, borderRadius: 10, background: t.bgCard, border: `1px solid ${t.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: t.textDim, textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = t.accent; e.currentTarget.style.borderColor = t.accent; }}
                onMouseLeave={e => { e.currentTarget.style.color = t.textDim; e.currentTarget.style.borderColor = t.border; }}
              >{icon}</a>
            ))}
          </div>
          <p style={{ fontSize: 12, color: t.textDim }}>© 2026 {portfolioData.name}</p>
        </div>
      </footer>

      {/* ─── Back to Top ─── */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
          position: "fixed", bottom: 32, right: 32, width: 48, height: 48, borderRadius: 14,
          background: t.accent, color: t.bg, border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: t.shadow, zIndex: 50,
        }}>
          <Icons.ChevronUp />
        </button>
      )}
    </div>
  );
}

function SectionHeader({ t, label, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: t.accent, fontWeight: 700 }}>{label}</span>
      <div style={{ height: 1, width: 40, background: t.accent, opacity: 0.3 }} />
      <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em" }}>{title}</h2>
      <div style={{ height: 1, flex: 1, background: t.border, marginLeft: 16 }} />
    </div>
  );
}
