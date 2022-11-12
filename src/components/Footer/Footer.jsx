import React from "react";
import "./footer.css"
import Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contanct">
        <h2>Siempre abierto a colaborar</h2>
        <p>@T0ny-dev</p>
        <a href="https://of9j58qsiaq.typeform.com/to/I2nDs6fW?typeform-source=127.0.0.1" target="_blank" >
        <button>
          Contacto
        </button>
        </a>
      </div>
      <div className="footer__copyright">
        <img src={Logo} alt="" />
        <p>@T0ny-dev 2022</p>
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos </a>
        <a href="#skills">Habilidades </a>
        <a href="https://drive.google.com/file/d/12cajUOHjxeS_LJExgEOxzc_36r2VnsOC/view?usp=sharing"target="_blank" >Resumen</a>
      </div>
    </div>
  )
}

export default Footer;