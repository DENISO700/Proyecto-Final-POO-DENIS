/////////////////////CONTROLADOR TIENDA////////////////////////////////

//Crea la vista en celdas de los productos
function CeldasTienda() {

    document.getElementById("celdas").innerHTML = "";

    for (let j = 0; j < 9; j++) {

        document.getElementById("celdas").innerHTML += `

        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="products-single fix">
            <div class="box-img-hover">

                <img src="images/img-pro-01.jpg" class="img-fluid" alt="Image">
                <div class="mask-icon">
                    <ul>

                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Favoritos" ><i class="far fa-heart"></i></a></li>
                    </ul>
                    <a class="cart" href="#">Agregar al Carrito</a>
                </div>
            </div>
            <div class="why-text">
                <h4>Lorem ipsum dolor sit amet</h4>
                <h5> $9.79</h5>
            </div>
        </div>
    </div>
        
        
        
        `;


    }



}

//Celdas();

////////////////////////////////////////////////////////////////////


//Crea la vista en filas de los productos
function listaTienda() {

    document.getElementById("list-view").innerHTML = "";

    for (let j = 0; j < 9; j++) {

        document.getElementById("list-view").innerHTML += `

        <div class="list-view-box">

        <div class="row">

            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">

                <div class="products-single fix">

                    <div class="box-img-hover">

                        <img src="images/img-pro-03.jpg" class="img-fluid" alt="Image">
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
                    <h5> <del>$ 60.00</del> $40.79</h5>
                    <p>Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec, iaculis ultrices ante. Integer vitae suscipit nisi. Morbi dignissim risus sit amet orci porta, eget aliquam purus
                        sollicitudin. Cras eu metus felis. Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet eros. Donec accumsan nisi purus, quis euismod ex volutpat in. Vestibulum eleifend eros ac lobortis aliquet.
                        Suspendisse at ipsum vel lacus vehicula blandit et sollicitudin quam. Praesent vulputate semper libero pulvinar consequat. Etiam ut placerat lectus.</p>
                    <a class="btn hvr-hover" href="#">Agregar al Carrito</a>
                </div>
            </div>

        </div>

    </div>
        
        
        `;


    }



}

//lista();

/////////////////////////////////////////////////////////////////////////

//Funcion que muestra las categorias


function MenuTienda() {


    document.getElementById("list-group-men").innerHTML = ``;

    for (let l = 0; l < 3; l++) {
        document.getElementById("list-group-men").innerHTML +=
            `
            <div class="list-group-collapse sub-men">
            <a class="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Electronicos<small class="text-muted">(100)</small>
        </a>

            <div class="collapse show" id="sub-men1" data-parent="#list-group-men">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">Moviles<small class="text-muted">(50)</small></a>
                    <a href="#" class="list-group-item list-group-item-action">Laptos <small class="text-muted">(10)</small></a>
                    <a href="#" class="list-group-item list-group-item-action">Memorias<small class="text-muted">(10)</small></a>
                    <a href="#" class="list-group-item list-group-item-action">Mini Componentes <small class="text-muted">(10)</small></a>
                    <a href="#" class="list-group-item list-group-item-action">Accesorios <small class="text-muted">(20)</small></a>
                </div>
            </div>
        </div>
        
        
        `;

    }

}

//Menu();


////////////////////////////////////////////////////////////////////////////

//Funcion que muestra los comentarios

function ComentariosTienda() {

    document.getElementById("comentarios").innerHTML = ``;

    for (let a = 0; a < 9; a++) {

        document.getElementById("comentarios").innerHTML +=
            `
            <div class="media mb-3">
            <div class="mr-2">
                <img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Generic placeholder image">
            </div>
            <div class="media-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                    natus.
                </p>
                <small class="text-muted">Posted by Anonymous on 3/1/18</small>
            </div>
        </div>

        <hr>
    
    `;


    }

    document.getElementById("comentarios").innerHTML += ` <a href="#" class="btn hvr-hover">Comentar</a>`;

}

//Comentarios();