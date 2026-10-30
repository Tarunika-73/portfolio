// Projects Data
// 6 projects visible on noticeboard, with Flood Warning System and AI Medical Chatbot retained in file but hidden from list.

export const PROJECTS_DATA = [
  {
    id: 'enterprise-procurement',
    code: 'PRJ-01',
    label: '[ PROJECT FILE ]',
    caseFileNumber: '01',
    title: 'Enterprise Procurement System',
    shortDesc:
      'Built an enterprise procurement platform automating purchase requisitions, multi-level approvals, and workflow tracking.',
    overview:
      'An enterprise procurement automation platform designed to streamline purchase requisitions, multi-level approvals, and order tracking.',
    rotation: -1.2,
    visible: true,
    problem:
      'Manual procurement processes cause approval delays, inefficient supplier selection, and poor order tracking.',
    solution:
      'A centralized procurement platform supporting purchase requisitions, approval routing, role-based access, and order lifecycle tracking.',
    keyFeatures: [
      'RBAC for secure user permissions.',
      'Purchase Requisition & Approval Workflow.',
      'AI-Powered Supplier Recommendations.',
      'Purchase Order Management.',
      'Delivery Tracking',
      'Analytics & Priority Alerts',
      'Email Notifications & Cloud Storage',
    ],
    contribution:
      'Worked on backend business logic and REST APIs using Java and Spring Boot, security integration, MySQL database design, and React-based interface modules.',
    techStack: [
      'React.js',
      'JavaScript',
      'CSS',
      'Java 17',
      'Spring Boot',
      'MySQL',
      'Spring Data JPA',
      'JWT',
      'Groq API',
      'Maven',
      'Postman',
      'GitHub',
    ],
    github: {
      available: true,
      url: 'https://procurement-system-st7o-j9wlax1xc-panja-abhisheks-projects.vercel.app/login',
      label: 'Visit Live Demo',
      note: '',
    },
  },  
  
  {
    id: 'weltnexus',
    code: 'PRJ-06',
    label: '[ PROJECT FILE ]',
    sihBadge: 'SIH 2026',
    caseFileNumber: '06',
    title: 'WeltNexus — 3D Property Intelligence & Vertical Mapping',
    shortDesc:
      'Smart India Hackathon project transforming 2D land records into 3D vertical mapping, floor-level ownership, and underground utilities.',
    overview:
      'WeltNexus is a unified property intelligence platform designed to transform conventional 2D land records into structured 3D property representations. It aims to improve how land parcels, buildings, individual floors, and underground infrastructure are mapped, visualized, and managed.',
    rotation: 1.0,
    visible: true,
    problem:
      'Fragmented land records and 2D mapping systems lack a unified, verifiable view of properties, especially individual apartments in multi-storey buildings.',
    solution:
      'WeltNexus proposes an integrated GIS-based platform combining land information with interactive 3D mapping and individual apartment identification.',
    keyFeatures: [
      'Unified Land Data Integration.',
      'Interactive 3D Property Mapping.',
      '3D Apartment Identification (Building–Floor–Unit).',
      'AI-Assisted Building & Floor-Plan Extraction.',
      'Land Record & Property Verification.',
      '3D Geometry and Topology Validation.',
      'Underground Infrastructure Mapping.',
      'Role-Based Access & Governance Dashboard.',
    ],
    contribution:
      'Collaborated on SIH problem statement analysis; developed spatial processing logic, vertical building layer hierarchies, and 3D visualization architectures for land records.',
    techStack: [
      'React 19, Vite',
      'Tailwind CSS',
      'CesiumJS',
      'Three.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Python',
      'FastAPI',
      'JWT',
      'GeoJSON',
      'GitHub',
    ],
    github: {
      available: true,
      url: 'https://weltnexus.vercel.app/',
      label: 'Visit Live Demo',
      note: '',
    },
  },

  {
    id: 'investment-management',
    code: 'PRJ-03',
    label: '[ PROJECT FILE ]',
    caseFileNumber: '03',
    title: 'Investment Management System',
    shortDesc:
      'Developed a database-driven mutual fund management system with dashboards for transactions, NAV updates, and reporting.',
    overview:
      'An enterprise database application built on Oracle APEX and PL/SQL to manage mutual fund asset allocations, automate daily Net Asset Value (NAV) adjustments, and generate investor portfolio reports.',
    rotation: -0.9,
    visible: true,
    problem:
      'Mutual fund administrators faced operational drag from manual NAV calculations across fluctuating asset baskets, error-prone transaction records, and slow reporting.',
    solution:
      'Designed an automated database-centric management platform utilizing PL/SQL packages and stored procedures for immediate NAV computation, transaction reconciliation, and interactive executive reporting.',
    keyFeatures: [
      'Real-Time Investment Statistics.',
      'NAV Trend Analysis.',
      'Investor & Broker Activity Monitoring.',
      'KYC Insights.',
      'Live Market News.',
      'Responsive Dashboard with Interactive Charts.',
    ],
    contribution:
      'Authored complex PL/SQL stored procedures, packages, and database triggers for automated NAV adjustments; designed normalized relational tables in SQL; and configured operational dashboards in Oracle APEX.',
    techStack: [
      'Oracle APEX',
      'PL/SQL',
      'SQL',
      'CSS',
      'Oracle Database',
      'Data Validation',
    ],
    github: {
      available: true,
      url: 'https://apex.oracle.com/pls/apex/r/tarunika_1306/investment-management/dashboard1',
      label: 'Visit Live Demo',
      note: '',
    },
  },

  {
    id: 'ewallet-management',
    code: 'PRJ-02',
    label: '[ PROJECT FILE ]',
    caseFileNumber: '02',
    title: 'E-Wallet Management System',
    shortDesc:
      'Developed a secure digital wallet using React.js, Spring Boot, and MySQL, featuring JWT authentication, role-based access control, fund transfers, balance management, transaction history, and admin monitoring.',
    overview:
      'A full-stack digital wallet application developed using React.js, Spring Boot, and MySQL. It enables secure wallet management, fund top-ups, money transfers, and transaction tracking, with JWT authentication, role-based access control, and an admin dashboard for monitoring users and transactions.',
    rotation: 1.4,
    visible: true,
    problem:
      'Managing digital wallets, fund transfers, transaction history, and user permissions requires secure and centralized transaction management.',
    solution:
      'A full-stack digital wallet application that enables users to manage balances, add funds, transfer money, and track transactions with secure authentication and role-based access control.',
    keyFeatures: [
      'JWT-Based Authentication.',
      'Role-Based Access Control (USER & ADMIN).',
      'Wallet Balance Management.',
      'Fund Top-Up & User-to-User Transfers.',
      'Transaction History & Audit Logging.',
      'Admin Dashboard & User Management.',
      'Real-Time Notifications & Low-Balance Alerts.',
      'Transaction History & Audit Logging.',
    ],
    contribution:
      'Architected full-stack workflows using Java and Spring Boot; built RESTful API endpoints for balance mutations and transaction audits; implemented automated backend health checks; and conducted integration testing.',
    techStack: [
      'React.js 18',
      'JavaScript',
      'CSS3',
      'Axios',
      'Java 17',
      'Spring Boot 3.4.0',
      'Spring Security',
      'JWT',
      'MySQL 8.x',
      'Spring Data JPA',
      'Hibernate',
      'BCrypt Password Hashing',
      'Docker',
      'Nginx',
    ],
    github: {
      available: true,
      url: 'https://github.com/Tarunika-73/e-wallet-management-system',
      label: 'Visit GitHub Profile',
      note: 'GitHub Profile',
    },
  },

  {
    id: 'fish-aggregation',
    code: 'PRJ-05',
    label: '[ PROJECT FILE ]',
    caseFileNumber: '05',
    title: 'Fish Aggregation & Weather Prediction',
    shortDesc:
      'Developed an AI-powered marine prediction system using Python and machine learning to forecast fish aggregation, assess marine weather risks, and provide intelligent fishing advisories.',
    overview:
      'An AI-driven geospatial ocean intelligence system that fuses real-time marine satellite feeds with weather telemetry to forecast viable fish aggregation areas while alerting mariners to severe oceanic conditions.',
    rotation: -1.3,
    visible: true,
    problem:
      'Predicting fish aggregation and assessing marine weather risks are challenging, making it difficult to identify productive fishing zones and safe fishing conditions.',
    solution:
      'An AI-powered system that predicts fish quantity, classifies marine weather risks, and provides location-based fishing advisories using environmental data.',
    keyFeatures: [
      'Fish Quantity Prediction.',
      'Marine Weather Risk Classification.',
      'Intelligent Fishing Advisories.',
      'Interactive Fishing Hotspot Maps.',
      'Indian Ocean SST Heatmaps.',
      'SHAP-Based Model Explainability.',
      'Environmental Feature Engineering.',
    ],
    contribution:
      'Engineered data ingestion and transformation pipelines for real-time external APIs in Python; processed multi-source oceanographic datasets; and trained predictive models correlating environmental markers with aggregation zones.',
    techStack: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Random Forest',
      'SHAP',
      'Pandas',
      'NumPy',
    ],
    github: {
      available: true,
      url: 'https://github.com/ThangaPrakash2712/MarineSense-AI',
      label: 'Visit GitHub Profile',
      note: 'GitHub Profile',
    },
  },
  
  // Temporarily hidden from visible noticeboard per user request, but data preserved
  {
    id: 'flood-warning-system',
    code: 'PRJ-HIDDEN-01',
    label: '[ PROJECT FILE ]',
    caseFileNumber: '07',
    title: 'Flood Warning System',
    shortDesc:
      'Developed an ML-based flood prediction system using rainfall and environmental data for early risk detection.',
    overview:
      'An intelligent meteorological prediction platform trained on multi-source rainfall telemetry and hydrological indicators to provide early flood warnings, recognized at the Entrophy Hackathon at VIT Chennai.',
    rotation: 1.1,
    visible: false,
    problem:
      'Sudden precipitation surges and flash floods in urban and riverine regions frequently strike without sufficient lead time, causing severe infrastructural devastation.',
    solution:
      'Developed an automated machine learning data pipeline that ingests historical rainfall patterns, terrain hydrology, and environmental telemetry to predict flood occurrence probability hours before inundation.',
    keyFeatures: [
      'End-to-end data pipelines for rainfall ingestion, cleaning, and transformation.',
      'Rolling-window feature engineering capturing precipitation accumulation and soil saturation.',
      'Supervised classification models trained and evaluated with scikit-learn.',
      'Threshold-based risk escalation generating early civil alerts across severity tiers.',
      'Continuous prediction monitoring and validation pipelines for incoming meteorological data.',
    ],
    contribution:
      'Engineered data ingestion and transformation pipelines using Python and Pandas; performed feature selection and hyperparameter optimization using scikit-learn; and represented the project at the Entrophy Hackathon.',
    techStack: [
      'Python',
      'Machine Learning',
      'Pandas',
      'scikit-learn',
      'Data Pipelines',
    ],
    github: {
      available: true,
      url: 'https://github.com/Tarunika-73',
      label: 'GitHub Profile',
      note: 'Profile: https://github.com/Tarunika-73',
    },
  },
  {
    id: 'ai-medical-chatbot',
    code: 'PRJ-HIDDEN-02',
    label: '[ PROJECT FILE ]',
    caseFileNumber: '08',
    title: 'AI Medical Chatbot',
    shortDesc:
      'Built an intelligent medical conversational triage assistant for K! HACKS 2.0 Hackathon at Anna University.',
    overview:
      'A natural language symptom triage chatbot developed during K! HACKS 2.0 at Anna University to deliver preliminary medical guidance, symptom clarification, and appropriate specialist referrals.',
    rotation: -1.0,
    visible: false,
    problem:
      'Patients facing non-emergency health concerns frequently experience anxiety or misdiagnose symptoms using unvetted internet searches, leading to delayed medical attention.',
    solution:
      'Developed an NLP-powered conversational agent capable of understanding colloquial symptom descriptions, mapping probable health conditions with calibrated disclaimers, and advising timely clinical consultations.',
    keyFeatures: [
      'Natural language understanding (NLU) tailored to interpret conversational symptom queries.',
      'Probabilistic symptom-to-condition correlation mapping with emergency escalation protocols.',
      'Specialist recommendation engine directing users to appropriate clinical departments.',
      'Conversational dialogue flow with clarifying questions for ambiguous inputs.',
      'Privacy-conscious session handling ensuring zero persistence of sensitive health data.',
    ],
    contribution:
      'Implemented NLP intent classification and entity extraction models in Python; designed structured medical dialog trees; and demonstrated the working hackathon prototype at Anna University K! HACKS 2.0.',
    techStack: [
      'Python',
      'Machine Learning',
      'NLP',
      'REST APIs',
    ],
    github: {
      available: true,
      url: 'https://github.com/Tarunika-73',
      label: 'GitHub Profile',
      note: 'Profile: https://github.com/Tarunika-73',
    },
  },
]
