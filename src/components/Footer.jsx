import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Municipalidad de Lo Barnechea</h3>
        <p>Alcalde Felipe Alessandri V.</p>
        <br />
        <p><strong>Centro Cívico:</strong> Av. El Rodeo 12.777</p>
        <p><strong>Dideco:</strong> Av. Raúl Labbé 13.989</p>
        <div className="social-icons">
          <a href="#"><img src="/icons/Maqueta_instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/icons/Maqueta_linkedin.png" alt="LinkedIn" /></a>
          <a href="#"><img src="/icons/Maqueta_x.png" alt="X" /></a>
          <a href="#"><img src="/icons/Maqueta_youtube.png" alt="YouTube" /></a>
        </div>
      </div>

      <div className="footer-center">
        <h4>Servicios Externos</h4>
        <a href="#">Registro Civil</a>
        <a href="#">Juzgado de Policía Local</a>
        <a href="#">Servicio de Impuestos Internos</a>
        <a href="#">Tesorería General de la República</a>
        <a href="#">Sernac</a>
      </div>

      <div className="footer-right">
        <h4>Contacto</h4>
        <a href="#">Guía de Contactos</a>
        <a href="#"><strong>Teléfono:</strong> 22 757 3100</a>
        <a href="#"><strong>Mail:</strong> contacto@lobarnechea.cl</a>
        <a href="#">Consultas, solicitudes, reclamos y felicitaciones</a>
        <a href="#">Trabaja con nosotros</a>
      </div>
    </footer>
  )
}

export default Footer