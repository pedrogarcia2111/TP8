/*1*/
/*
function calcularEdadYMostrar(
) {
    const nombre = prompt("¿Cuál es tu nombre?");
    const fecha = prompt("¿Tu fecha de nacimiento? (YYYY-MM-DD)");
    const edad = CalculadoraEdad(fecha);
    const mensaje = "Hola " + nombre + ", Tenes " + edad + " años."
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = mensaje; 
}
calcularEdadYMostrar()
*/

/*2*/
/*
function BuscandoFruta() {
    const frutabuscada = prompt("¿Que fruta busca?");
    const frutas = TirandoFruta();
    const resultado = document.getElementById("resultado");

    const frutaEncontrada = frutas.find(fruta => fruta === frutabuscada);

    resultado.textContent = frutaEncontrada ? `Sí, tenemos ${frutabuscada}!` : `No, no tenemos ${frutabuscada}!`;
}
BuscandoFruta()
*/

/*4*/
/*
for (let clave in ciudad) {
    console.log(`${clave}: ${ciudad[clave]}`);
}
*/

/*5*/

/*
function DobleNumero() {
    const numeros = [1, 4, 5, 6, 9, 10, 20];
    const duplicados = Dobledeelementos(numeros); 
    console.log(duplicados); 
}

DobleNumero();
*/

/*7*/

/*8*/
// Ejercicio 8: Reemplazar Palabras
function reemplazarPalabra() {
    const cadena = prompt("Ingresa una cadena de texto:");
    const palabraOriginal = prompt("Ingresa la palabra a reemplazar:");
    const palabraReemplazo = prompt("Ingresa la palabra de reemplazo:");
    const resultado = reemplazarEnCadena(cadena, palabraOriginal, palabraReemplazo);
    document.getElementById('resultado').innerHTML = resultado;
}

// Ejecutar la función al hacer clic en un botón
document.getElementById('btnReemplazar').onclick = reemplazarPalabra;
