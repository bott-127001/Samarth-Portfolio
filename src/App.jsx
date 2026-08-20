import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NotFound } from './components/NotFound';
import {
  Terminal,
  Database,
  Code2,
  Cpu,
  Globe,
  ExternalLink,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Trophy,
  FileText,
  Menu,
  X,
  Send,
  ArrowUp
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.36-1.53 6.36-7.16a5.8 5.8 0 0 0-1.54-4.04 5.5 5.5 0 0 0-.16-4s-1.27-.4-4.14 1.5a13.9 13.9 0 0 0-7.5 0C4.27 1.3 3 1.7 3 1.7a5.5 5.5 0 0 0-.16 4 5.8 5.8 0 0 0-1.54 4.04c0 5.6 3.25 6.8 6.35 7.15A4.8 4.8 0 0 0 6 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight text-slate-900">
          Prajwal Nangare.
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://drive.google.com/file/d/1WoJXm3SudfZcmgo2Ih7qESa07HV4EzCf/view" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            <FileText size={16} /> Resume
          </a>
          <a href="mailto:prajwalnangare41@gmail.com" className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors">
            Contact Me
          </a>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-6 flex flex-col gap-4"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium">Experience</a>
          <div className="w-full h-px bg-slate-100 my-2" />
          <a href="https://drive.google.com/file/d/1WoJXm3SudfZcmgo2Ih7qESa07HV4EzCf/view" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-600 font-medium">
            <FileText size={16} /> Resume
          </a>
          <a href="mailto:prajwalnangare41@gmail.com" onClick={() => setIsOpen(false)} className="inline-flex justify-center w-full px-4 py-3 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors">
            Contact Me
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const TypewriterHeading = () => {
  const phrases = ["Full Stack Developer", "AI Engineer", "GenAI Engineer", "Data Scientist", "Codiva Founder"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentFullPhrase.substring(0, currentText.length - 1));
        if (currentText.length === 1) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 15);
    } else {
      if (currentText === currentFullPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentFullPhrase.substring(0, currentText.length + 1));
        }, 40);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-6">
      Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Prajwal</span>.<br />
      <span className="text-slate-500 font-semibold">
        {currentText}
      </span>
      <span className="text-slate-400 animate-[pulse_1s_ease-in-out_infinite] font-light">|</span>
    </motion.h1>
  );
};

const Hero = () => (
  <section id="about" className="relative min-h-screen flex items-center pt-20 bg-slate-50 overflow-hidden">
    {/* Aesthetic Ambient Orbs */}
    <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-blue-400/5 blur-[100px] animate-[spin_20s_linear_infinite]" />
    <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-purple-400/5 blur-[100px] animate-[spin_25s_linear_infinite_reverse]" />

    <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-3xl"
      >
        <TypewriterHeading />

        <motion.p variants={fadeIn} className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
          A Computer Science student and Full Stack Developer based in Pune, India.
          I specialize in building robust web applications using the MERN stack and have a strong focus on clean architecture and scalable solutions. Currently exploring Machine Learning and Generative AI.
          Crafting pixel-perfect, high-performance web experiences as Founder & Frontend Lead at Codiva.
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#projects" className="px-6 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-2">
            View My Work <ChevronRight size={16} />
          </a>
          <a href="https://drive.google.com/file/d/1WoJXm3SudfZcmgo2Ih7qESa07HV4EzCf/view" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
            <FileText size={16} /> View Resume
          </a>
          <a href="https://github.com/prajwalnangare01" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-transparent text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
            <GithubIcon size={16} /> GitHub Profile
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const CodivaSection = () => {
  return (
    <section id="codiva" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-10 tracking-tight uppercase text-sm tracking-widest text-slate-400"
        >
          My Agency
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700/50 hover:border-slate-600 transition-colors shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <h3 className="text-3xl font-extrabold text-white mb-2">Codiva.</h3>
              <p className="text-slate-400 font-medium mb-6">Code Driven by Vision</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://codivalabs.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-md text-sm font-semibold hover:bg-slate-100 transition-colors">
                  <ExternalLink size={16} /> Visit Website
                </a>
                <a href="https://www.instagram.com/codiva_labs/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-slate-600 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors">
                  <InstagramIcon size={16} /> Instagram
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-slate-300 leading-relaxed text-lg">
                We craft premium, scalable web solutions designed to drive business growth and elevate user engagement. As Founder and Frontend Lead, I oversee the end-to-end development of high-performance digital platforms, delivering everything from custom, feature-rich web applications to SEO-optimized, modern digital branding experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    { title: "Frontend", skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "MUI", "Chart.js"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "MySQL"] },
    { title: "AI / ML", skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow", "Keras"] },
    { title: "DevOps & Tools", skills: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "Postman", "Render", "Vercel"] }
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-slate-900 mb-10 tracking-tight uppercase text-sm tracking-widest text-slate-400"
        >
          Technical Skills
        </motion.h2>
        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 py-4 border-b border-slate-100 last:border-0"
            >
              <div className="w-full md:w-1/4 font-medium text-slate-900">{cat.title}</div>
              <div className="w-full md:w-3/4 flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white border border-slate-200/60 rounded-md text-xs font-semibold text-slate-600 shadow-sm hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "HemaLens",
      subtitle: "AI Blood Report Analyzer",
      description: "Developed an AI-powered web application to analyze blood report images and extract key biomarkers. Integrated Google Gemini AI to generate simplified medical insights in English and Hindi with personalized dietary recommendations.",
      tags: ["Node.js", "Express.js", "JavaScript", "Gemini AI"],
      highlight: "Hackathon Runner-Up",
      github: "https://github.com/prajwalnangare01/HemaLens",
      demo: null
    },
    {
      title: "Wanderlust",
      subtitle: "Airbnb Clone",
      description: "Built a full-stack travel and property booking platform. Features secure user authentication, property listings, and secure cloud-based image storage via Cloudinary. Deployed on Render with MongoDB Atlas.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/prajwalnangare01/WanderLust",
      demo: "https://wanderlust-lwq5.onrender.com/listings"
    },
    {
      title: "Weather App",
      subtitle: "Real-Time Weather Forecaster",
      description: "A dynamic and responsive weather application that fetches and displays real-time weather data. Features a clean, modern user interface for checking current conditions, temperatures, and detailed meteorological metrics across different locations.",
      tags: ["JavaScript", "HTML5", "CSS3", "API Integration"],
      github: "https://github.com/prajwalnangare01/WeatherApp",
      demo: "https://weatherappprajwal.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-slate-900 mb-10 tracking-tight uppercase text-sm tracking-widest text-slate-400"
        >
          Selected Projects
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-12 border-b border-slate-200/60 last:border-0 flex flex-col md:flex-row gap-6 md:gap-12 items-start hover:bg-slate-100/30 transition-colors rounded-xl px-4 -mx-4 cursor-default"
            >
              <div className="w-full md:w-1/3 shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-lg font-bold text-slate-900">{proj.title}</h3>
                <p className="text-slate-500 text-sm mt-1 mb-4">{proj.subtitle}</p>
                {proj.highlight && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-200/50 text-slate-700 text-xs font-semibold">
                    <Trophy size={12} /> {proj.highlight}
                  </span>
                )}
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 font-medium mb-6">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-300" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                      <GithubIcon size={16} /> View Code
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-start"
        >
          <a
            href="https://github.com/prajwalnangare01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
          >
            <GithubIcon size={16} /> View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Implementation Intern",
      company: "Parplaero",
      date: "Feb 2026 - Aug 2026",
      points: [
        "Implemented responsive frontend interfaces from Figma designs using modern web technologies.",
        "Developed reusable UI components and improved responsiveness and user experience across web applications."
      ]
    },
    {
      role: "Web Development Intern",
      company: "DThrill Software Solutions",
      date: "Jun 2023 - Jul 2023",
      points: [
        "Learned core web development fundamentals including HTML, CSS, JavaScript, and responsive design.",
        "Worked on frontend implementation tasks and gained practical experience in website development."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-slate-900 mb-10 tracking-tight uppercase text-sm tracking-widest text-slate-400"
        >
          Experience & Education
        </motion.h2>

        {/* Experience List */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 mb-8 border-b border-slate-100 pb-2">Professional Experience</h3>
          <div className="flex flex-col">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group py-8 border-b border-slate-200/60 last:border-0 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-slate-50/50 transition-colors rounded-xl px-4 -mx-4 cursor-default"
              >
                <div className="w-full md:w-1/4 shrink-0 text-slate-500 text-sm font-medium pt-1 group-hover:translate-x-2 transition-transform duration-300">
                  {exp.date}
                </div>
                <div className="w-full md:w-3/4">
                  <h4 className="text-lg font-bold text-slate-900">{exp.role}</h4>
                  <div className="text-slate-600 font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="text-slate-300 mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education List */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-8 border-b border-slate-100 pb-2">Education</h3>
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-6 border-b border-slate-100 flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="w-full md:w-1/4 shrink-0 text-slate-500 text-sm font-medium pt-1">2024 – 2027</div>
              <div className="w-full md:w-3/4">
                <h4 className="text-lg font-bold text-slate-900">BSc Computer Science</h4>
                <div className="text-slate-600 mb-1">ASM College, Pimpri</div>
                <div className="text-sm text-slate-500">CGPA: 8.5</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-6 flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="w-full md:w-1/4 shrink-0 text-slate-500 text-sm font-medium pt-1">2021 – 2024</div>
              <div className="w-full md:w-3/4">
                <h4 className="text-lg font-bold text-slate-900">Diploma in Information Technology</h4>
                <div className="text-slate-600 mb-1">AISSMS Polytechnic, Pune</div>
                <div className="text-sm text-slate-500">77.00%</div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-10 border-t border-slate-200 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <div className="text-slate-500 text-sm font-medium order-2 md:order-1 mt-4 md:mt-0">
        © {new Date().getFullYear()} Prajwal Nangare. All rights reserved.
      </div>

      <div className="flex items-center gap-6 text-slate-600 order-1 md:order-2">
        <a href="mailto:prajwalnangare41@gmail.com" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="Email">
          <Mail size={18} />
        </a>
        <a href="tel:+919579158374" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="Phone">
          <Phone size={18} />
        </a>
        <a href="https://www.linkedin.com/in/prajwal-nangare-5988042b2/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="LinkedIn">
          <LinkedinIcon size={18} />
        </a>
        <a href="https://github.com/prajwalnangare01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="GitHub">
          <GithubIcon size={18} />
        </a>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const circleRadius = 22;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-white text-slate-900 shadow-xl hover:bg-slate-50 transition-colors z-50 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      {/* SVG Background/Progress Circle */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r={circleRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-slate-200"
        />
        <motion.circle
          cx="28"
          cy="28"
          r={circleRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          style={{ pathLength: scaleProgress }}
          className="text-blue-500"
          strokeLinecap="round"
        />
      </svg>
      {/* Icon */}
      <ArrowUp size={20} className="relative z-10" />
    </motion.button>
  );
};

function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigateHome = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isKnownRoute = currentPath === '/' || currentPath === '' || currentPath === '/index.html';

  if (!isKnownRoute) {
    return <NotFound onNavigateHome={handleNavigateHome} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 relative">
      <div className="noise-bg"></div>
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <CodivaSection />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
