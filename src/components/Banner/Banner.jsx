import React from "react";
import "./banner.css"
import Spline from '@splinetool/react-spline';


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__title">
        <h1>Hola soy Tony</h1>
        <span>Full Stack Developer</span>
        <p>
          Soy desarrollador full Stack ubicado en México,
          apasionado por las interfaces, el 3D y codear
          en proyectos.
        </p>
        <a href="https://of9j58qsiaq.typeform.com/to/I2nDs6fW" target="_blank">
        <button>
              Contacto
        </button>
        </a>
        <a href="https://linktr.ee/t0ny_dev" target="_blank" >Redes Sociales</a>
      </div>
      <div className="banner__figure">
        <div className="banner__figure--3D">
        <Spline scene="https://prod.spline.design/46KKSD2aabxi4rq2/scene.splinecode" />
        </div>
      </div>
    </div>
  )
}

export default Banner;