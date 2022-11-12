import React from "react";
import "./projects.css"
import Logot from "../../assets/logot.png"
import Bymgroup from "../../assets/bymgroup.png"
import Casojobbi from "../../assets/caso1.png"
import Qira from "../../assets/qira.png"
import RunRan from "../../assets/runran.png"
import Room from "../../assets/3droom.png"
import Pokemon from "../../assets/pokemon.png"
import Bola8 from "../../assets/bola8.png"
import Clima from "../../assets/Appclima.png"
import Pokemons from "../../assets/pokedex.png"
import Todos from "../../assets/todos.png"
import Node from "../../assets/node.png"


const Projects= () => {
  return (
    <div className="projects">
      <div className="projects__box">
        <h3>QIRA WEBSITE</h3>
        <img src={Qira} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://qira-workspace.000webhostapp.com/" id="link" target="_blank" >Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/qira-workspace" target="_blank" >Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>RUNRAN WEBSITE</h3>
        <img src={RunRan} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://t0ny-dev.github.io/proyecto_final_html_css/" id="link" target="_blank">Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/proyecto_final_html_css"target="_blank" >Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>3D ROOM</h3>
        <img src={Room} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://t0ny-dev.github.io/3d-room-coder/" target="_blank" id="link">Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/3d-room-coder" target="_blank">Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Mini Juego Pokemon</h3>
        <img src={Pokemon} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://t0ny-dev.github.io/challenge_pokemon_game/"target="_blank" id="link">Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/challenge_pokemon_game"target="_blank" >Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Magic Ball 8</h3>
        <img src={Bola8} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://t0ny-dev.github.io/Magic_8_ball/" target="_blank"id="link">Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/Magic_8_ball"target="_blank" >Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Web del Clima API</h3>
        <img src={Clima} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://t0ny-dev.github.io/api_weather_js/" target="_blank"id="link">Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/api_weather_js" target="_blank">Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Pokemons API</h3>
        <img src={Pokemons} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://t0ny-dev.github.io/react_introduccion/" target="_blank"id="link">Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/react_introduccion" target="_blank">Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>CRUD Todos</h3>
        <img src={Todos} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://sunny-trifle-587c30.netlify.app/" target="_blank" id="link">Ver Proyecto</a>
          <a href="https://github.com/T0ny-dev/react_todos" target="_blank">Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Servidor básico con Node</h3>
        <img src={Node} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://github.com/T0ny-dev/servidor-y-API-con-NODEJS" target="_blank">Ver Code</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Estudio de caso: Jobbi</h3>
        <img src={Casojobbi} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://www.behance.net/gallery/125447657/JOBBi-Web-App-to-find-a-job-UXUI?tracking_source=search_projects%7Cjobbi" target="_blank" id="link">Ver Proyecto</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Diseño Web: Bym Group</h3>
        <img src={Bymgroup} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://www.behance.net/gallery/128282697/bymGroup-branding-and-web-design"target="_blank" id="link">Ver Proyecto</a>
        </div>
      </div>
      <div className="projects__box">
        <h3>Caso Estudio: Diseño de logo</h3>
        <img src={Logot} alt="qira website" />
        <div className="projects__box__links">
          <a href="https://www.behance.net/gallery/134671939/Tekton-Tech-diseno-de-marca" target="_blank" id="link" >Ver Proyecto</a>
        </div>
      </div>
    </div>
  )
}

export default Projects;