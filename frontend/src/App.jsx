import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

import Hero from './sections/Hero'
import Programs from './sections/Programs'
import RedBlue from './sections/RedBlue'
import PracticalTraining from './sections/PracticalTraining'
import TrainingPlans from './sections/TrainingPlans'
import Trainer from './sections/Trainer'
import WhoCanJoin from './sections/WhoCanJoin'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

function App() {
  const [selectedProgram, setSelectedProgram] = useState(null)

  const handleSelectProgram = (programTitle) => {
    setSelectedProgram({ name: programTitle, timestamp: Date.now() })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#05070a] dark:text-slate-100">
      <Navbar />

      <main className="overflow-x-clip">
        <Hero />
        <Programs onSelectProgram={handleSelectProgram} />
        <RedBlue />
        <PracticalTraining />
        <TrainingPlans onSelectPlan={handleSelectProgram} />
        <Trainer />
        <WhoCanJoin />
        <FAQ />
        <Contact selectedProgram={selectedProgram} />
      </main>

      <Footer />

      <Chatbot />
    </div>
  )
}

export default App