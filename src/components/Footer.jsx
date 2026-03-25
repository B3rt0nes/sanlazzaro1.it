import './Footer.css'

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-bande">
        <span style={{background:'var(--blu)'}} />
        <span style={{background:'var(--bordeaux)'}} />
        <span style={{background:'var(--verde)'}} />
        <span style={{background:'var(--viola)'}} />
      </div>
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="footer-giglio">⚜</span>
          <div>
            <div className="footer-nome">Gruppo Scout AGESCI San Lazzaro 1</div>
            <div className="footer-motto">Estote Parati</div>
          </div>
        </div>

        <div className="footer-link-col">
          <div className="footer-col-titolo">Navigazione</div>
          {[['home','Home'],['attivita','Attività'],['galleria','Galleria'],['contatti','Contatti']].map(([id,label]) => (
            <button key={id} className="footer-link" onClick={() => navigate(id)}>{label}</button>
          ))}
        </div>

        <div className="footer-link-col">
          <div className="footer-col-titolo">Info</div>
          <p className="footer-info">San Lazzaro di Savena (BO)</p>
          <a href="mailto:sanlazzaro1@agesci.it" className="footer-email">sanlazzaro1@agesci.it</a>
          <a href="https://www.agesci.it" target="_blank" rel="noopener" className="footer-agesci">agesci.it →</a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Gruppo Scout AGESCI San Lazzaro 1</span>
        <button className="footer-link-capi" onClick={() => navigate('areacapi')}>Area Capi</button>
      </div>
    </footer>
  )
}