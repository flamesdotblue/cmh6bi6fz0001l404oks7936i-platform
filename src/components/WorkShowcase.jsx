import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

const works = [
  {
    title: 'Neon Circuit — Game Cinematic',
    tag: 'Realtime • Unreal Engine',
    theme: 'from-fuchsia-500/30 to-indigo-500/30'
  },
  {
    title: 'Quantum Brand Ident',
    tag: 'Motion Design • VFX',
    theme: 'from-cyan-400/30 to-fuchsia-500/30'
  },
  {
    title: 'Astra Short Film',
    tag: 'Character • 3D • Film',
    theme: 'from-indigo-400/30 to-purple-500/30'
  },
  {
    title: 'Holo UI Teasers',
    tag: 'Product • Tech',
    theme: 'from-emerald-400/30 to-cyan-400/30'
  }
];

export default function WorkShowcase() {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Selected Work</h2>
            <p className="text-neutral-300 mt-2">A peek into our award-winning productions.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-300">
            <Award size={18} /> 48+ festival selections
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((item, index) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
            >
              <div className={`h-44 bg-gradient-to-br ${item.theme}`} aria-hidden />
              <div className="p-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-neutral-300">{item.tag}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-fuchsia-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div id="contact" className="mt-12 flex flex-col sm:flex-row items-stretch gap-4">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
            <h3 className="text-xl font-medium">Have a project in mind?</h3>
            <p className="text-neutral-300 mt-1">Let’s build something iconic together. Brief us and get a tailored pitch in 48 hours.</p>
            <a href="mailto:hello@glintch.studio" className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20">Email hello@glintch.studio</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full sm:w-80 rounded-2xl border border-white/10 p-6 bg-white/5">
            <h4 className="font-medium">Capabilities</h4>
            <ul className="mt-3 text-sm text-neutral-300 space-y-2">
              <li>• Concept, Storyboarding, Previz</li>
              <li>• 2D/3D Animation, Rigging</li>
              <li>• Simulation & FX</li>
              <li>• Realtime & Engine Integration</li>
              <li>• Color, Sound, Finishing</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
