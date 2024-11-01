let operacionesBancarias = [20, -10, 50, -5, -30, 10];



function calculateBalances(arreglo){
    let datosBancarios = {
        saldoTotalDepositos : 0,
        saldoActualRetiros : 0,
        saldoActualCuenta : 0
    }

    arreglo.forEach(element => {
        if(element > 0){
            datosBancarios.saldoTotalDepositos += element;
            datosBancarios.saldoActualCuenta += element;
        }else{
            datosBancarios.saldoActualRetiros += element;
            datosBancarios.saldoActualCuenta += element;
        }
    });

    return datosBancarios;
}

function bankBalance(nombre, apellido, arreglo){
    let datosBancarios = calculateBalances(arreglo);
    datosBancarios.nombre = nombre;
    datosBancarios.apellido = apellido;
    return `Estimad@ ${datosBancarios.nombre} ${datosBancarios.apellido}:
    El monto total de los depósitos es de: ${datosBancarios.saldoTotalDepositos}
    El monto total de los retiros es de: $${-(datosBancarios.saldoActualRetiros)}
    Por lo tanto, su saldo actual en la cuenta es de: $${datosBancarios.saldoActualCuenta}
    `;
}

console.log(calculateBalances(operacionesBancarias));
console.log(bankBalance("Juan", "Farías", operacionesBancarias));

module.exports = bankBalance;