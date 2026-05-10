import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-medium mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6">
            Let's Work Together
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I’m open to internships, freelance opportunities,
            collaborations, and frontend development roles.
            Feel free to connect with me anytime.
          </p>

        </div>

        {/* Contact Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-10">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Email */}
            <a
              href="mailto:yourmail@gmail.com"
              className="bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-2xl p-8 flex flex-col items-center text-center transition duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl text-cyan-400 mb-4">
                <FaEnvelope />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Email
              </h3>

              <p className="text-slate-400 break-all">
                yourmail@gmail.com
              </p>

            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-2xl p-8 flex flex-col items-center text-center transition duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl text-cyan-400 mb-4">
                <FaGithub />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                GitHub
              </h3>

              <p className="text-slate-400">
                github.com/yourusername
              </p>

            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="bg-slate-900 hover:bg-slate-700 border border-slate-700 rounded-2xl p-8 flex flex-col items-center text-center transition duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl text-cyan-400 mb-4">
                <FaLinkedin />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                LinkedIn
              </h3>

              <p className="text-slate-400">
                linkedin.com/in/yourusername
              </p>

            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
