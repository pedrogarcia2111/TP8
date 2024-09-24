function CalculadoraEdad(edad, fecha){
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    edad = añoActual-fecha.year;
    return edad;
}