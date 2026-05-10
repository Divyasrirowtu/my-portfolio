import { useState } from "react"

function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl sm:text-2xl font-bold font-[Poppins] text-cyan-400">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-4">

          <a onClick={() => setOpen(false)} href="#home" className="block">Home</a>
          <a onClick={() => setOpen(false)} href="#about" className="block">About</a>
          <a onClick={() => setOpen(false)} href="#skills" className="block">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects" className="block">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block">Contact</a>

        </div>
      )}

    </nav>
  )
}

export default Navbar
