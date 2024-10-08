/*1*/
/*
function CalculadoraEdad(fecha) {
    const fechaNacimiento = new Date(fecha);
    
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth();

    const añoNacimiento = fechaNacimiento.getFullYear();
    const mesNacimiento = fechaNacimiento.getMonth();

    let edad = añoActual - añoNacimiento;

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento)) {
        edad--;
    }

    return edad
}
*/

/*2*/
/*
function TirandoFruta(){
    const frutas = ["manzana", "banana", "pera", "uva", "naranja", "frutilla", "mango", "durazno", "kiwi", "sandía"];
    
    return frutas;
}
*/

/*3*/
/*
function Comparando(){
console.log(10 == '10')

console.log (10 === '10')

const numero = 10.6

console.log(typeof numero)

console.log(true == 1)
}

*/

/*4*/

/*
const ciudad = {
    nombre: 'Buenos Aires',
    fechaFundacion: '1900-11-10',
    poblacion: 10000000,
    extension: 50000
}
*/

/*5*/

/*
function Dobledeelementos(array) {
    const arrayduplicado = array.map(function(elemento) {
        return elemento * 2;
    });
    return arrayduplicado; 
}
*/


/*6*/
function dibujarTriangulo(numFilas) {
    for (let i = 0; i < numFilas; i++) {
        let espacios = ' '.repeat(numFilas - i - 1);
        let asteriscos = '*'.repeat(2 * i + 1);
        console.log(espacios + asteriscos);
    }
}

dibujarTriangulo(5);
