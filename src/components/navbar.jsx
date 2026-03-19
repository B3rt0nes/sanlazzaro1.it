import { useState } from 'react'
import './Navbar.css'

const voci = [
  { id: 'home', label: 'Home' },
  { id: 'attivita', label: 'Attività ed eventi' },
  { id: 'galleria', label: 'Galleria' },
  { id: 'contatti', label: 'Contatti' },
  { id: 'areacapi', label: 'Area Capi' },
]

export default function Navbar({ currentPage, navigate }) {
  const [menuAperto, setMenuAperto] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <div className="navbar-logo" onClick={() => navigate('home')}>
          <div className="logo-giglio">⚜</div>
          <div className="logo-testo">
            <span className="logo-nome">San Lazzaro 1</span>
            <span className="logo-sottotitolo">Gruppo Scout AGESCI</span>
          </div>
        </div>

        <ul className={`navbar-voci ${menuAperto ? 'aperto' : ''}`}>
          {voci.map(v => (
            <li key={v.id}>
              <button
                className={`navbar-link ${currentPage === v.id ? 'attivo' : ''} ${v.id === 'areacapi' ? 'navbar-capi' : ''}`}
                onClick={() => { navigate(v.id); setMenuAperto(false) }}
              >
                {v.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setMenuAperto(!menuAperto)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}