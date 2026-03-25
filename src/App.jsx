import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import Attivita from './components/Attivita'
import Galleria from './components/Galleria'
import Contatti from './components/Contatti'
import AreaCapi from './components/AreaCapi'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigate={navigate} />
      {currentPage === 'home' && (
        <>
          <Hero navigate={navigate} />
          <ChiSiamo />
        </>
      )}
      {currentPage === 'attivita' && <Attivita />}
      {currentPage === 'galleria' && <Galleria />}
      {currentPage === 'contatti' && <Contatti />}
      {currentPage === 'areacapi' && <AreaCapi />}
      <Footer navigate={navigate} />
    </div>
  )
}