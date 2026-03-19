import './ChiSiamo.css'

const branche = [
  { nome: 'Lupetti/e', eta: '8-11 anni', colore: '#f5a623', desc: 'I più piccoli del branco: giocano, scoprono il mondo e imparano i valori dello scoutismo.' },
  { nome: 'Esploratori/Guide', eta: '12-16 anni', colore: 'var(--blu)', desc: 'La squadriglia è la loro famiglia: avventura, natura e responsabilità.' },
  { nome: 'Rover/Scolte', eta: '17-21 anni', colore: 'var(--bordeaux)', desc: 'Il servizio è la loro strada: impegno concreto per la comunità e la società.' },
]

export default function ChiSiamo() {
  return (
    <section className="sezione chi-siamo">
      <div className="container">
        <div className="chi-intro">
          <div className="chi-testo">
            <h2 className="sezione-titolo">Chi siamo</h2>
            <p className="sezione-sottotitolo">Un gruppo scout da generazioni</p>
            <p>Il <strong>Gruppo Scout AGESCI San Lazzaro 1</strong> è una realtà educativa radicata nel territorio di San Lazzaro di Savena. Da anni accompagniamo bambini, ragazzi e giovani in un percorso di crescita attraverso la natura, il servizio e i valori dello scoutismo.</p>
            <p style={{marginTop: 16}}>Facciamo parte dell'<strong>AGESCI</strong> — Associazione Guide e Scouts Cattolici Italiani — il più grande movimento scout cattolico d'Italia, presente in tutto il paese con migliaia di gruppi.</p>
          </div>
          <div className="chi-valori">
            <div className="valore-item">
              <span className="valore-icona" style={{color:'var(--verde)'}}>🌿</span>
              <span>Natura e avventura</span>
            </div>
            <div className="valore-item">
              <span className="valore-icona" style={{color:'var(--blu)'}}>🤝</span>
              <span>Servizio alla comunità</span>
            </div>
            <div className="valore-item">
              <span className="valore-icona" style={{color:'var(--viola)'}}>⚜</span>
              <span>Valori e lealtà</span>
            </div>
            <div className="valore-item">
              <span className="valore-icona" style={{color:'var(--bordeaux)'}}>🏕️</span>
              <span>Vita di campo</span>
            </div>
          </div>
        </div>

        <h3 className="branche-titolo">Le nostre branche</h3>
        <div className="grid-3">
          {branche.map(b => (
            <div key={b.nome} className="card branca-card">
              <div className="branca-header" style={{background: b.colore}}>
                <h4 className="branca-nome">{b.nome}</h4>
                <span className="branca-eta">{b.eta}</span>
              </div>
              <div className="branca-corpo">
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}