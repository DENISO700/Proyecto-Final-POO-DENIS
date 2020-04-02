//CONTROLADOR DE VALIDACIONES//

function campoVacio1() {

    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else {
        Admin();
    }

}


///////////////////////////////////////////////////////

///////////////////////////////////////////////////
///Validacion solo acepte numeros//////////////////////

function soloNumros() {

    valor = document.getElementById("campo").value;
    if (isNaN(valor)) {
        return false;
    }

}


///////////////////////////////////////////////////
//Validacion Select List///////////////

function selectNoVacio() {

    indice = document.getElementById("opciones").selectedIndex;
    if (indice == null || indice == 0) {
        return false;
    }

}

///////////////////////////////////////////////////////////////////////
/////Validar una Fecha///////////////

function fechaValida() {

    var ano = document.getElementById("ano").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;

    valor = new Date(ano, mes, dia);

    if (!isNaN(valor)) {
        return false;
    }

}


///////////////////////////////////////////////////////////////////////////////

//VALIDAR IDENTIFICADOR UNICO /////

function idUnico() {
    valor = document.getElementById("campo").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (!(/^\d{8}[A-Z]$/.test(valor))) {
        return false;
    }

    if (valor.charAt(8) != letras[(valor.substring(0, 8)) % 23]) {
        return false;
    }

}


//////////////////////////////////////////////////////////////////////////
////////////////VALIDAR QUE UN CHECKBOX SEA SELECCIONADO /////

function validoCheckbox() {

    elemento = document.getElementById("campo");
    if (!elemento.checked) {
        return false;
    }

}


///////////////////////////////////////////////////////////////////////
//Validar radioButtons

function radioValido() {

    opciones = document.getElementsByName("opciones");

    var seleccionado = false;
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        return false;
    }

}

////////////////////////////////////////////////////



//VALIDACIONES DE REGISTRO USUARIO//

function validarUsuario() {

    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    valor3 = document.getElementById("telefono").value;
    valor4 = document.getElementById("user").value;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re2 = /^([0-9])$/;

    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else if (valor4.length > 10) {
        alert("Usuario Demasiado Largo");
        return false;
    } else if (valor2.length > 8 || valor2.length < 4) {
        alert("Contraseña debe tener entre 4-8 caracteres");
        return false;
    } else if (!(re.test(valor))) {
        alert("Correo No  tiene formato  Valido ");
        return false;
    } else if (re2.test(valor3)) {
        alert("Solo son permitidos Numeros en el campo Telefono ");
        return false;
    } else {
        alert("Datos Correctos");
        nuevoUsuario();
        return true
    }


}


//VALIDACIONES REGISTRO EMPRESAS

function validarEmpresa() {

    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    valor3 = document.getElementById("telefono").value;
    valor4 = document.getElementById("user").value;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re2 = /^([0-9])$/;

    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else if (valor4.length > 10) {
        alert("Usuario Demasiado Largo");
        return false;
    } else if (valor2.length > 8 || valor2.length < 4) {
        alert("Contraseña debe tener entre 4-8 caracteres");
        return false;
    } else if (!(re.test(valor))) {
        alert("Correo No  tiene formato  Valido ");
        return false;
    } else if (re2.test(valor3)) {
        alert("Solo son permitidos Numeros en el campo Telefono ");
        return false;
    } else {
        alert("Datos Correctos");
        nuevoUsuario();
        return true
    }


}