//////////////////////////////CONTROLADOR CARRITO////////////////////

//Funcion para generar la orden

function Carrito() {

    document.getElementById("cuerpo").innerHTML = ``;

    for (let c = 0; c < 9; c++) {

        document.getElementById("cuerpo").innerHTML +=
            `
    
            <tr>
            <td class="thumbnail-img">
                <a href="#">
                    <img class="img-fluid" src="images/img-pro-03.jpg" alt="" />
                </a>
            </td>
            <td class="name-pr">
                <a href="#">
            Lorem ipsum dolor sit amet
        </a>
            </td>
            <td class="price-pr">
                <p>$ 30.0</p>
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

//Carrito();