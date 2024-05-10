import datosPersonales from '../datos/datos'
import { printeducation } from '../educación/indexEducation'
import { jobExperiencie } from '../workExperiece/indexWork'
import './headerStyles.css'

datosPersonales
const headerTemplate = () => {
  return `
  <div id="Principal">
    <div class="nombre">${datosPersonales.name}</div>
    <div class="Dtalinks">
      <ul class="list_dates">
        <li><a href="#styleList" class="refs">About me</a></li>
        <li><a href="#educationM" class="refs">Education</a></li>
        <li><a href="#JobM" class="refs">Experience</a></li>
        <li><a href="#projectsInfoId" class="refs">Projects</a></li>
      </ul>
    </div>
  </div>`
}

export const headerPrint = () => {
  const header = document.querySelector('header')
  header.innerHTML = headerTemplate()
  const contenido = document.getElementById('show')
  const ahreff = document.querySelectorAll('.refs')
  ahreff.forEach((itemssInfo) => {
    itemssInfo.addEventListener('click', () => {
      console.log('guay')
      if (itemssInfo.textContent.trim() === 'Education') {
        contenido.innerHTML = ''
        contenido.innerHTML += printeducation()
      } else if (itemssInfo.textContent.trim() === 'Experience') {
        contenido.innerHTML = ''
        contenido.innerHTML += jobExperiencie()
      }
    })
  })
}
