import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />

      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Section</h1>
      </section>

      <section id="skills" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Skills Section</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </div>
  )
}

export default App
