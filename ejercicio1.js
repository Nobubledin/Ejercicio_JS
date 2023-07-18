const nombre = "Oscar";
const apellidos = "Iglesias";
let temas = [`Git`, `HTML`, `CSS`];

let redes = ["Github", "https://github.com/"]

const afirmativo = "Sí";
const negativo = "No";

if(respuesta == afirmativo) {
    alert("Este usuario está buscando trabajo");
} else if(respuesta == negativo) {
    alert("Este usuario no está buscando trabajo");
} else {
    while(respuesta != afirmativo) {
        let respuesta = prompt("¿Estás buscando trabajo? Sí / No");
    }    
}



/*let numero = 1;

while(numero != 10) {
    console.log(numero);
    numero = numero + 1;
}*/