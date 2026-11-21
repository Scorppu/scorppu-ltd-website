import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  name: "Eugene Chan",
  handle: "Scorppu",
  location: "Hong Kong",
  role: "Junior Software Engineer",
  company: "Efinix, Inc.",
  shortIntro:
    "Building AI-assisted tooling and practical engineering software in Hong Kong.",
  about:
    "Junior Software Engineer at Efinix, focused on AI-assisted workflows, reusable agent capabilities, and reliable automation. Computer Engineering at CUHK, with a background in systems programming, GPU acceleration, and cross-platform product work.",
  email: "eugenechan111@gmail.com",
  portraitURL: "/photos/portrait.jpg",
  photos: [
    {
      id: "portrait",
      label: "Portrait",
      alt: "Portrait of Eugene Chan in academic gown outdoors",
      src: "/photos/portrait.jpg",
      pathHint: "/photos/portrait.jpg",
      aspect: "4/5",
    },
    {
      id: "editorial-profile",
      label: "Editorial",
      alt: "Eugene Chan in a grey suit and glasses, right hand raised with one finger up, in a crowded indoor room",
      src: "/photos/editorial-profile.jpg",
      pathHint: "/photos/editorial-profile.jpg",
      aspect: "16/9",
    },
    {
      id: "aside-profile",
      label: "Formal portrait",
      alt: "Eugene Chan in a suit holding a name card",
      src: "/photos/aside-profile.jpg",
      pathHint: "/photos/aside-profile.jpg",
      aspect: "4/5",
    },
  ],
  signature: {
    src: "/signatures/eugene-signature.svg",
    alt: "Signature placeholder for Eugene Chan",
    isPlaceholder: true,
  },
  featuredBuilding: {
    src: "/scorppultd.png",
    alt: "Scorppu Ltd Minecraft building",
    caption: "Scorppu Ltd — Minecraft build",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/eugenechan111/",
    github: "https://github.com/Scorppu",
    youtube: "https://youtube.com/@scorppu",
    twitter: "https://twitter.com/scorppu",
    instagram: "https://instagram.com/eugenechan0_o",
  },
  experience: [
    {
      title: "Junior Software Engineer",
      company: "Efinix, Inc.",
      employmentType: "Full-time",
      startDate: "Jul 2026",
      endDate: "Present",
      location: "Hong Kong SAR",
      workMode: "On-site",
      description: [
        "Develop AI-assisted tooling to support engineering productivity and streamline technical workflows.",
        "Design reusable agent capabilities that connect natural-language requests with software tools and engineering resources.",
        "Research and prototype approaches to agent-driven automation, focusing on maintainability and practical usability.",
        "Evaluate AI-assisted workflows on representative engineering tasks, emphasizing reliable execution and verifiable results.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Efinix, Inc.",
      employmentType: "Part-time",
      startDate: "Sep 2025",
      endDate: "May 2026",
      description: [
        "Collaborated closely with a senior engineer to develop and enhance cross-platform desktop applications.",
        "Contributed major features using Python and Flutter, with a focus on usability and workflow improvements.",
        "Worked with a senior engineer to refine implementation approaches and integrate changes into the existing codebase.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Efinix, Inc.",
      employmentType: "Internship",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      description: [
        "Developed cross-platform desktop applications for Windows and Linux using Python and Flutter.",
        "Built major application features to improve user experience and support engineering workflows.",
        "Contributed across application logic and user interfaces, translating requirements into functional software.",
      ],
    },
    {
      title: "Programming Intern",
      company: "Media Explorer Limited",
      employmentType: "Internship",
      startDate: "May 2024",
      endDate: "Jun 2024",
      location: "Hong Kong",
      workMode: "On-site",
      description: [
        "Web programming on e-Commerce solution using Java, jsp, JavaScript, HTML, Springboot, MySQL, PostgreSQL",
      ],
    },
  ],
  education: [
    {
      institution: "The Chinese University of Hong Kong",
      credential: "Bachelor of Engineering (Computer Engineering)",
      startDate: "Aug 2022",
      endDate: "Jul 2026",
      highlights: ["Dean's List, 2025–2026"],
    },
    {
      institution: "St. Joseph's College, Hong Kong",
      credential: "High School Diploma",
      startDate: "2016",
      endDate: "2022",
    },
  ],
  projects: [
    {
      name: "ServerForge",
      status: "upcoming public release",
      description:
        "Project showcase reserved for ServerForge. Product page and details will be linked here when it goes public.",
      githubURL: null,
      productURL: "#serverforge-product-url-placeholder",
      productURLIsPlaceholder: true,
    },
    {
      name: "GPU Accelerated FX/FXCH",
      year: "2026",
      status: "ongoing",
      description:
        "Optimized the FXCH module in ABC (UC Berkeley's sequential synthesis & verification system) by parallelizing subcube comparisons using CUDA, achieving significant performance gains on medium-to-large logic designs.",
      githubURL: null,
    },
    {
      name: "BlackEye Valkyrie System",
      year: "2025",
      description:
        "Architected a lightweight web-based Clinical Management System for hospital management in remote areas, built with Spring Boot, MongoDB, Java, and JavaScript.",
      githubURL: "https://github.com/Scorppu/BlackEyeValkyrieSystem_ScorppuLtd",
    },
    {
      name: "Motion Controlled Laser Turret",
      year: "2024",
      description:
        "Engineered a gyroscope-operated laser turret on the Tiva C Launchpad with wireless controller-turret communication over Bluetooth via UART, programmed entirely in C.",
      githubURL: "https://github.com/Scorppu/Motion_Controlled_Laser_Turret",
    },
    {
      name: "Scorppu LTD Website",
      description: "This website.",
      githubURL: "https://github.com/Scorppu/scorppu-ltd-website",
    },
  ],
  interests: [
    {
      name: "Counter-Strike",
      description:
        "Competing and grinding ranked matches — one of the games that sharpened my strategic thinking and reaction time.",
    },
    {
      name: "Minecraft",
      description:
        "Building ambitious structures and running a private server with friends — creativity without limits.",
    },
  ],
  cvURL: "/cvs/ChanEugeneCV.pdf",
  cvFilename: "ChanEugeneCV",
};
