import Masthead from './components/Masthead'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import References from './components/References'
import Roadmap from './components/Roadmap'

export default function App() {
  return (
    <div className="bg-ink text-cream font-sans antialiased px-6 pb-20 max-w-[820px] mx-auto min-h-screen">
      <Masthead />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <References />
      <Roadmap />
    </div>
  )
}
