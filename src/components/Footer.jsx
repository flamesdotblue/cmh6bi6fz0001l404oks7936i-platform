export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-300">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" aria-hidden />
          <span className="font-medium text-white">Glintch</span>
          <span className="opacity-60">Animation Studio</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="mailto:hello@glintch.studio" className="hover:text-white">Contact</a>
        </div>
        <div className="opacity-70">© {new Date().getFullYear()} Glintch. All rights reserved.</div>
      </div>
    </footer>
  );
}
