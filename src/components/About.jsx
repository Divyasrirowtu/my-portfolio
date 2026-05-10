function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-7xl font-bold font-[Poppins] shadow-2xl">
            D
          </div>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-cyan-400 font-medium mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6">
            Passionate Frontend Developer
          </h2>

          <p className="text-slate-300 leading-relaxed mb-4">
            I am a frontend developer focused on building responsive,
            modern, and user-friendly web applications using React
            and JavaScript.
          </p>

          <p className="text-slate-400 leading-relaxed mb-4">
            I enjoy transforming ideas into interactive digital
            experiences with clean UI design and smooth user experience.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Currently, I am improving my skills in React, animations,
            and full stack web development to build professional projects.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
