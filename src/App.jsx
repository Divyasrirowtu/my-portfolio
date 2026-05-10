import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="bg-slate-900 text-white">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <section
        id="projects"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">
          Projects Section
        </h1>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">
          Contact Section
        </h1>
      </section>

    </div>
  )
}

export default App
