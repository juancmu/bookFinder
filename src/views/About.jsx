import React from 'react';
import "./About.css";
import aboutImg from "../images/about-img.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Especializacion en Ingenieria de Software</h2>
          <h3>Desarrollo de aplicaciones web</h3>
          <h4>Actividad 1 - Desarrollo de un Front-End utilizando React</h4>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Plataformas Usadas</h2>

            <ul>

              <li>React V 18</li>
              <li>Vite 4</li>
              <li>Css puro y bootstrap</li>
              <li>Leaflet (Libreria para mapas WEB)</li>
              <li>React Icons</li>

            </ul>
            <h3>Api Utilizada <a href="https://openlibrary.org/developers/api" target="_blank" rel="noopener noreferrer">openlibrary.org</a></h3>

            <h3>Repositorio <a href="https://github.com/juancmu/bookFinder.git" target="_blank" rel="noopener noreferrer">Github</a></h3>
              <h4>Estudiante> Juan Carlos Muñoz Castañeda</h4>
         </div>
        </div>
      </div>
    </section>
  )
}

export default About
