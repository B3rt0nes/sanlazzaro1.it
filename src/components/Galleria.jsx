import './Galleria.css'

const foto = [
  { titolo: 'Campo estivo 2024', cat: 'Campo', colore: 'var(--blu)' },
  { titolo: 'Uscita autunnale', cat: 'Uscita', colore: 'var(--verde)' },
  { titolo: 'Servizio in città', cat: 'Servizio', colore: 'var(--bordeaux)' },
  { titolo: 'Route invernale', cat: 'Route', colore: 'var(--viola)' },
  { titolo: 'Apertura anno', cat: 'Evento', colore: '#f5a623' },
  { titolo: 'Campo lupetti', cat: 'Campo', colore: 'var(--blu)' },
]

export default function Galleria() {
  return (
    <section className="sezione galleria">
      <div className="container">
        <h2 className="sezione-titolo">Galleria</h2>
        <p className="sezione-sottotitolo">I momenti più belli del nostro gruppo</p>

        <div className="galleria-grid">
          {foto.map((f, i) => (
            <div key={i} className={`galleria-item ${i === 0 ? 'grande' : ''}`}>
              <div className="galleria-placeholder" style={{background: f.colore}}>
                <span className="galleria-icona">📸</span>
              </div>
              <div className="galleria-info">
                <span className="galleria-cat">{f.cat}</span>
                <span className="galleria-titolo">{f.titolo}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="galleria-nota">
          <p>🔒 Le foto complete sono disponibili nell'<strong>Area Capi</strong>. Per i genitori, le foto vengono condivise tramite i canali ufficiali del gruppo.</p>
        </div>
      </div>
    </section>
  )
}