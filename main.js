document.addEventListener('DOMContentLoaded', () => {
    // Variables y objetos
    const formularioReserva = document.getElementById('bookingForm');
    const mensajeConfirmacion = document.getElementById('Mensajeconfirmacion');
    const detallesConfirmacion = document.getElementById('Detallesconfirmacion');
    const listaReservas = document.getElementById('Listareservacion');

    const habitaciones = [
        { tipo: 'individual', nombre: 'Individual' },
        { tipo: 'doble', nombre: 'Doble' },
        { tipo: 'suite', nombre: 'Suite' }
    ];

    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    // Funciones
    const agregarReserva = (reserva) => {
        reservas.push(reserva);
        localStorage.setItem('reservas', JSON.stringify(reservas));
    };

    const eliminarReserva = (index) => {
        reservas.splice(index, 1);
        localStorage.setItem('reservas', JSON.stringify(reservas));
        mostrarReservas();
    };

    const mostrarConfirmacion = (reserva) => {
        const { nombre, email, checkin, checkout, tipoHabitacion } = reserva;
        const habitacion = habitaciones.find(h => h.tipo === tipoHabitacion).nombre;

        detallesConfirmacion.innerHTML = `
            Nombre: ${nombre}<br>
            Correo Electrónico: ${email}<br>
            Fecha de Entrada: ${checkin}<br>
            Fecha de Salida: ${checkout}<br>
            Tipo de Habitación: ${habitacion}
        `;
        mensajeConfirmacion.style.display = 'block';
    };

    const mostrarReservas = () => {
        listaReservas.innerHTML = '';
        reservas.forEach((reserva, index) => {
            const item = document.createElement('li');
            item.classList.add('list-group-item');
            item.innerHTML = `
                <strong>${reserva.nombre}</strong> - ${reserva.checkin} a ${reserva.checkout} - ${reserva.tipoHabitacion}
                <button class="btn boton btn-sm float-end" onclick="eliminarReserva(${index})">Eliminar</button>
            `;
            listaReservas.appendChild(item);
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const tipoHabitacion = document.getElementById('roomType').value;

        // Validación básica
        if (!nombre || !email || !checkin || !checkout || !tipoHabitacion) {
            alert('Por favor completa todos los campos');
            return;
        }

        const reserva = { nombre, email, checkin, checkout, tipoHabitacion };
        agregarReserva(reserva);
        mostrarConfirmacion(reserva);
        mostrarReservas();

        // Resetear el formulario
        formularioReserva.reset();
    };

    // Eventos
    formularioReserva.addEventListener('submit', manejarEnvio);
    mostrarReservas();

    // Exponer la función eliminarReserva al ámbito global para que funcione el onclick
    window.eliminarReserva = eliminarReserva;
});
