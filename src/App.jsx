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

const LeetcodeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
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
  const phrases = [
    "Full-Stack Engineer",
    "SaaS & AI Builder",
    "GenAI & Automation Developer",
    "Founder @ Codiva & TurfFlow"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullPhrase = phrases[currentPhraseIndex] || phrases[0];
    if (!currentFullPhrase) return;

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
    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-6 font-sans">
      Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Prajwal</span>.<br />
      <span className="text-slate-500 font-normal">
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
          A Computer Science student and Full-Stack Engineer based in Pune, India. I architect production-grade web applications, vertical SaaS platforms, and autonomous AI workflows—from concurrency-safe booking engines to zero-cost serverless publishing pipelines. Founder of Codiva Labs and TurfFlow, and Co-Founder of RVOLX, building scalable software and live digital products.
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
          <a href="https://leetcode.com/u/prajwalnangare01/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-transparent text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
            <LeetcodeIcon size={16} /> LeetCode
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
              <p className="text-slate-400 font-medium mb-6">Founder & Full-Stack Lead</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://codivalabs.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-md text-sm font-semibold hover:bg-slate-100 transition-colors">
                  <ExternalLink size={16} /> Visit Website
                </a>
                <a href="https://instagram.com/codiva_labs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-slate-600 text-white rounded-md text-sm font-semibold hover:bg-slate-800 transition-colors">
                  <InstagramIcon size={16} /> Instagram
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Founded a software and web engineering studio delivering production-ready web platforms, custom booking systems, and AI automation pipelines for businesses. Shipped live commercial websites for multi-branch fitness brands, salons, and agencies alongside 12+ interactive industry showcases—backed by an autonomous $0/month serverless content engine running daily on @codiva_labs.
              </p>
              <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-3 text-sm text-slate-400">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-slate-300 font-medium">Interactive Portfolio:</span>
                  <a href="https://codivalabs.com/portfolio" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 font-medium">
                    12 Live Demos <ExternalLink size={13} />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-slate-300 font-medium">Live Client Sites:</span>
                  <a href="https://www.powerupfitness.co.in/" target="_blank" rel="noreferrer" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    Power Up Fitness
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="https://artistabysupriya.com/" target="_blank" rel="noreferrer" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    Artista Salon
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="https://theadsarchitect.netlify.app/" target="_blank" rel="noreferrer" className="hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors">
                    The Ads Architects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    { title: "Frontend", skills: ["React 18", "Next.js 14", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "MUI", "Chart.js"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "MongoDB", "MySQL", "Redis", "SQLite", "REST APIs"] },
    { title: "AI / ML", skills: ["Python", "MediaPipe", "WebRTC", "Groq API", "Google Gemini API", "PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "n8n", "Meta Graph API"] },
    { title: "DevOps & Tools", skills: ["GitHub Actions", "Docker", "Kubernetes", "CI/CD", "Razorpay API", "Git", "GitHub", "Vercel", "Render"] }
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
      title: "TurfFlow — Multi-Sport Arena SaaS & WhatsApp Booking Engine",
      subtitle: "Omnichannel Sports Arena Management & Automated Reservation Engine",
      description: "Built for sports arena and box cricket turf operators to completely automate customer reservations, payments, and daily facility operations without manual staff or phone calls. Enables players to check availability and book instantly via web or conversational WhatsApp (English/Hinglish). Solves double-booking race conditions through 5-minute Redis distributed slot locks, automates Razorpay payments with webhook idempotency and late-capture auto-refunds, generates 4-digit QR Gate Passes, and automates dynamic pricing, rainout cancellations, and monthly owner financial ledgers.",
      tags: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Redis", "Razorpay", "Baileys + n8n"],
      highlight: "🚀 Founder · Flagship B2B SaaS",
      github: null,
      demo: "https://turfflow-codiva.vercel.app/",
      instagram: "https://instagram.com/turf_flow"
    },
    {
      title: "RVOLX — Institutional Intraday Quantitative Signals Platform",
      subtitle: "Quantitative Trading Signals Engine & Ultra-Low-Latency Delivery",
      description: "Co-founded a multi-tenant quantitative trading signals SaaS for NSE NIFTY 200 cash equities firing at 09:30 AM IST using Relative Volume (RVOL >= 2.5x), 14-period ATR volatility corridors, and strict >=1:2 Risk-to-Reward filters. Engineered an air-gapped HMAC-SHA256 signal ingestion bridge (<15ms latency), 3-tier RBAC across 4 web portals, and sub-450ms consent-verified WhatsApp alert delivery.",
      tags: ["Next.js 14", "TypeScript", "PostgreSQL 18", "HMAC-SHA256", "Baileys WhatsApp", "Razorpay"],
      highlight: "📈 Co-Founder · FinTech SaaS",
      github: null,
      demo: "https://rvolx.netlify.app/",
      instagram: "https://instagram.com/rvol_x"
    },
    {
      title: "Codiva Autonomous Media Engine — Serverless AI Content Pipeline",
      subtitle: "Autonomous Cloud Publishing & Multi-Model Generation System",
      description: "Built to completely automate brand growth, developer educational content, and social media marketing for Codiva Labs without manual graphic design or scheduling. Autonomously writes, designs, and publishes technical MERN stack carousels (2 posts daily) directly to Instagram (@codiva_labs) at $0.00/month infrastructure cost—powered by ephemeral GitHub Actions cron runners, a multi-model Gemini AI chain, Git-as-a-database state tracking, C++ SVG-to-PNG rasterization (<150ms renders), and Meta Graph API publishing.",
      tags: ["Node.js", "GitHub Actions", "Google Gemini API", "@resvg/resvg-js", "Meta Graph API v23.0"],
      highlight: "⚡ $0/mo Serverless System",
      github: "https://github.com/prajwalnangare01/codiva_automation",
      demo: "https://instagram.com/codiva_labs"
    },
    {
      title: "AI Gym Coach — Real-Time Computer Vision & Voice Fitness Assistant",
      subtitle: "Real-Time Skeletal Form Corrector & Rep Counting Engine",
      description: "Built for automated personal fitness training and injury prevention without requiring an expensive gym trainer. Uses live webcam video via MediaPipe Pose Landmarker and WebRTC to monitor skeletal joint angles in real time, automatically count valid reps, and diagnose improper posture across 5 exercises (squats, push-ups, curls, shoulder press, lunges). Delivers instant spoken corrective audio coaching through Groq (Llama 3.3) and gTTS, while logging workout sessions in SQLite.",
      tags: ["Python", "MediaPipe", "WebRTC", "Groq (Llama 3.3)", "gTTS", "Streamlit", "SQLite"],
      highlight: "🏋️ Computer Vision & LLM",
      github: "https://github.com/prajwalnangare01/AI-Gym-Coach",
      demo: "https://ai-gym-coach-ktsskhrh7kk6vc9uxjpkum.streamlit.app/"
    },
    {
      title: "HemaLens — AI Blood Report Analyzer",
      subtitle: "AI Medical Diagnostic & Biomarker Analysis Tool",
      description: "Built to make complex medical blood test reports easily understandable for patients without waiting for clinical consultations. Analyzes uploaded pathology report images to extract critical hematology biomarkers (CBC, hemoglobin, platelets, lipid profiles), detect out-of-range anomalies, and translate dense medical jargon into clear, simplified health summaries in English and Hindi—complete with personalized dietary and lifestyle recommendations powered by Google Gemini AI.",
      tags: ["Node.js", "Express.js", "JavaScript", "Google Gemini AI"],
      highlight: "🏆 Hackathon Runner-Up",
      github: "https://github.com/prajwalnangare01/HemaLens",
      demo: "https://hemalens-nu.vercel.app/"
    },
    {
      title: "Prosperia — AI Real Estate Lead & Revenue Recovery SaaS",
      subtitle: "Real Estate Lead Qualification & Automated Pipeline CRM",
      description: "AI-powered SaaS platform built for real estate agencies and property developers to capture and qualify buyer/tenant leads, automate follow-ups, schedule property visits, and recover missed pipeline revenue.",
      tags: ["React", "Node.js", "AI Lead Qualification", "CRM Automation"],
      highlight: null,
      github: null,
      demo: null
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
                    {proj.highlight}
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
                  {proj.instagram && (
                    <a href={proj.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                      <InstagramIcon size={16} /> Instagram
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
      role: "Founder @ Codiva Labs & TurfFlow | Co-Founder @ RVOLX",
      company: "Full-Stack Lead & Architecture",
      date: "Jul 2025 – Present",
      points: [
        "Founded and architected TurfFlow, an omnichannel sports arena SaaS with web and WhatsApp booking, distributed slot locking, and Razorpay integration.",
        "Co-founded RVOLX (FinTech signals SaaS) and engineered a $0/month serverless AI publishing pipeline on GitHub Actions and Meta Graph API, alongside shipping live websites for commercial clients."
      ]
    },
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
        <a href="https://leetcode.com/u/prajwalnangare01/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" title="LeetCode">
          <LeetcodeIcon size={18} />
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
