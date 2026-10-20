//Estructuras = OBJETOS
//Desestructuras = ABRIR OBJETOS
const persona = {
  apellidos: "Zapata Torres",
  nombres: "Alessandro del Piero",
  edad: 19,
  skills: ["PHP", "Java", "Javascript"],
};

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

//Desestructurar es separar datos provenientes de un objeto
//NOTA: No es necesario recuperar toda la coleccion
//NOTA: La variables deben coinciden con las claves
const { nombres, skills } = persona;
console.log(nombres, skills);
