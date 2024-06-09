
let reservas = [];


function agregarReserva(nombre, fecha) {
    let nuevaReserva = { nombre: nombre, fecha: fecha };
    reservas.push(nuevaReserva);
    console.log("Reserva añadida: " + nombre + ", Fecha: " + fecha);
    alert("Hemos realizado tu reserva.");
}

function mostrarReservas() {
    console.log("Todas las reservas:");
    let reservasTexto = "Todas las reservas:\n";
    for (let i = 0; i < reservas.length; i++) {
        let reserva = "Nombre: " + reservas[i].nombre + ", Fecha: " + reservas[i].fecha;
        console.log(reserva);
        reservasTexto += reserva + "\n";
    }
    alert(reservasTexto); 
}

function hacerReserva() {
    let nombre = prompt("Ingrese su nombre:");
    let fecha = prompt("Ingrese la fecha de la reserva (YYYY-MM-DD):");

    if (nombre && fecha) {
        agregarReserva(nombre, fecha);
    } else {
        console.log("Error: Debe completar todos los campos.");
    }
}

function sistemaDeReservas() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt("Seleccione una opción:\n1. Hacer una reserva\n2. Ver todas las reservas\n3. Salir");

        if (opcion === '1') {
            hacerReserva();
        } else if (opcion === '2') {
            mostrarReservas();
        } else if (opcion === '3') {
            continuar = false;
            console.log("Saliendo del sistema de reservas.");
        } else {
            console.log("Opción no válida. Por favor, seleccione 1, 2 o 3.");
        }
    }
}

sistemaDeReservas();
