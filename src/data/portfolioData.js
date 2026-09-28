export const personalInfo = {
  name: "Carlos Qnova Bha'a Gani",
  title: "Data Scientist | Full-Stack Developer",
  location: "Denpasar, Bali, Indonesia",
  email: "carlosqnova88@gmail.com",
  phone: "+62 85692820057",
  github: "https://github.com/carlosqnova", // sesuaikan dengan link repo Anda
  linkedin: "https://linkedin.com/in/carlosqnova",
  about: "An Information Technology student at Udayana University with hybrid expertise in Data Science and Software Engineering. Skilled in managing end-to-end Machine Learning lifecycles (MLflow, Anaconda) and building scalable web (Laravel) and mobile (Flutter) applications that convert complex data into actionable business insights.",
  stats: [
    { label: "Medical Images Processed", value: "10,000+" },
    { label: "mAP@50 Model Precision", value: "94.6%" },
    { label: "Production Apps Built", value: "3+" },
    { label: "Team Members Led", value: "5" }
  ]
};

export const skills = {
  dataScience: [
    "Python", "Pandas", "NumPy", "Scikit-Learn", "OpenCV", 
    "YOLOv8", "MLflow", "ChromaDB (RAG)", "Gemini / OpenAI API", "SQL"
  ],
  webDevelopment: [
    "Laravel 11", "PHP", "FastAPI", "MySQL", "RESTful APIs", 
    "Tailwind CSS", "JavaScript (ES6+)", "React 18"
  ],
  mobileDevelopment: [
    "Flutter", "Dart", "Middleware Integration", "Real-time Data Streaming"
  ],
  toolsAndDevOps: [
    "Git", "Docker", "Anaconda", "VS Code", "Google Colab", "Postman"
  ]
};

export const experiences = [
  {
    role: "Flutter Developer (Contract)",
    company: "CV Citra Naga Kencana",
    period: "Jan 2026 – Present",
    type: "Work",
    description: "Developing client-side IPTV applications using Flutter. Optimizing middleware integration for real-time data streaming and managing data synchronization across systems to ensure high UI performance."
  },
  {
    role: "Machine Learning Specialization",
    company: "ASAH by Dicoding with Accenture",
    period: "Aug 2025 – Jan 2026",
    type: "Program",
    description: "Developed Deep Learning models for image classification and predictive tasks. Leveraged MLflow for experiment tracking and Anaconda for environment management to ensure strict model reproducibility."
  },
  {
    role: "Data & Statistics Intern",
    company: "Diskominfo Kabupaten Badung (Bidang Statistics)",
    period: "Jan 2026 – Mar 2026",
    type: "Internship",
    description: "Cleaned, structured, and validated sectoral statistical datasets using MS Excel and Google Sheets. Processed data for Owner's Estimate (HPS) procurement and operated internal SIM for institutional database synchronization."
  },
  {
    role: "Junior Full Stack Developer (Intern)",
    company: "CV Citra Naga Kencana",
    period: "Sept 2024 – Jan 2025",
    type: "Internship",
    description: "Designed custom web applications using Laravel and MySQL, managing database schemas and data-centric backend logic focused on processing efficiency."
  }
];

export const education = [
  {
    degree: "B.S. in Information Technology",
    institution: "Universitas Udayana",
    period: "2023 – Present",
    description: "Concentrating on Data Science and Software Engineering. Strong foundation in algorithms, database design, computer vision, and industry-scale digital solutions."
  },
  {
    degree: "High School Diploma",
    institution: "SMAK RICCI II",
    period: "2020 – 2023",
    description: "Focused on academic discipline, mathematics, and collaborative teamwork activities."
  }
];

export const projects = [
  {
    id: "medical-ai-cdss",
    title: "Clinical Decision Support System (CDSS)",
    category: "Data Science & AI",
    badge: "Microservices & Multimodal AI",
    metric: "94.6% mAP@50 | < 3s Latency",
    summary: "Microservices-based diagnostic assistant combining Laravel 11, FastAPI, YOLOv8, and Gemini 1.5 Flash (RAG) for multimodal medical analysis.",
    description: `Led a 5-member engineering team to build a Clinical Decision Support System. 
    The platform processes multi-modal inputs across structured clinical data, lab report PDFs, and DICOM imaging (.dcm).
    - Trained YOLOv8 Nano models across 5 medical modalities reaching 94.6% mAP@50.
    - Built a RAG pipeline with ChromaDB and Gemini 1.5 Flash with strict Pydantic JSON validation.
    - Integrated OpenCV for dynamic bounding box anomaly rendering on radiological scans.`,
    techStack: ["Python", "FastAPI", "YOLOv8", "Gemini API", "ChromaDB", "Laravel 11", "MySQL", "OpenCV", "pydicom"],
    github: "https://github.com/carlosqnova/Medical-AI-CDSS", // Ganti dengan link repo publik Anda
    demo: ""
  },
  {
    id: "telecom-churn-capstone",
    title: "Telecom Churn Prediction & Recommendation",
    category: "Data Science & AI",
    badge: "Machine Learning Capstone",
    metric: "Predictive Analytics & Web Integration",
    summary: "Data-driven web application to predict customer churn risk and recommend tailored telecommunication service packages.",
    description: `Analyzed telecommunication customer behavioral patterns to build churn prediction models. Integrated predictive outputs into a user-friendly dashboard to suggest tailored data package recommendations.`,
    techStack: ["Python", "Pandas", "Scikit-Learn", "Streamlit / Laravel", "MySQL"],
    github: "https://github.com/carlosqnova",
    demo: ""
  },
  {
    id: "iptv-client-app",
    title: "Client-Side IPTV Streaming Application",
    category: "Mobile Development",
    badge: "Flutter Contract",
    metric: "Real-time Streaming",
    summary: "Custom mobile application built for high-performance IPTV streaming and middleware synchronization.",
    description: `Engineered client-side video streaming interface with Flutter, handling real-time middleware data synchronization and responsive UI controls.`,
    techStack: ["Flutter", "Dart", "REST API", "State Management"],
    github: "https://github.com/carlosqnova",
    demo: ""
  }
];
