/////////////////////////CONTROLADOR EMPRESAS////////////////////////////

function Celdas() {

    document.getElementById("celdas").innerHTML = "";

    for (let j = 0; j < 9; j++) {

        document.getElementById("celdas").innerHTML += `

        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="products-single fix">
            <div class="box-img-hover">
                <div class="type-lb">

                </div>
                <img src="/images/log-placeholder.png" class="img-fluid" alt="Image">
                <div class="mask-icon">
                    <ul>

                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Favoritos"><i class="far fa-heart"></i></a></li>
                    </ul>
                    <a class="cart" href="#">Ver Sucursales</a>
                </div>
            </div>
            <div class="why-text">
                <h4>Lorem ipsum dolor sit amet</h4>

            </div>
        </div>
    </div>
        
        
        `;


    }



}

Celdas();

////////////////////////////////////////////////////////////////////


//Crea la vista en filas de las empresas
function lista() {

    document.getElementById("list-view").innerHTML = "";

    for (let j = 0; j < 9; j++) {

        document.getElementById("list-view").innerHTML += `

        <div class="list-view-box">

                                          <div class="row">

                                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div class="products-single fix">
                                                    <div class="box-img-hover">

                                                        <img src="/images/log-placeholder.png" class="img-fluid" alt="Image">
                                                        <div class="mask-icon">
                                                            <ul>


                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Favoritos"><i class="far fa-heart"></i></a></li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                <div class="why-text full-width">
                                                    <h4>Lorem ipsum dolor sit amet</h4>

                                                    <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                                                        sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                                                        Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                                                    <a class="btn hvr-hover" href="#">Ver Sucursales</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
        
        
        `;


    }



}

lista();