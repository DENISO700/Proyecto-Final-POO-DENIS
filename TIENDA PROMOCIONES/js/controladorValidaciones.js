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
//Validacion de emails, con colores 

function validarEmail(etiqueta) {
    console.log(etiqueta.value);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiqueta.value)) {
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    } else {
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error');
    }
}


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


////////////////////////////////////////////////////////////////
///////Validacion Email Simple//////////////////////

function emailValido() {

    valor = document.getElementById("campo").value;
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
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

///////////////////////////////////////////////////////////////
//VALIDAR NUMERO DE TELEFONO//////////////

function numeroValido() {

    valor = document.getElementById("campo").value;
    if (!(/^\d{9}$/.test(valor))) {
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