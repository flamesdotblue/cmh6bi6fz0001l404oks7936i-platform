import { motion } from 'framer-motion';
import { Film, Rocket, Sparkles, Shield } from 'lucide-react';

const items = [
  {
    icon: Film,
    title: 'Cinematic Animation',
    desc: 'High-fidelity character, 2D/3D, and hybrid animation for film, series, and trailers.'
  },
  {
    icon: Rocket,
    title: 'Game & XR Assets',
    desc: 'Real-time optimized models, motion capture, and immersive worlds for engines like Unreal and Unity.'
  },
  {
    icon: Sparkles,
    title: 'Motion Design & VFX',
    desc: 'Title sequences, brand idents, particle sims, and SFX that elevate your story.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Delivery',
    desc: 'Secure pipelines, predictable timelines, and scalable teams for global brands.'
  }
];

export default function Services() {
  return (
    <section className="relative py-20 bg-black" id="services">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-7xl h-full px-6">
          <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">What We Do</h2>
            <p className="text-neutral-300 mt-2 max-w-2xl">From script to final pixel, Glintch builds stunning visuals that move audiences and drive results.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg p-2 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 border border-white/10">
                    <Icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-sm text-neutral-300 mt-1">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" aria-hidden />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
