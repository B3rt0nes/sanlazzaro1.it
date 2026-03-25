import './Contatti.css'

export default function Contatti() {
  return (
    <section className="sezione contatti">
      <div className="container">
        <h2 className="sezione-titolo">Contatti</h2>
        <p className="sezione-sottotitolo">Vuoi saperne di più o iscrivere tuo figlio?</p>

        <div className="contatti-grid">
          <div className="contatti-info">
            <h3 className="contatti-h3">Dove siamo</h3>
            <div className="info-item">
              <span className="info-icona">📍</span>
              <div>
                <strong>Sede del gruppo</strong>
                <p>Via [indirizzo sede], San Lazzaro di Savena (BO)</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icona">📧</span>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:sanlazzaro1@agesci.it">sanlazzaro1@agesci.it</a></p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icona">📅</span>
              <div>
                <strong>Riunioni</strong>
                <p>Ogni sabato pomeriggio durante l'anno scout (settembre–giugno)</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icona">👶</span>
              <div>
                <strong>Iscrizioni</strong>
                <p>Aperte a settembre per bambini e ragazzi dagli 8 anni in su</p>
              </div>
            </div>

            <div className="social-row">
              <a href="#" className="social-btn" style={{background:'var(--blu)'}}>Facebook</a>
              <a href="#" className="social-btn" style={{background:'var(--bordeaux)'}}>Instagram</a>
            </div>
          </div>

          <div className="contatti-form-box">
            <h3 className="contatti-h3">Scrivici</h3>
            <form className="contatti-form" onSubmit={e => { e.preventDefault(); alert('Messaggio inviato! Ti risponderemo presto.') }}>
              <div className="form-gruppo">
                <label>Nome e cognome</label>
                <input type="text" placeholder="Mario Rossi" required />
              </div>
              <div className="form-gruppo">
                <label>Email</label>
                <input type="email" placeholder="mario@email.it" required />
              </div>
              <div className="form-gruppo">
                <label>Messaggio</label>
                <textarea rows={5} placeholder="Scrivi qui la tua domanda..." required />
              </div>
              <button type="submit" className="btn btn-viola" style={{width:'100%'}}>
                Invia messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}