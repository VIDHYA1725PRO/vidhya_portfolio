// js/data.js  —  All portfolio data in one place
// Edit this file to update your projects, skills, and personal info

const DATA = {

  personal: {
    name:     "Vidhya S",
    role:     "Full Stack Developer",
    email:    "vidhyas@email.com",
    location: "Tamil Nadu, India",
    github:   "https://github.com/vidhyas",
    linkedin: "https://linkedin.com/in/vidhyas",
    resume:   "assets/Vidhya_S_Resume.pdf",
  },

  // ── Projects ──────────────────────────────────────────
  projects: [
    {
      id: 1,
      name: "Academic Learning Effectiveness Platform (SkillBridge)",
      description:
        "A comprehensive web platform that analyzes and visualizes academic performance metrics for students and educators. Features personalized learning paths, progress dashboards, assessment tools, and AI-driven insights to bridge skill gaps effectively.",
      icon: "fas fa-graduation-cap",
      iconBg: "linear-gradient(135deg,#00d4ff,#7c3aed)",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js", "JWT Auth"],
      github: "https://github.com/vidhyas/skillbridge",
      demo:   "https://skillbridge-demo.netlify.app",
    },
    {
      id: 2,
      name: "Smart Aquaculture Monitoring Dashboard",
      description:
        "Real-time IoT-powered monitoring system for aquaculture farms. Tracks water quality parameters (pH, temperature, dissolved oxygen), displays live analytics, sends automated alerts, and provides historical trend analysis to optimize fish farming efficiency.",
      icon: "fas fa-water",
      iconBg: "linear-gradient(135deg,#06b6d4,#0891b2)",
      tech: ["Python", "Django", "React", "MySQL", "MQTT", "Raspberry Pi"],
      github: "https://github.com/vidhyas/aqua-monitor",
      demo:   "",
    },
    {
      id: 3,
      name: "Automated Fish Feeding System",
      description:
        "An IoT-based automated feeding system for aquaculture that uses schedule-based and sensor-triggered mechanisms to dispense optimal feed quantities. Includes a web control panel for remote management, feeding logs, and energy consumption analytics.",
      icon: "fas fa-fish",
      iconBg: "linear-gradient(135deg,#10b981,#059669)",
      tech: ["Flask", "Arduino", "JavaScript", "SQLite", "IoT Sensors", "WebSockets"],
      github: "https://github.com/vidhyas/auto-feeder",
      demo:   "",
    },
  ],

  // ── Skills ────────────────────────────────────────────
  skillCategories: [
    {
      title: "Programming Languages",
      pills: [
        { icon: "fab fa-python",    label: "Python"      },
        { icon: "fab fa-js",        label: "JavaScript"  },
        { icon: "fas fa-code",      label: "Java"        },
        { icon: "fas fa-code",      label: "C"           },
        { icon: "fas fa-database",  label: "SQL"         },
      ],
    },
    {
      title: "Frontend",
      pills: [
        { icon: "fab fa-react",       label: "React.js"   },
        { icon: "fab fa-html5",       label: "HTML5"      },
        { icon: "fab fa-css3-alt",    label: "CSS3"       },
        { icon: "fab fa-bootstrap",   label: "Bootstrap"  },
        { icon: "fas fa-wind",        label: "Tailwind"   },
      ],
    },
    {
      title: "Backend",
      pills: [
        { icon: "fab fa-node-js",  label: "Node.js"    },
        { icon: "fas fa-server",   label: "Express.js" },
        { icon: "fab fa-python",   label: "Django"     },
        { icon: "fas fa-fire",     label: "Flask"      },
        { icon: "fas fa-plug",     label: "REST APIs"  },
      ],
    },
    {
      title: "Database",
      pills: [
        { icon: "fas fa-database",  label: "MySQL"      },
        { icon: "fas fa-leaf",      label: "MongoDB"    },
        { icon: "fas fa-database",  label: "PostgreSQL" },
        { icon: "fas fa-fire-alt",  label: "Firebase"   },
      ],
    },
    {
      title: "Tools & DevOps",
      pills: [
        { icon: "fab fa-git-alt",  label: "Git"     },
        { icon: "fab fa-github",   label: "GitHub"  },
        { icon: "fab fa-docker",   label: "Docker"  },
        { icon: "fas fa-terminal", label: "Linux"   },
        { icon: "fas fa-cloud",    label: "Netlify" },
      ],
    },
  ],

  // ── Proficiency Bars ──────────────────────────────────
  proficiency: [
    { label: "Python / Django",    pct: 85 },
    { label: "React.js",           pct: 80 },
    { label: "Node.js / Express",  pct: 75 },
    { label: "MySQL / MongoDB",    pct: 78 },
    { label: "HTML / CSS / JS",    pct: 90 },
  ],
};
