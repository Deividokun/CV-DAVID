import datosPersonales from '../datos/datos'
import { printeducation } from '../educación/indexEducation'
import { printProjects } from '../projects/indexProjects'
import { jobExperiencie } from '../workExperiece/indexWork'
import './stylesMain.css'
datosPersonales

const printMain = () => {
  return `
  <div id = "theBigOneData">
  <img src="${datosPersonales.avatar}" alt="me" id="mee">
  <div class = "skillsData">
  <ul id = "styleList">
  <li>${datosPersonales.skills[0]}</li>
  <li>${datosPersonales.skills[1]}</li>
  <li>${datosPersonales.skills[2]}</li>
  <li>${datosPersonales.skills[3]}</li>
  <li>${datosPersonales.skills[4]}</li>
  <li>${datosPersonales.skills[5]}</li>
  <li>${datosPersonales.skills[6]}</li>
  <li>${datosPersonales.skills[7]} </li>
  <li>${datosPersonales.skills[8]}</li>
  <li>${datosPersonales.skills[9]}</li>
</ul>
  </div>
  <div class = "descriptionOf">
  <p id = "description">${datosPersonales.aboutMe}</p>
  </div>
  <div class = "adreess">${datosPersonales.address}</div>
  <button>Contact Me</button>
  </div>
  <div class = "changeBoton"> 
  <button id = "change"> SHOW EDUCATION </button>
  </div>
  <div id = "show">
  </div>
  `
}

export const printdefMain = () => {
  const main = document.querySelector('main')
  const project = document.querySelectorAll('.projects')
  console.log(project)
  main.innerHTML = printMain()
  main.innerHTML += printProjects()

  ////boton de Show
  const button = document.getElementById('change')
  let aprobbed = true
  const contenido = document.getElementById('show')
  button.addEventListener('click', () => {
    if (aprobbed) {
      button.innerText = 'SHOW EXPERIENCE'
      contenido.innerHTML = ''
      contenido.innerHTML += printeducation()
      aprobbed = false
    } else {
      button.innerText = 'SHOW EDUCATION'
      contenido.innerHTML = ''
      contenido.innerHTML += jobExperiencie()
      aprobbed = true
    }
  })
}
