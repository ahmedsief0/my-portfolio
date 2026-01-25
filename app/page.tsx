"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Brain, Eye, Workflow, Zap, Globe, Database, Terminal, 
  X, ExternalLink, Mail, Github, Linkedin, Briefcase, 
  FileCheck, ShieldCheck, ChevronRight, MessageSquare, PlayCircle, 
  Sparkles, Server, Code, Download, Activity, Monitor
} from 'lucide-react';

// --- 1. DATA: TECHNICAL SKILLS (Enlarged 3-Column Grid) ---
const skillsData = [
  { 
    category: "Languages & Core", 
    icon: <Code size={24} />, 
    color: "text-blue-400", 
    skills: ["Python", "C++", "C", "Java", "OOP", "Data Structures", "Algorithms"]
  },
  { 
    category: "AI, NLP & Vision", 
    icon: <Brain size={24} />, 
    color: "text-purple-400", 
    skills: ["CNN", "RNN", "SVM", "KNN", "NLP", "LLMs", "Image Processing", "OCR"]
  },
  { 
    category: "Embedded & DSP", 
    icon: <Cpu size={24} />, 
    color: "text-emerald-400", 
    skills: ["Arduino", "Raspberry Pi", "Microcontrollers", "FFT", "Signal Filtering", "DSP"]
  },
  { 
    category: "Systems & Networking", 
    icon: <Globe size={24} />, 
    color: "text-cyan-400", 
    skills: ["Linux", "TCP/IP", "Network Config", "Cisco Packet Tracer", "Proteus", "Matlab", "LabVIEW"]
  },
  { 
    category: "Automation & Cloud", 
    icon: <Server size={24} />, 
    color: "text-orange-400", 
    skills: ["Azure", "Fusion Compute", "VPS Handling", "Flask", "FastAPI", "n8n", "Git", "GitHub"]
  }
];

// --- 2. DATA: 16 TECHNICAL PROJECTS (Multi-Category Support) ---
const projectsData = [
  { id: 1, title: "Face Recognition Attendance", category: ["AI, Vision & NLP"], date: "Dec 2024", icon: <ShieldCheck />, 
    img: "images (1).jfif", 
    description: "Secure AI attendance with liveness detection.", 
    details: "Developed with OpenCV and TensorFlow for proxy-proof attendance. Stack: Python, Keras, Flask.", 
    github: "https://github.com/ahmedsief0/Attendance-system-GUI", linkedin: "https://www.linkedin.com/posts/ahmed-sief-eleslam-124b4a249_facerecognition-attendancesystem-python-activity-7289291934408331264-gKqk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2SXCwB3l4YGvTHLaZBLeisJQJKflpcppQ", size: "md:col-span-2" 
  },
  { id: 2, title: "Deepfake Detection", category: ["AI, Vision & NLP"], date: "Dec 2025", icon: <Brain />, 
    img: "images (2).jfif", 
    description: "Forensic tool for AI forgery detection.", 
    details: "Analyzes artifacts using ResNet50 transfer learning architecture trained on 7000 video (Took the 3rd place on DEPI best projects Round 3). Stack: Pytorch, Python.", 
    github: "https://github.com/ahmedsief0/Deep-Fake-Detection-", linkedin: "https://deepfakedetectionsystem.streamlit.app/Detection", size: "md:col-span-1" 
  },
  { id: 3, title: "CNN-LSTM Image Captioning", category: ["AI, Vision & NLP"], date: "Sept 2025", icon: <MessageSquare />, 
    img: "541228_1_En_32_Fig6_HTML.png", 
    description: "Automated text generation for visual data.", 
    details: "CNN features with LSTM decoding (Grading of HCIP AI - CAIRO UNI.). Stack: Flickr8k, Python.", 
    github: "https://www.kaggle.com/code/ahmedsief/image-captioning", linkedin: "https://www.linkedin.com/posts/ahmed-sief-eleslam-124b4a249_ai-machinelearning-deeplearning-activity-7387066484046389248-INSJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2SXCwB3l4YGvTHLaZBLeisJQJKflpcppQ", size: "md:col-span-1" 
  },
  { id: 4, title: "Ford Price Predictor", category: ["AI, Vision & NLP"], date: "May 2025", icon: <Zap />, 
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800", 
    description: "ML model for car market valuation.", 
    details: "Regression model on historical market data. Stack: Scikit-learn, Streamlit.", 
    github: "https://github.com/ahmedsief0/ford-predictions", linkedin: "https://ford-predictions.streamlit.app/", size: "md:col-span-1" 
  },
  { id: 5, title: "MissInfo Detection", category: ["AI, Vision & NLP"], date: "Oct 2025", icon: <Brain />, 
    img: "images (3).jfif", 
    description: "Detecting political misinformation on Facebook.", 
    details: "Sentiment and text analysis for post categorization and using image hashing for media posts. Stack: NLTK, Python.", 
    github: "https://github.com/ahmedsief0/Facebook-MissInfo-Detector", linkedin: "https://drive.google.com/drive/folders/1Pb86y8xH52LPcsHRZcskZVDlFXwdwf7Z?usp=sharing", size: "md:col-span-1" 
  },
  { id: 6, title: "Multimodal Translator", category: ["AI, Vision & NLP","Vibe Coded"], date: "Jan 2025", icon: <Globe />, 
    img: "images (4).jfif", 
    description: "AI translation via text, voice, and OCR.", 
    details: "Integrated Tesseract and Google APIs for instant translation. Stack: Python.", 
    github: "https://github.com/ahmedsief0/Codealpha-language-translation-tool", linkedin: "https://drive.google.com/file/d/1kCvpYOK-qvU9wC7ML3G9-Ol8uZCPLwAZ/view?usp=sharing", size: "md:col-span-1" 
  },
  { id: 7, title: "Digital Prayer Clock", category: ["Embedded"], date: "May 2025", icon: <Cpu />, img: "images (5).jfif", description: "Astronomical clock built on ATmega.", details: "Multi functional digital Clock hardware made (Power save mode-adhan times with real time salat reminder-configurable alarm-mobile application supported ) . Stack: ATmega32, Embedded C, MIT.", github: "https://github.com/ahmedsief0/Smart-CLock", linkedin: "https://www.linkedin.com/posts/ahmed-sief-eleslam-124b4a249_engineeringjourney-smartclock-embeddedsystems-activity-7347601066412113920-9Efz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2SXCwB3l4YGvTHLaZBLeisJQJKflpcppQ", size: "md:col-span-1" },
  { id: 8, title: "Smart Temp-Fan", category: ["Embedded"], date: "Dec 2024", icon: <Zap />, img: "download.jfif", description: "PWM cooling based on ambient sensors.", details: "Real-time regulation Fan using Arduino and C++ Controlled with Keypad, Mobile App and Temperature Sensor . Stack: Hardware Prototyping.", github: "https://github.com/ahmedsief0/Smart-Controlled-Fan", linkedin: "https://www.linkedin.com/posts/ahmed-sief-eleslam-124b4a249_engineeringprojects-iot-embeddedsystems-activity-7289289501955223552-6Jv9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2SXCwB3l4YGvTHLaZBLeisJQJKflpcppQ", size: "md:col-span-1" },
  { id: 9, title: "3D Modelling Automation Consumer Tool", category: ["Automation"], date: "Nov 2025", icon: <Workflow />, img: "images (6).jfif", description: "Full-stack web automation application.", details: "Hand-coded backend for complex user 3D modelling workflows. Stack: Flask, Python,FAST APIs.", github: "https://github.com/ahmedsief0/3D-modelling-Automation-WebSite-MOBDE3-ELFAN-", linkedin: "https://drive.google.com/drive/folders/1tSat_ye5qmxVJ4DNl5WjWx6HQ0r0RldO?usp=sharing", size: "md:col-span-2" },
  { id: 10, title: "Excel Data Automation", category: ["Automation"], date: "Nov 2025", icon: <Database />, img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800", description: "Precise measurement extraction script.", details: "Automates data parsing to eliminate entry errors. Stack: Python, Openpyxl.", github: "#", linkedin: "#", size: "md:col-span-1" },
  { id: 11, title: "n8n Telegram Bot", category: ["Automation"], date: "Sept 2025", icon: <Workflow />, img: "https://images.unsplash.com/photo-1611746317263-d86761160950?q=80&w=800", description: "Low-code orchestration ecosystem.", details: "Connects webhooks to databases for real-time actions. Stack: n8n, API.", github: "#", linkedin: "#", size: "md:col-span-1" },
  { id: 12, title: "CARLA RL Autonomous Car", category: ["AI, Vision & NLP", "Systems"], date: "Dec 2025", icon: <Monitor />, img: "84d73b06-ccd0-4b2e-a793-6d8855c68242.png", description: "RL-trained self-driving agent.", details: "Dynamic navigation in high-fidelity simulation. Stack: CARLA API, RL.", github: "https://github.com/ahmedsief0/Autonomous-Car-Simulation-", linkedin: "https://drive.google.com/file/d/14B6CnxR8wGUXLK1A-vR6GOwvWh9TWoca/view?usp=sharing", size: "md:col-span-2" },
  { id: 13, title: "Intelligent SDN (POX)", category: ["Systems", "Automation"], date: "Dec 2025", icon: <Globe />, img: "pox_large_shadow.png", description: "Intelligent SDN flow management via POX using Dijkstra Algorithm.", details: "Programmatic traffic control in Mininet environments. Stack: Python, SDN.", github: "https://github.com/ahmedsief0/Intelligent-SDN-Controller", linkedin: "#", size: "md:col-span-1" },
  { id: 14, title: "Cisco Virtual Router", category: ["Systems"], date: "Aug 2024", icon: <Database />, img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800", description: "Corporate network design simulation.", details: "OSPF and VLAN configuration for multinational firms. Stack: Cisco.", github: "#", linkedin: "#", size: "md:col-span-1" },
  { id: 15, title: "AutoML", category: ["AI, Vision & NLP"], date: "May 2024", icon: <Terminal />, img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800", description: "Visual execution of graph algorithms.", details: "C++ implementation of shortest path logic. Stack: Algorithms.", github: "#", linkedin: "#", size: "md:col-span-1" },
  { id: 16, title: "Smart Entrance Gate", category: ["AI, Vision & NLP", "Embedded"], date: "2026", icon: <Sparkles className="text-yellow-400" />, img: "download (1).jfif", description: "Rapid AI-assisted functional prototypes.", details: "From concept to code in record time using AI agents. Stack: AI-Vibe.", github: "https://github.com/ahmedsief0/Smart-Entrance-Gate ", linkedin: "https://drive.google.com/file/d/1KW_H9euwexm2XbuZOnSHmlmrLoUvl_Pp/view?usp=sharing", size: "md:col-span-1" }
];

// --- 3. DATA: EXPERIENCE & CREDENTIALS ---
const experienceData = [
  { title: "ML Trainee", company: "DEPI", period: "Jul 2025 - Jan 2026", desc: "Machine learning data pipelines.", credentialImg: "/api/placeholder/800/500" },
  { title: "AI Intern", company: "ITI", period: "Aug 2025 - Sep 2025", desc: "Intensive focus on neural networks.", credentialImg: "/api/placeholder/800/500" },
  { title: "Cloud Intern", company: "NTI", period: "Jun 2025 - Aug 2025", desc: "HCIA Cloud computing training.", credentialImg: "/api/placeholder/800/500" },
  { title: "Freelance", company: "Mostaql & Freelancer", period: "2024 - Present", desc: "Top-rated AI solutions provider.", credentialImg: "/api/placeholder/800/500" }
];

const certificatesData = [
  { title: "HCIP – AI", provider: "Huawei / Cairo University", date: "Aug 2025", level: "Professional", credentialImg: "/api/placeholder/800/500" },
  { title: "Oracle AI Associate", provider: "Oracle", date: "Aug 2025", level: "Certified", credentialImg: "/api/placeholder/800/500" },
  { title: "DL Fundamentals", provider: "NVIDIA", date: "Feb 2025", level: "Specialist", credentialImg: "/api/placeholder/800/500" },
  { title: "CCNA", provider: "ENGOVATION", date: "Aug 2024", level: "Networking", credentialImg: "/api/placeholder/800/500" },
  { title: "HCIA – AI", provider: "Huawei", date: "Jul 2024", level: "Associate", credentialImg: "/api/placeholder/800/500" }
];

export default function UltimatePortfolio() {
  const [activeTab, setActiveTab] = useState('Projects');
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = ['All', 'AI, Vision & NLP', 'Embedded', 'Automation', 'Systems', 'Vibe Coded'];
  
  // المنطق المحدث لدعم الكاتيجوري المتعدد
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter));

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 p-6 md:p-12 font-sans relative selection:bg-cyan-500/30">
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.29' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* --- HERO SECTION: Start visible with Links --- */}
      <header className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 mb-24 pt-16 relative z-10 text-center lg:text-left">
        <div className="flex-1">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] uppercase tracking-widest mb-6">
            <Sparkles size={10} /> Certified Systems & AI Engineer
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Ahmed Sief <br/> Eleslam
          </motion.h1>
          
          {/* Main Action Bar - Github, LinkedIn, Email, CV */}
          <div className="flex flex-wrap gap-4 mt-12 justify-center lg:justify-start">
            <a href="Ahmed Sief El-eslam Ahmed .docx" download className="flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
              <Download size={18} /> Download CV
            </a>
            <div className="flex gap-2">
              <a href="https://github.com/ahmedsief0" target="_blank" className="p-4 bg-zinc-900 border border-white/5 rounded-full hover:border-cyan-500 transition-colors" title="GitHub"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/ahmed-sief-eleslam-124b4a249" target="_blank" className="p-4 bg-zinc-900 border border-white/5 rounded-full hover:border-cyan-500 transition-colors" title="LinkedIn"><Linkedin size={20}/></a>
              <a href="mailto:ahmedsiefeleslam@gmail.com" className="p-4 bg-zinc-900 border border-white/5 rounded-full hover:border-cyan-500 transition-colors" title="Email Me"><Mail size={20}/></a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start opacity-70">
            <a href="https://mostaql.com/u/ahmedsieef" target="_blank" className="flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Mostaql</a>
            <a href="https://www.freelancer.com/u/ahmedsief0" target="_blank" className="flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Freelancer</a>
          </div>
        </div>

        <div className="relative group w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 overflow-hidden bg-[#0a0a0a]">
          <img src="1752220753515.jpg" alt="Ahmed Sief Eleslam" className="w-full h-full object-cover transition-all duration-700" />
          <motion.div animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_20px_cyan] z-20" />
        </div>
      </header>

      {/* --- PERMANENT SKILLS GRID: Fixed above Tabs --- */}
      <section className="max-w-6xl mx-auto mb-32 relative z-10">
        <div className="flex items-center gap-3 mb-12 text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
          <Activity size={16} className="text-cyan-500" /> Technical Arsenal
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 bg-[#0a0a0a] border border-white/10 rounded-[3.5rem] hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-5 mb-8">
                <div className={`p-4 bg-white/5 rounded-[1.5rem] ${cat.color} group-hover:scale-110 transition-transform shadow-inner`}>{cat.icon}</div>
                <h3 className="font-black text-sm uppercase tracking-[0.2em]">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((s, si) => (
                  <span key={si} className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-2xl text-[11px] font-mono text-zinc-400 group-hover:text-white transition-all uppercase">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTENT TABS --- */}
      <nav className="max-w-6xl mx-auto flex justify-center gap-8 mb-16 border-b border-white/5 font-black uppercase text-[10px] tracking-[0.3em] sticky top-8 bg-black/50 backdrop-blur-md z-30 py-4">
        {['Projects', 'Experience', 'Credentials'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 px-4 transition-all relative ${activeTab === tab ? 'text-white' : 'text-zinc-600'}`}>
            {tab} {activeTab === tab && <motion.div layoutId="navline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500" />}
          </button>
        ))}
      </nav>

      {/* --- DYNAMIC CONTENT --- */}
      <main className="max-w-6xl mx-auto relative z-10 pb-40">
        <AnimatePresence mode="wait">
          {activeTab === 'Projects' && (
            <motion.div key="proj" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex flex-wrap gap-2 mb-16 justify-center">
                {categories.map(c => (
                  <button key={c} onClick={() => setFilter(c)} className={`px-5 py-2 rounded-full text-[9px] font-bold uppercase transition-all ${filter === c ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-400/20' : 'bg-white/5 text-zinc-500 hover:text-white'}`}>{c}</button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                {filteredProjects.map(p => (
                  <motion.div layout key={p.id} onClick={() => setSelectedItem(p)} className={`group relative cursor-pointer overflow-hidden rounded-[3rem] border border-white/10 bg-[#0a0a0a] transition-all duration-500 ${p.size}`}>
                    <img
  src={p.img}
  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-60 transition-all duration-700"
  alt={p.title}
/>
                    <div className="relative p-10 h-full flex flex-col justify-between z-10 text-right md:text-left">
                      <div className="p-4 bg-black/40 rounded-2xl w-fit text-cyan-400 border border-white/10">{p.icon}</div>
                      <h3 className="text-2xl font-black tracking-tight leading-tight">{p.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {(activeTab === 'Experience' || activeTab === 'Credentials') && (
            <motion.div key="cred" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(activeTab === 'Experience' ? experienceData : certificatesData).map((item: any, i) => (
                <div key={i} className="p-10 bg-[#0a0a0a] border border-white/10 rounded-[3.5rem] flex flex-col justify-between hover:border-cyan-500/30 transition-all text-right md:text-left">
                  <div>
                    <h3 className="text-2xl font-black mb-2 leading-tight">{item.title}</h3>
                    <p className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest">{item.company || item.provider} // {item.period || item.date}</p>
                    {item.desc && <p className="text-zinc-400 text-sm font-light mt-4 leading-relaxed">{item.desc}</p>}
                  </div>
                  {
                    /*
                    <button onClick={() => setSelectedItem({ ...item, isCredential: true })} className="mt-10 flex items-center gap-3 text-[10px] font-black uppercase text-zinc-300 tracking-[0.3em] hover:text-cyan-400 transition-colors group">
                    View Document <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  */
                  }
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- MASTER MODAL --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
              <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 z-20 p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><X size={20}/></button>
              <div className="p-12 md:p-16">
                {selectedItem.isCredential ? (
                  <div className="text-center">
                    <div className="mb-8 flex justify-center"><div className="p-8 bg-cyan-500/10 rounded-[2.5rem] text-cyan-400"><FileCheck size={48}/></div></div>
                    <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">{selectedItem.title}</h2>
                    <p className="font-mono text-xs text-cyan-500 mb-12 uppercase tracking-[0.3em]">{selectedItem.company || selectedItem.provider}</p>
                    <div className="rounded-[2.5rem] border border-white/5 overflow-hidden bg-zinc-900 shadow-2xl"><img src={selectedItem.credentialImg} className="w-full h-auto" alt="Verified Document"/></div>
                  </div>
                ) : (
                  <div className="text-right md:text-left">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter leading-none">{selectedItem.title}</h2>
                    <div className="flex gap-2 mb-6 justify-center md:justify-start">
                        {selectedItem.category.map((c: string) => (
                          <span key={c} className="text-cyan-500 font-mono text-[9px] uppercase tracking-widest">{c}</span>
                        ))}
                    </div>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">{selectedItem.description}</p>
                    <div className="bg-[#0d0d0d] p-8 rounded-[3rem] mb-12 border border-white/10 text-mono text-sm text-zinc-400 leading-relaxed italic">
                      <span className="text-cyan-500 block mb-2 uppercase text-[10px] tracking-widest underline not-italic">Technical Insight:</span> $ {selectedItem.details}
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <a href={selectedItem.github} target="_blank" className="flex-1 py-5 bg-white/5 border border-white/10 text-white rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all hover:bg-white/10"><Github size={18}/> Repository</a>
                      <a href={selectedItem.linkedin} target="_blank" className="flex-1 py-5 bg-white text-black rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all"><PlayCircle size={18}/> Video/Demo</a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
