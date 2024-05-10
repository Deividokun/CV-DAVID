import datosPersonales from '../datos/datos'
import './stylesWork.css'
datosPersonales
export const jobExperiencie = () => {
  return `
  <div id = "JobM">
  <h2 class = "h2">${datosPersonales.workExperience[0].position}</h2>
  <h3>${datosPersonales.workExperience[0].company}</h3>
  <h3>${datosPersonales.workExperience[0].startDate}</h3>
  <h4>${datosPersonales.workExperience[0].description}</h4>
  <div>
  `
}
