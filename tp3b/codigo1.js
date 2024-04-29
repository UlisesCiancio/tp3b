var multiplicador = parseInt(prompt("Ingrese un número entero."));
var numero2 = parseInt(prompt("Ingrese un segundo número entero."));


if (multiplicador < numero2 ) {

    for( multiplicador=multiplicador ;multiplicador<=numero2 ;multiplicador++){
        console.log("Tabla de multiplicar del",multiplicador);
    
        for(let multiplicado=1 ;multiplicado<=10 ;multiplicado++){
            console.log(multiplicador,"x",multiplicado,"=",multiplicador*multiplicado);
        }
    }
}
else {

    for (numero2 = numero2; numero2 <= multiplicador; numero2++) {
        console.log("Tabla de multiplicar del", numero2);

        for (let multiplicado = 1; multiplicado <= 10; multiplicado++) {
            console.log(numero2, "x", multiplicado, "=", numero2 * multiplicador);
        }
    }

}
