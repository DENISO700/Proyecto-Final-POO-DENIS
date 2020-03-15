//////CONTROLADOR CARRITO////////

//Funcion que cargara los datso del pedido

function pedido() {

    document.getElementById("pedido").innerHTML = ``;

    for (let p = 0; p < 6; p++) {

        document.getElementById("pedido").innerHTML +=
            `
            <div class="media mb-2 border-bottom">

            <div class="media-body"> <a href="#"> Lorem ipsum dolor sit amet</a>
                <div class="small text-muted">Precio: $80.00 <span class="mx-2">|</span> Ctd: 1 <span class="mx-2">|</span> Subtotal: $80.00</div>
            </div>
        </div>
        
        `;


    }

}

pedido();



/////////////////////////////////////////////////////////////////////////////////

//Funcion que carga los tipos de envio

function envio() {

    document.getElementById("envio").innerHTML = ``;

    for (let p = 0; p < 4; p++) {

        document.getElementById("envio").innerHTML +=
            `
            <div class="custom-control custom-radio">
                 <input id="shippingOption3" name="shipping-option" class="custom-control-input" type="radio">
                 <label class="custom-control-label" for="shippingOption3">Siguiente dia Habil</label> <span class="float-right font-weight-bold">$20.00</span>
            </div>
        
        `;


    }

}

envio();