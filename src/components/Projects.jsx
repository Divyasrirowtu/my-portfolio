import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built using React and Tailwind CSS with smooth animations and professional UI design.",

      tech: ["React", "Tailwind", "JavaScript"],

      github: "https://github.com/yourusername/portfolio",

      live: "https://yourportfolio.vercel.app",
    },

    {
      title: "Weather App",
      description:
        "A weather forecast application using API integration to display real-time weather data with dynamic UI updates.",

      tech: ["React", "API", "CSS"],

      github: "https://github.com/yourusername/weather-app",

      live: "https://weather-app.vercel.app",
    },

    {
      title: "Task Manager",
      description:
        "A task management web app with add, edit, delete, and completion tracking features for productivity improvement.",

      tech: ["React", "LocalStorage", "Tailwind"],

      github: "https://github.com/yourusername/task-manager",

      live: "https://task-manager.vercel.app",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-medium mb-3">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins]">
            Featured Work
          </h2>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition duration-300"
            >

              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">

                <h3 className="text-3xl font-bold font-[Poppins]">
                  {project.title}
                </h3>

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
