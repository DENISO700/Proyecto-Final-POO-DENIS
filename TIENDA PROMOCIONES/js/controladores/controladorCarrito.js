//////////////////////////////CONTROLADOR CARRITO////////////////////

//Funcion para generar la orden

function Carrito() {

    document.getElementById("cuerpo").innerHTML = ``;


    for (let m = 0; m < usuarios[0].carrito.length; m++) {



        document.getElementById("cuerpo").innerHTML +=
            `
        
                <tr>
                <td class="thumbnail-img">
                    <a href="#">
                        <img class="img-fluid" src="${usuarios[0].carrito[m].imagenes[0]}"  />
                    </a>
                </td>
                <td class="name-pr">
                    <a href="#">
                    ${usuarios[0].carrito[m].nombre}
            </a>
                </td>
                <td class="price-pr">
                    <p> $ ${usuarios[0].carrito[m].precio}</p>
                </td>
                <td class="quantity-box"><input type="number" size="4" value="1" min="0" step="1" class="c-input-text qty text"></td>
                <td class="total-pr">
                    <p>$ 80.0</p>
                </td>
                <td class="remove-pr">
                    <a href="#">
                        <i class="fas fa-times"></i>
                    </a>
                </td>
            </tr>
        
        
        `;




    }



}