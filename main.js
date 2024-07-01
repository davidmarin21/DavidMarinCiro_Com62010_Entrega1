document.addEventListener('DOMContentLoaded', () => {
    const reserva = document.getElementById('reserva');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationDetails = document.getElementById('confirmationDetails');

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

        confirmationDetails.innerHTML = DetallesReserva;
        confirmationMessage.style.display = 'block';

        // Resetear el formulario
        reserva.reset();
    });
});
