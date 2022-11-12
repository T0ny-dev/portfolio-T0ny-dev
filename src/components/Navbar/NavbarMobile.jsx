import React from 'react'
import Logo from "../../assets/logo.svg"
import IconMenu from "../../assets/menu.png"
import IconClose from "../../assets/x.png"
import Github from "../../assets/github.png" 
import "./navbarMobile.css"
import { useState } from "react"


const NavbarMobile = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

return (
  <div className='navbar--mobile'>
    <div className='navbar--mobile__menu'>
      <div className='navbar--mobile__logo'>
        <img src= {Logo} alt="Logo LarnU" />
      </div>
      <div className='navbar--mobile__iconMenu'>
        <button onClick={handleToggle}>{navbarOpen ? (<img src={IconClose}></img>):(<img src={IconMenu}></img>)}</button>
      </div>
    </div>
    <div className={`menuNav ${navbarOpen ? "navbar--mobile__links" : "hidden"}`}>
      <a href="#">Sobre Mí</a>
      <a href="#">Proyectos</a>
      <a href="#">Habilidades</a>
      <a href="#">Resumen</a>
      <button id="github__button" type="button">
        <a href="https://github.com/T0ny-dev" target="_blank"><img src={Github} width="13" />  Github</a>
      </button>
      <a href="https://of9j58qsiaq.typeform.com/to/I2nDs6fW?typeform-source=127.0.0.1" target="_blank">
      <button id='contact'>
        Contacto
      </button>
      </a>
    </div>
  </div>
)
}

export default NavbarMobile;