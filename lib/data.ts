export interface PersonalInfo {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
    instagram: string;
    resume: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    impact: string;
    stack: string[];
    role: string;
    links: {
        github?: string;
        live?: string;
        demo?: string;
    };
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    points: string[];
}

export interface Award {
    title: string;
    issuer: string;
    description: string;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    summary: string[];
    about: {
        paragraphs: string[];
    };
    skills: SkillCategory[];
    projects: Project[];
    experience: Experience[];
    awards: Award[];
}

export const data: PortfolioData = {
    personalInfo: {
        name: "Aashim Lal Memanaparambil Asokalal",
        shortName: "Aashim",
        role: "Software Engineer",
        tagline: "Building intelligent systems and polished digital experiences.",
        email: "aashimlal007@gmail.com",
        location: "Melbourne, VIC",
        linkedin: "http://linkedin.com/in/aashimlalma/",
        github: "https://github.com/aashim06",
        instagram: "https://www.instagram.com/aashimlal?igsh=b2c4NXc3Y2FmZjNj&utm_source=qr",
        resume: "https://docs.google.com/document/d/1dgpSLqwgLUi77c1-O3hbQYGnS99uJ9pGhjm--qU92Jw/edit?usp=sharing"
    },
    summary: [
        "I'm a Software Engineering graduate with hands-on experience in building AI-powered systems, frontend dashboards, and robust backend architectures. My journey is defined by a passion for creating clean systems that merge reliability with exceptional usability and polished design."
    ],
    about: {
        paragraphs: [
            "Beyond my technical pursuits, I value cross-functional collaboration and approaching development with a holistic product mindset. I've developed core infrastructure and application solutions in real-world project environments, working directly with stakeholders to deliver practical, intelligent systems under tight constraints.",
            "Whether it’s integrating hardware with software protocols or deploying natural language AI chatbots with strict safety guardrails, my methodology centers on precision, scalability, and measurable impact.",
            "Currently seeking early-career or graduate opportunities in Software Engineering, Frontend Development, or Cloud/DevOps, where I can contribute to thoughtful technology and elegant digital experiences."
        ]
    },
    skills: [
        {
            category: "Languages",
            items: ["Python", "Java", "C/C++", "TypeScript", "SQL"]
        },
        {
            category: "Intelligent Systems & AI",
            items: ["LLM Applications", "Prompt Engineering", "Semantic Caching", "AI Safety Guardrails (NeMo)", "TruLens Evaluation"]
        },
        {
            category: "Backend & Data",
            items: ["FastAPI", "REST APIs", "Data Processing", "Validation & Auth Mapping"]
        },
        {
            category: "Frontend & UI",
            items: ["Angular", "Responsive UI", "Dashboards & Charts", "Data Visualisation", "HTML/CSS/JS"]
        },
        {
            category: "DevOps & Tools",
            items: ["Docker", "Linux", "Git/GitHub", "CI/CD Pipelines"]
        },
        {
            category: "Collaboration",
            items: ["Agile Fundamentals", "Stakeholder Communication", "Cross-functional Delivery", "IT Operations"]
        }
    ],
    projects: [
        {
            title: "Fleet AI Companion",
            subtitle: "AI Chatbot for Fleet Operations",
            description: "An AI-powered conversational platform providing fleet operational insights, built during an industry capstone project with Skyledge. It bridges complex data and natural language queries.",
            impact: "Enabled natural language queries on fleet data with high reliability. Implemented safety guardrails and semantic caching to improve response accuracy and latency.",
            stack: ["Python", "FastAPI", "Angular", "OpenAI", "NeMo Guardrails"],
            role: "Full Stack / AI Engineer",
            links: {
                github: "https://github.com/aashim06/FleetAICompanion.git",
                demo: "https://drive.google.com/file/d/1_3niPwiGO0YhXajnjhkTCrvx3S4AjljW/view?usp=sharing"
            }
        },
        {
            title: "SDI-12 Sensor & Data Logger",
            subtitle: "Environmental Monitoring System",
            description: "Built a reliable environmental monitoring system utilizing the SDI-12 protocol, emphasizing hardware/software integration, structured logging, and graphical on-device visualization.",
            impact: "Received a Certificate of Outstanding Student Project for practical engineering and strong reliability in sensor communication.",
            stack: ["Arduino", "C/C++", "SDI-12 Protocol", "TFT Display"],
            role: "Embedded Systems Engineer",
            links: {}
        }
    ],
    experience: [
        {
            company: "Barton Care Private Limited",
            role: "Software Developer Intern",
            period: "Jan 2025 – Dec 2025",
            points: [
                "Contributed to the development of an in-house rostering web portal for workforce coordination.",
                "Implemented backend logic to improve shift allocation and scheduling efficiency.",
                "Assisted in feature development and system requirement analysis with the IT team.",
                "Conducted testing to improve UI performance, usability, and system maintainability."
            ]
        },
        {
            company: "Barton Care Private Limited",
            role: "Community Care Manager | Business Analyst",
            period: "Dec 2022 – Mar 2026",
            points: [
                "Managed operations including rostering, workforce coordination, and client service delivery.",
                "Performed process analysis to drastically improve scheduling efficiency and digital workflows.",
                "Led recruitment, onboarding, timesheets, and strict payroll processing compliance.",
                "Provided IT support for internal systems and maintained accurate digital record keeping."
            ]
        },
        {
            company: "Allied IT",
            role: "IT Supervisor | Technician",
            period: "2022 – 2026",
            points: [
                "Supervised technicians and coordinated large-scale IT infrastructure deployments.",
                "Worked with enterprise clients (CBA, PwC, Monash, Allianz) to manage installations.",
                "Executed server room setups including rack-and-stack, hardware, and physical networking."
            ]
        }
    ],
    awards: [
        {
            title: "Certificate of Outstanding Student Project",
            issuer: "Swinburne University",
            description: "Awarded for the SDI-12 Sensor and Data Logger system."
        },
        {
            title: "Swinburne Emerging Leader Program",
            issuer: "Swinburne University",
            description: "Career Development Certificate & Sustainability Certificate."
        },
        {
            title: "Leadership Mentions",
            issuer: "PixelSwin & SwinMAS",
            description: "Recognized for proactive leadership and initiative within student organizations."
        }
    ]
};
