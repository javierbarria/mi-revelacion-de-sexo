document.getElementById('invitationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe y recargue la página.

    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    const genderGuess = document.getElementById('genderGuess').value;

    // Verifica si el visitante cree que será niño o niña y muestra el mensaje
    let message = `¡Gracias, ${name}! `;
    if (attendance === 'yes') {
        message += '¡Estamos emocionados de que asistirás a la revelación de sexo! ';
    } else {
        message += 'Lamentamos que no puedas asistir, pero estaremos encantados de contar contigo en el futuro. ';
    }

    message += `Crees que será un(a) ${genderGuess === 'boy' ? 'niño' : 'niña'}.`;

    // Muestra el mensaje
    const resultBox = document.getElementById('result');
    resultBox.textContent = message;

    // Agrega una clase para dar color según la respuesta
    if (attendance === 'yes') {
        resultBox.classList.add('success');
        resultBox.classList.remove('fail');
    } else {
        resultBox.classList.add('fail');
        resultBox.classList.remove('success');
    }

    // Limpiar el formulario después de enviar
    document.getElementById('invitationForm').reset();
});
