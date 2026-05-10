import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

function Skills() {

  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-3">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins]">
            Technologies I Use
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="font-medium text-lg">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
