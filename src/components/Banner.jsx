import { useState, useEffect } from 'react'
import './Banner.css'

const slides = [
  { id: 1, img: '/icons/banner beca titulacion.png' },
  { id: 2, img: '/icons/beca deportiva_banner b.png' },
  { id: 3, img: '/icons/Beneficio devolucion electrica_banner.png' },
  { id: 4, img: '/icons/horizonte empleo_banner.png' },
]

function Banner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="banner">
      <div className="banner-track">
        <img
          src={slides[current].img}
          alt={`Banner ${current + 1}`}
          className="banner-img"
        />
      </div>
      <div className="banner-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Banner