var precioSencilla = 20;
var precioDoble = 25;
var precioTriple = 28;
var cargoTarjeta = 0.05; 


const cantidadHamburguesas = 3; 

const tipoHamburguesa = 'D'; 

let costoTotal;

switch (tipoHamburguesa) {
    case 'S':
        costoTotal = precioSencilla * cantidadHamburguesas;
        break;
    case 'D':
        costoTotal = precioDoble * cantidadHamburguesas;
        break;
    case 'T':
        costoTotal = precioTriple * cantidadHamburguesas;
        break;
    default:
        console.log('Tipo de hamburguesa no válido.');
        break;
}
const formaDePago = 'tarjeta_crédito';
if (formaDePago === 'tarjeta_crédito') {
    costoTotal *= (1 + cargoTarjeta);
}

console.log(`El cliente debe pagar $${costoTotal.toFixed(2)}.`);