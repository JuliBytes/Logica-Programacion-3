// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}


// Solicitar que ingrese un número
function obtenerNumero() {
    let numero;
    do {
        numero = prompt("Ingresa un número: ");
        numero = parseFloat(numero);
        if (isNaN(numero)) {
            alert("Error: El número no es válido. ");
        }
    } while (isNaN(numero));
    return numero;
}


// Imprime el resultado
function main() {
    const numero = obtenerNumero();
    const factorial = calcularFactorial(numero);
    console.log(`El resultado factorial de ${numero} es: ${factorial}`);
}

main();

