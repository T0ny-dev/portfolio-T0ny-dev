import React from "react";
import Avatar from "../../assets/foto.svg"
import "./skills.css"
import Microsoft from "../../assets/Microsoft_logo.svg.webp"
import Ucamp from "../../assets/logo-top-ucamp.png"
import Larnu from "../../assets/larnu.jpeg"
import Spline from '@splinetool/react-spline';


const Skills = () => {
  return (
    <div className="skills" >
      <h2>Full Stack Developer</h2>
      <div className="skills__perfil">
      <div className="skills__information">
          <h3 id="about" >Antonio Rodriguez Aviles</h3>
          <img src={Avatar} alt="foto de antonio" />
          <p>
            Mi nombre es Antonio Rodríguez y soy Full Stack Developer, Ingeniero Industrial y Administrador por profesión. Tengo 5 años de experiencia laboral y he trabajado para sectores tan diversos como Ingeniería, educación y el sector emprendedor.<br/><br/>
            En el 2018 tuve la oportunidad de trabajar en la primera incubadora de negocios de mi ciudad como coordinador, donde logramos participar en la Semana Nacional del Emprendedor en México en la categoría como  proyecto de alto impacto 2018.
          </p>
          <h3 id="skills" >Conocimientos en Programación y habilidades</h3>
          <div className="skills__information__span">
            <span>HTML</span>
            <span>CSS</span>
            <span>SASS</span>
            <span>Boostrap</span>
            <span>Github</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.JS</span>
            <span>Express.JS</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>CI / CD</span>
            <span>testing </span>
            <span id="span__especial">WordPress</span>
            <span id="span__especial">MAMP</span>
            <span id="span__especial">Shopify</span>
            <span id="span__especial">Spline 3D</span>
            <span id="span__especial">Diseñador gráfico</span>
            <span id="span__especial">Desing Thinking</span>
          </div>
          <div className="skill__information__3d">
          <Spline scene="https://prod.spline.design/QbVmKPl2UfbRyv7x/scene.splinecode" />
          </div>
          <h3>Constante aprendizaje</h3>
          <div className="skill__information__learning">
            <div>
              <img src={Microsoft} alt="" />
              <p id="learn">Azure - Lauch X Latam - Tiempo parcial <br /> Microsoft 2022</p>
            </div>
            <div>
              <img src={Ucamp} alt="" />
              <p id="learn">Fundamentos de UX/UI - Tiempo parcial <br /> Ucamp.io 2022</p>
            </div>
            <div>
              <img src={Larnu} alt="" />
              <p id="learn">Full Stack Developer - Finalizado <br />
              LarnU 2022
              </p>
            </div>
          </div>
      </div>
      <div className="skills__banner"></div>
      </div>
      <h2 id="projects">Proyectos</h2>
    </div>
  )
}

export default Skills;