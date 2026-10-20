//Crear un objeto que alamacene datos de una mascota
//desestructor utilizando un minimo de 4 variables
//Mostrar en consola

const mascota = {
  nombre: "Rockie",
  tipoMascota: "Perro",
  edad: 1,
  color: "Marrón",
  raza: "Husky",
  sexo: "Macho",
  skills: ["Correr", "Saltar", "Ladrar"],
};

const { raza, skills } = mascota;
console.log(raza, skills);

console.log("-------------------")

const { tipoMascota, edad } = mascota;
console.log(tipoMascota, edad);

console.log("-------------------")

const { nombre, color, sexo } = mascota;
console.log(nombre)
console.log(color)
console.log(sexo)