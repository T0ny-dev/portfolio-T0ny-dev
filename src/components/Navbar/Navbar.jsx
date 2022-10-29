import NavbarMobile from "./NavbarMobile";
import Logo from "../../assets/logo.svg"
import Github from "../../assets/github.png"
import "./navbar.css"



const Navbar = () => {
  
  return (
    <>
    <div className='navbar'>
      <div className='navbar__logo'>
        <a href="/"><img src={Logo} alt="Logo LarnU" /></a>
      </div>
      <div className='navbar__links'>
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="https://drive.google.com/file/d/12cajUOHjxeS_LJExgEOxzc_36r2VnsOC/view?usp=sharing" target="_blank">Resumen</a>
      </div>
      <div className='navbar__button'>
      <a href="https://github.com/T0ny-dev" target="_blank">
        <button id="github__button" type="button">
        <img src={Github} width="12" />  Github
        </button>
      </a>
      <a href="https://of9j58qsiaq.typeform.com/to/I2nDs6fW" target="_blank">
        <button>
          Contacto
        </button>
      </a>
      </div>
    </div>
    <NavbarMobile/>
    </>
  );
};

export default Navbar;
