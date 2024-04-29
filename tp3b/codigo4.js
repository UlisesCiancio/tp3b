var valor;
var cond;
while(cond=true){
    valor=parseInt(prompt("Ingrese el valor del vehiculo."));
    cond=parseInt(prompt("Ingrese la categoria del vehiculo(1, 2 o 3)."));
    switch(cond){
        case 1:
            cond=valor*0.10;
            break;
        case 2:
            cond=valor*0.07;
            break;
        case 3:
            cond=valor*0.05;
            break;
        case 4:
            cond=false;
            break;
    }
}