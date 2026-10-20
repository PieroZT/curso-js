//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" -> "itanes"

const textoOriginal = "ALESSANDRO";
const longitud = textoOriginal.length;

let textoHorizontal = "";

for (let i = longitud - 1; i >= 0; i--) {
  textoHorizontal += textoOriginal.substring(i, i + 1);
}
console.log(textoHorizontal); 

//Crear una variable donde almacene una direccion de correo electronico
//verificar si el correo es valido cuando tiene un solo @
//Ejemplo:
//jhon@gmail.com [correcto]
//luis@gmail.com [incorrecto]
//mariagmail.com [incorrecto]
/*const correo = "algo@gmail.com"
const total = 0

for (let i = 0; 1 < correo.length; i++){

}*/

