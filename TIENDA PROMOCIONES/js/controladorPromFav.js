///////CONTROLADOR EMPRESAS FAVORITAS////////////////////////

function PromFav() {

    document.getElementById("PromFav").innerHTML = ``;

    for (let c = 0; c < 9; c++) {

        document.getElementById("PromFav").innerHTML +=
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
                                        <p>$ 80.0</p>
                                    </td>
                                    <td class="quantity-box">San Pedro Sula</td>


                                </tr>
    
    
    `;


    }

}

PromFav();