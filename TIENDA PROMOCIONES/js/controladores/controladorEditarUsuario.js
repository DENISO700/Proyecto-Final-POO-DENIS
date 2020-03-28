/////CONTROLADOR EDITAR USUARIO////////

function editarUsuario(u) {

    document.getElementById("nombre").value = usuarios[u].nombreUsuario
    document.getElementById("contraseña").value = usuarios[u].contraseña
    document.getElementById("email").value = usuarios[u].correo
    document.getElementById("telefono").value = usuarios[u].telefono


}