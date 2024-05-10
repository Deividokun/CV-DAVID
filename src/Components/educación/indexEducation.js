import datosPersonales from '../datos/datos'
import './stylesEducacion.css'
datosPersonales
export const printeducation = () => {
  return `
  <div id = "educationM">
  <h2>${datosPersonales.education.degree}</h2>
  <h3>${datosPersonales.education.university}</h3>
  <h3>${datosPersonales.education.graduationYear}</h3>
  <h4>${datosPersonales.education.honors}</h4>
  <p>${datosPersonales.education.relevantCourses[0]}</p>
  <p>${datosPersonales.education.relevantCourses[1]}</p>
  <p>${datosPersonales.education.relevantCourses[2]}</p>
  <p>${datosPersonales.education.relevantCourses[3]}</p>
  <div>
  `
}
