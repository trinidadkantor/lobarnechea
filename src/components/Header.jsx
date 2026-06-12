import { useState } from 'react'
import './Header.css'

const menuItems = [
  {
    label: 'Municipalidad',
    submenu: [
      'Conócenos', 'Autoridades', 'Direcciones', 'Asociaciones',
      'Audiencias con el Alcalde', 'Cuenta Pública y gestión de recursos',
      'Visualización de datos', 'Concursos públicos y licitaciones',
      'Objetivos de Desarrollo Sostenible', 'Plan de Desarrollo Comunitario'
    ]
  },
  {
    label: 'Comunidades',
    submenu: [
      'Jóvenes', 'Adulto Mayor', 'Red Mujer', 'Bienestar materno',
      'Red de inclusión', 'Emprendedores / HUB', 'Asuntos Religiosos',
      'Participa (campañas y donaciones)'
    ]
  },
  {
    label: 'Áreas Municipales',
    submenu: [
      'Salud', 'Seguridad', 'Vivienda', 'Planificación Urbana',
      'Centro de desarrollo laboral', 'Mascotas y animales',
      'Aseo y ornato', 'Agricultura y ganadería'
    ]
  },
  {
    label: 'Panoramas y Novedades',
    submenu: [
      'Conoce la comuna', 'Talleres y actividades deportivas',
      'Talleres y actividades culturales', 'Parques y Áreas Verdes',
      'Vive la montaña', 'Noticias', 'Galería de fotos'
    ]
  }
]

const rightMenu = [
  {
    label: 'Trámites Online',
    submenu: [
      'Patentes y permisos', 'Obras municipales',
      'Permiso de Circulación', 'Asesoría Urbana y Espacio Público'
    ]
  },
  {
    label: 'Reserva de Horas',
    submenu: [
      'Licencia de conducir', 'Clínica veterinaria', 'Hora fácil salud'
    ]
  },
  {
    label: 'Portal del Vecino',
    submenu: [
      'Regístrate aquí', 'Tarjeta vecino',
      'Consultas, solicitudes, reclamos y felicitaciones',
      'Beneficios sociales', 'Oficina territorial',
      'Participación ciudadana',
      'COSOC (Centro Comunal de Organizaciones de la Sociedad Civil)',
      'Buses municipales', 'Juzgado de Policía Local Virtual',
      'Asistencia legal'
    ]
  }
]

function Header() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <header>
     <div className="top-bar">
  <img src="/icons/Maqueta_Logo LB largo.png" alt="Logo LB" className="top-bar-logo" />
  <div className="top-bar-links">
    <span>Plataforma Ley Lobby</span>
    <span>Solicitar Información Ley de Transparencia</span>
    <span>Transparencia Activa Ley de Transparencia</span>
  </div>
</div>

     <nav className="navbar">
  <div className="nav-left">
    <div className="search-bar">
      <input type="text" placeholder="Buscador" />
      <img src="/icons/Maqueta_Lupa.png" alt="Buscar" className="lupa-icon" />
    </div>
    {rightMenu.map((item) => (
      <div
        key={item.label}
        className="nav-item"
        onMouseEnter={() => setOpenMenu(item.label)}
        onMouseLeave={() => setOpenMenu(null)}
      >
       <button>
  {item.label}
  <img
    src="/icons/flecha menu.png"
    alt="▾"
    className={`flecha-icon ${openMenu === item.label ? 'flecha-arriba' : ''}`}
  />
</button>
        {openMenu === item.label && (
          <div className="dropdown">
            {item.submenu.map((sub) => (
              <a key={sub} href="#">{sub}</a>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>

  <div className="nav-right">
    {[...menuItems].reverse().map((item) => (
      <div
        key={item.label}
        className="nav-item"
        onMouseEnter={() => setOpenMenu(item.label)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <button>
  {item.label}
  <img
    src="/icons/flecha menu.png"
    alt="▾"
    className={`flecha-icon ${openMenu === item.label ? 'flecha-arriba' : ''}`}
  />
</button>
        {openMenu === item.label && (
          <div className="dropdown dropdown-right">
            {item.submenu.map((sub) => (
              <a key={sub} href="#">{sub}</a>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</nav>
    </header>
  )
}

export default Header