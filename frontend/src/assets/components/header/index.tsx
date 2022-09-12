import logo from '../../components/img/logo.svg'
import './style.css'

function header() {
    return (
        <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/_gabriel.matiass/"> Gabriel Matias</a>
        </p>
      </div>
    </header>
    )
}

export default header