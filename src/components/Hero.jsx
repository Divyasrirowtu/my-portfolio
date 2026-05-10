function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        
        <p className="text-cyan-400 font-medium mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold font-[Poppins] mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  Divya Sri Rowtu
</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
          Frontend Developer & React Enthusiast
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          I build modern, responsive, and interactive web applications
          using React, JavaScript, and modern frontend technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 hover:scale-105 rounded-lg font-medium transition duration-300"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 hover:border-cyan-400 rounded-lg font-medium transition"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero
