import datosPersonales from '../datos/datos'
import './stylesProjects.css'
datosPersonales
export const printProjects = () => {
  return `
  <div class="project" id  = "projectsInfoId">
  <div class = "projects">
  <h3>${datosPersonales.projects[0].title}</h3>
  <p>${datosPersonales.projects[0].description}</p>
  <a href="${datosPersonales.projects[0].link}" target="_blank">GIT HUB LINK</a>
  <img src="${datosPersonales.projects[0].preview}" alt="${datosPersonales.projects[0].title}" class = "alife_data">
</div>
<div class = "projects">
<h3>${datosPersonales.projects[1].title}</h3>
<p>${datosPersonales.projects[1].description}</p>
<a href="${datosPersonales.projects[1].link}" target="_blank">GIT HUB LINK</a>
<img src="${datosPersonales.projects[1].preview}" alt="${datosPersonales.projects[1].title}" class = "alife_data"> 
</div>
<div class = "projects">
<h3>${datosPersonales.projects[2].title}</h3>
  <p>${datosPersonales.projects[2].description}</p>
  <a href="${datosPersonales.projects[2].link}" target="_blank">GIT HUB LINK</a>
  <img src="${datosPersonales.projects[2].preview}" alt="${datosPersonales.projects[2].title}" class = "alife_data">
</div>
  </div>

`
}
