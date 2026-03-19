import './Attivita.css'

const eventi = [
  { data: 'Giugno 2026', titolo: 'Campo Estivo Esploratori', tipo: 'Campo', colore: 'var(--blu)', desc: 'Una settimana in montagna tra escursioni, bivacchi e attività di squadriglia.' },
  { data: 'Luglio 2026', titolo: 'Campo Estivo Lupetti', tipo: 'Campo', colore: '#f5a623', desc: 'Il grande campo del branco: giochi, avventure e tante scoperte nella natura.' },
  { data: 'Settembre 2026', titolo: 'Apertura Anno Scout', tipo: 'Evento', colore: 'var(--verde)', desc: 'Si ricomincia! Nuove iscrizioni aperte per tutti i ragazzi dai 8 ai 21 anni.' },
  { data: 'Ottobre 2026', titolo: 'Uscita di Branca', tipo: 'Uscita', colore: 'var(--viola)', desc: 'Weekend fuori porta per tutte le branche: attività all\'aperto e vita di gruppo.' },
  { data: 'Dicembre 2026', titolo: 'Giornata del Servizio', tipo: 'Servizio', colore: 'var(--bordeaux)', desc: 'Una giornata dedicata al servizio nella comunità locale di San Lazzaro.' },
  { data: 'Febbraio 2027', titolo: 'Route Rover/Scolte', tipo: 'Route', colore: 'var(--blu)', desc: 'La route invernale del clan: giorni di cammino, riflessione e servizio.' },
]

export default function Attivita() {
  return (
    <section className="sezione attivita">
      <div className="container">
        <h2 className="sezione-titolo">Attività ed eventi</h2>
        <p className="sezione-sottotitolo">Il calendario del nostro gruppo per il 2026/2027</p>

        <div className="eventi-lista">
          {eventi.map((e, i) => (
            <div key={i} className="evento-card">
              <div className="evento-data-col">
                <div className="evento-marker" style={{background: e.colore}} />
                <span className="evento-data">{e.data}</span>
              </div>
              <div className="evento-contenuto">
                <div className="evento-header">
                  <h3 className="evento-titolo">{e.titolo}</h3>
                  <span className="evento-tipo" style={{background: e.colore}}>{e.tipo}</span>
                </div>
                <p className="evento-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="attivita-nota">
          <p>📅 Il calendario viene aggiornato regolarmente. Per informazioni sulle attività contatta i capi della tua branca.</p>
        </div>
      </div>
    </section>
  )
}