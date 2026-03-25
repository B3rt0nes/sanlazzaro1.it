import './Hero.css'

export default function Hero({ navigate }) {
  return (
    <section className="hero">
      <div className="hero-sfondo" />
      <div className="hero-contenuto container">
        <div className="hero-giglio">⚜</div>
        <p className="hero-pre">Gruppo Scout AGESCI</p>
        <h1 className="hero-titolo">San Lazzaro 1</h1>
        <p className="hero-motto">
          "Estote Parati" — Scouting per crescere insieme, servire gli altri, vivere l'avventura
        </p>
        <div className="hero-bottoni">
          <button className="btn btn-outline" onClick={() => navigate('attivita')}>
            Le nostre attività
          </button>
          <button className="btn btn-viola" style={{background:'var(--verde)', marginLeft: 12}} onClick={() => navigate('contatti')}>
            Contattaci
          </button>
        </div>
        <div className="hero-bande">
          <span style={{background:'var(--blu)'}} />
          <span style={{background:'var(--bordeaux)'}} />
          <span style={{background:'var(--verde)'}} />
          <span style={{background:'var(--viola)'}} />
        </div>
      </div>
    </section>
  )
}