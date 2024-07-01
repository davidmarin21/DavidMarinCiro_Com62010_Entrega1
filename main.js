document.addEventListener('DOMContentLoaded', () => {
    const reserva = document.getElementById('reserva');
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    const confirmacionDetalles = document.getElementById('confirmacionDetalles');

    reserva.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const roomType = document.getElementById('roomType').value;

        const DetallesReserva = `
            Nombre: ${name}<br>
            Correo Electrónico: ${email}<br>
            Fecha de Entrada: ${checkin}<br>
            Fecha de Salida: ${checkout}<br>
            Tipo de Habitación: ${roomType}
        `;

        confirmacionDetalles.innerHTML = DetallesReserva;
        mensajeConfirmacion.style.display = 'block';

        // Resetear el formulario
        reserva.reset();
    });
});
