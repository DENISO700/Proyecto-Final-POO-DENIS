//FUNCIONES LOGIN USUARIO

function Admin() {
    var temp = document.getElementById('correo').value;
    var temp2 = document.getElementById('contraseña').value;

    for (let index = 0; index < usuarios.length; index++) {

        if (temp == "admin" && temp2 == "1234") {
            location.href = 'SuperAdministrador.html';

            break;
        } else if (temp == usuarios[index].nombreUsuario && temp2 == usuarios[index].contraseña) {
            location.href = 'my-account.html';
            alert(index);
            break;

        } else if (temp != usuarios[index].nombreUsuario && temp2 != usuarios[index].contraseña) {
            alert("Datos Incorrectos");

            break;
        }




    }


}

///////////////////////////////////////////////////////////////////