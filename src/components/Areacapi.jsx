import { useState } from 'react'
import './AreaCapi.css'

const CAPI = [
  { username: 'capo', password: 'sanlazzaro1' }
]

export default function AreaCapi() {
  const [loggato, setLoggato] = useState(false)
  const [form, setForm] = useState({ username: '', password: '' })
  const [errore, setErrore] = useState('')

  const login = (e) => {
    e.preventDefault()
    const ok = CAPI.find(c => c.username === form.username && c.password === form.password)
    if (ok) {
      setLoggato(true)
      setErrore('')
    } else {
      setErrore('Credenziali non corrette. Riprova.')
    }
  }

  if (!loggato) {
    return (
      <section className="sezione areacapi">
        <div className="container">
          <div className="login-box">
            <div className="login-giglio">⚜</div>
            <h2 className="login-titolo">Area Capi</h2>
            <p className="login-sottotitolo">Accesso riservato ai capi del Gruppo Scout AGESCI San Lazzaro 1</p>
            <form className="login-form" onSubmit={login}>
              <div className="form-gruppo">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Il tuo username"
                  value={form.username}
                  onChange={e => setForm({...form, username: e.target.value})}
                  required
                />
              </div>
              <div className="form-gruppo">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="La tua password"
                  value={form.password}
                  onChange={e => setForm({...form, password: e.target.value})}
                  required
                />
              </div>
              {errore && <div className="login-errore">{errore}</div>}
              <button type="submit" className="btn btn-viola" style={{width:'100%'}}>
                Accedi
              </button>
            </form>
            <p className="login-nota">Problemi di accesso? Contatta il capogruppo.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="sezione areacapi">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h2 className="sezione-titolo">Area Capi</h2>
            <p className="sezione-sottotitolo">Benvenuto nel pannello riservato</p>
          </div>
          <button className="btn btn-outline" style={{background:'var(--bordeaux)', color:'white'}} onClick={() => setLoggato(false)}>
            Esci
          </button>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dash-icona" style={{background:'var(--blu-light)', color:'var(--blu)'}}>📋</div>
            <h3>Documenti</h3>
            <p>Modulistica, consensi, regolamenti e documenti ufficiali del gruppo.</p>
            <button className="btn btn-blu" style={{marginTop:16, fontSize:'0.9rem', padding:'10px 20px'}}>Vai ai documenti</button>
          </div>
          <div className="dashboard-card">
            <div className="dash-icona" style={{background:'var(--viola-light)', color:'var(--viola)'}}>📅</div>
            <h3>Calendario capi</h3>
            <p>Riunioni di staff, date importanti e scadenze del gruppo.</p>
            <button className="btn btn-viola" style={{marginTop:16, fontSize:'0.9rem', padding:'10px 20px'}}>Vai al calendario</button>
          </div>
          <div className="dashboard-card">
            <div className="dash-icona" style={{background:'#fef3e2', color:'#f5a623'}}>👥</div>
            <h3>Censimenti</h3>
            <p>Gestione iscritti, dati anagrafici e censimento AGESCI annuale.</p>
            <button className="btn" style={{marginTop:16, fontSize:'0.9rem', padding:'10px 20px', background:'#f5a623', color:'white'}}>Vai ai censimenti</button>
          </div>
          <div className="dashboard-card">
            <div className="dash-icona" style={{background:'#fde8e8', color:'var(--bordeaux)'}}>📢</div>
            <h3>Comunicazioni</h3>
            <p>Circolari, comunicati AGESCI e messaggi interni allo staff.</p>
            <button className="btn" style={{marginTop:16, fontSize:'0.9rem', padding:'10px 20px', background:'var(--bordeaux)', color:'white'}}>Vai alle comunicazioni</button>
          </div>
          <div className="dashboard-card">
            <div className="dash-icona" style={{background:'#e8f5e2', color:'var(--verde)'}}>🏕️</div>
            <h3>Campi e uscite</h3>
            <p>Programmazione, autorizzazioni e logistica per campi e uscite.</p>
            <button className="btn" style={{marginTop:16, fontSize:'0.9rem', padding:'10px 20px', background:'var(--verde)', color:'white'}}>Pianifica</button>
          </div>
          <div className="dashboard-card">
            <div className="dash-icona" style={{background:'var(--viola-light)', color:'var(--viola)'}}>📸</div>
            <h3>Galleria completa</h3>
            <p>Accesso all'archivio fotografico completo del gruppo.</p>
            <button className="btn btn-viola" style={{marginTop:16, fontSize:'0.9rem', padding:'10px 20px'}}>Vai alla galleria</button>
          </div>
        </div>
      </div>
    </section>
  )
}