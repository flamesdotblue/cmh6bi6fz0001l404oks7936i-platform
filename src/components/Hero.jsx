import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" aria-hidden />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs sm:text-sm tracking-wide">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Futuristic Animation • Real-time 3D • VFX
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight">
            Glintch
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400">The World's Best Animation Studio</span>
          </h1>
          <p className="max-w-2xl text-neutral-300 leading-relaxed">
            We craft mind-bending visuals, cinematic narratives, and interactive 3D experiences for gaming, brands, and films. Step into tomorrow’s motion.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#work" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/20">
              Explore Our Work <ArrowRight size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur">
              Watch Reel <Play size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
