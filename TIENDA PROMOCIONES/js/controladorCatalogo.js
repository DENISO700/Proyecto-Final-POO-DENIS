///////////FUNCIONES DE CATALOGO/////////////////////////////////////

function Catalogo() {

    document.getElementById("catalogo").innerHTML = "";

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
        <div class="col-lg-3 col-md-6 special-grid electronicos">
        <div class="products-single fix">
            <div class="box-img-hover">
                <img src="images/gallery-img-01.jpg" class="img-fluid" alt="Image">
                <div class="mask-icon">
                    <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Ver"><i class="fas fa-eye"></i></a></li>

                        <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>


        `;


    }

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
            <div class="col-lg-3 col-md-6 special-grid mobiliario">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <img src="images/gallery-img-04.jpg" class="img-fluid" alt="Image">
                    <div class="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Ver"><i class="fas fa-eye"></i></a></li>

                            <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        `;


    }


    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
            <div class="col-lg-3 col-md-6 special-grid vestimenta">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            <img src="images/gallery-img-08.jpg" class="img-fluid" alt="Image">
                            <div class="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Ver"><i class="fas fa-eye"></i></a></li>

                                    <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

        `;


    }

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
            <div class="col-lg-3 col-md-6 special-grid anime">
            <div class="products-single fix">
                <div class="box-img-hover">
                    <img src="images/gallery-img-10.jpg" class="img-fluid" alt="Image">
                    <div class="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Ver"><i class="fas fa-eye"></i></a></li>

                            <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        `;


    }

}

Catalogo();