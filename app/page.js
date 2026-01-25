import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Eye, Zap, Code2, Workflow } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Computer Vision Hub",
      category: "CV & Deep Learning",
      desc: "Face Recognition Attendance & Anti-spoofing systems.",
      size: "md:col-span-2 md:row-span-2",
      icon: <Eye className="text-cyan-400" />,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Embedded Systems",
      category: "Hardware",
      desc: "IoT solutions with ESP8266 & Raspberry Pi.",
      size: "md:col-span-1 md:row-span-1",
      icon: <Cpu className="text-emerald-400" />,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "NLP Engine",
      category: "Machine Learning",
      desc: "Political misinformation detection using NLP.",
      size: "md:col-span-1 md:row-span-2",
      icon: <Brain className="text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Smart Automation",
      category: "Workflows",
      desc: "Automating 3D workflows with n8n & Python.",
      size: "md:col-span-1 md:row-span-1",
      icon: <Workflow className="text-orange-400" />,
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Vibe Codings",
      category: "Experimental",
      desc: "Rapid AI-driven prototyping & creative coding.",
      size: "md:col-span-2 md:row-span-1",
      icon: <Code2 className="text-blue-400" />,
      gradient: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 font-sans selection:bg-cyan-500/30">
      {/* Header / Hero */}
      <header className="max-w-6xl mx-auto mb-16 pt-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          Ahmed Sief Eleslam
        </motion.h1>
        <p className="mt-4 text-gray-400 font-mono tracking-widest uppercase text-sm">
          Multi-Disciplinary Engineer // AI • Embedded • Automation
        </p>
      </header>

      {/* Bento Grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.01 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-8 flex flex-col justify-between ${proj.size}`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="p-3 bg-black/40 rounded-2xl w-fit mb-4 border border-white/5">
                {proj.icon}
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{proj.category}</span>
              <h3 className="text-2xl font-bold mt-2 group-hover:text-white transition-colors">{proj.title}</h3>
            </div>

            <p className="relative z-10 text-gray-400 text-sm leading-relaxed max-w-[200px]">
              {proj.desc}
            </p>

            {/* Subtle "Arrow" on hover */}
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
              <Zap size={20} className="text-white" />
            </div>
          </motion.div>
        ))}
      </main>

      {/* Footer / Contact CTA */}
      <footer className="max-w-6xl mx-auto mt-20 pb-12 border-t border-white/5 pt-8 flex justify-between items-center text-gray-500 text-sm font-mono">
        <p>© 2026 LAB_SYSTEM_v1.0</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;