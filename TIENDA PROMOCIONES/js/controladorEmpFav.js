//////////CONTROLADOR EMPRESAS FAVORITAS//////////////////////////

//Funcion para generar laS Empresas Favoritas

function EmpFav() {

    document.getElementById("EmpFav").innerHTML = ``;

    for (let c = 0; c < 9; c++) {

        document.getElementById("EmpFav").innerHTML +=
            `
            <tr>
            <td class="thumbnail-img">
                <a href="#">
                    <img class="img-fluid" src="/images/log-placeholder.png" alt="" />
                </a>
            </td>
            <td class="name-pr">
                <a href="#">
            Lorem ipsum dolor sit amet
        </a>
            </td>
            <td class="price-pr">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quia.</p>
            </td>
            <td class="quantity-box">Tegucigalpa</td>


        </tr>
    
    
    `;


    }

}

EmpFav();