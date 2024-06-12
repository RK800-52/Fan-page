function mostrarArticulo(elemento, modalId) {
    var modal = document.getElementById(modalId);
    var titulo = elemento.querySelector('h3').innerText;
    var contenido = elemento.querySelector('p').innerText;
    var imagenSrc = elemento.querySelector('img').src;
    var audioElement = elemento.querySelector('audio source');

    modal.querySelector('.modal-titulo').innerText = titulo;
    modal.querySelector('.modal-contenido').innerText = contenido;
    modal.querySelector('.modal-imagen').src = imagenSrc;

    if (audioElement) {
        var audioSrc = audioElement.src;
        var modalAudioSource = modal.querySelector('.modal-audio-source');
        var modalAudio = modal.querySelector('.modal-audio');

        if (modalAudioSource) {
            modalAudioSource.src = audioSrc;
            modalAudio.load(); // Recarga el elemento de audio
            modalAudio.style.display = 'block'; // Asegúrate de que el audio esté visible
        }
    } else {
        var modalAudio = modal.querySelector('.modal-audio');
        if (modalAudio) {
            modalAudio.style.display = 'none'; // Oculta el elemento de audio si no hay audio
        }
    }

    modal.style.display = 'block';
}

function cerrarModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}