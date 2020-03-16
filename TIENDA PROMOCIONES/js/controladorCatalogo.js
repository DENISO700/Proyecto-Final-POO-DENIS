var empresa, categorias;
var localStorage = window.localStorage;


///////////////////////////////////////////////////////////////////////////////
//Verifica si hay datos en el local storage JSON empresas

if (localStorage.getItem("categorias") == null) {

    categorias = [

            "Electronicos",
            "Anime",
            "Mobiliario",
            "Vestimenta",


        ],


        localStorage.setItem("categorias", JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorage.getItem('categorias'));
}

////////////////////////////////////////////////////////////////////////////
//Verifica si hay datos en el local storage JSON empresas

if (localStorage.getItem("empresa") == null) {

    empresa = [

            {
                nombreEmpresa: "Edmundo S.A",
                logo: "",
                correo: "",
                contraseña: "",
                descripcion: "",
                mision: "",
                vision: "",
                telefono: "",
                pais: "",
                ciudad: "",
                redesSociales: [

                    {
                        nombreRed: "",
                        url: "",
                        banner: "",

                    },
                    {
                        nombreRed: "",
                        url: "",
                        banner: "",

                    },
                    {
                        nombreRed: "",
                        url: "",
                        banner: "",

                    },

                ],
                direccion: "",
                latitud: "",
                longitud: "",

                formaDePago: "",
                nombrePropietario: "",
                numeroTarjeta: "",
                vencimiento: "",
                CCV: "",
                plan: "",
                sucursales: [

                    {
                        nombreSucursal: "",
                        correo: "",
                        telefono: "",
                        pais: "",
                        ciudad: "",
                        redSocial: "",
                        url: "",
                        banner: "",
                        direccion: "",
                        latitud: "",
                        longitud: "",

                    }
                ],

                productos: [

                    {
                        categoria: "Electrodomesticos",
                        nombre: "",
                        precio: "$ 40.00",
                        cantida: "",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "",
                            latitud: "",
                            longitud: "",
                        }],
                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

                        Comentarios: [

                            {
                                usuario: "Denis Ordoñez",
                                calificacion: 3,
                                contenido: "Lorem ipsum dolor . . . "
                            },
                            {
                                usuario: "Darwin Rodas",
                                calificacion: 3,
                                contenido: "Lorem ipsum dolor . . . "
                            },
                            {
                                usuario: "Isaac Ramirez",
                                calificacion: 4,
                                contenido: "Lorem ipsum dolor . . . "
                            }

                        ]

                    },
                ],

                promociones: [

                    {
                        categoria: "Electrodomesticos",
                        nombre: "",
                        precio: "$ 40.00",
                        cantida: "",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "",
                            latitud: "",
                            longitud: "",
                        }],
                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

                        Comentarios: [

                            {
                                usuario: "Denis Ordoñez",
                                calificacion: 3,
                                contenido: "Lorem ipsum dolor . . . "
                            },
                            {
                                usuario: "Darwin Rodas",
                                calificacion: 3,
                                contenido: "Lorem ipsum dolor . . . "
                            },
                            {
                                usuario: "Isaac Ramirez",
                                calificacion: 4,
                                contenido: "Lorem ipsum dolor . . . "
                            }

                        ]
                    }

                ]

            },


        ],


        localStorage.setItem("empresa", JSON.stringify(empresa));
} else {
    empresa = JSON.parse(localStorage.getItem('empresa'));
}



////////////////////////////////////////////////////////////////////
//Funcion llenar Group Button
function generarButtons() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("filtro").innerHTML +=

            `  <button data-filter=".${categorias[i]}">${categorias[i]}</button>`;


    }
}
generarButtons();


///////////FUNCIONES DE CATALOGO/////////////////////////////////////

function Catalogo() {

    document.getElementById("catalogo").innerHTML = "";

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
        <div class="col-lg-3 col-md-6 special-grid Electronicos">
        <div class="products-single fix">
            <div class="box-img-hover">
                <img src="images/gallery-img-01.jpg" class="img-fluid w-100" >
                <div class="mask-icon">
                    <ul>
                        <li><a href="#"  data-placement="right" title="Ver" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal();Carrusel();Comentarios();" ><i class="fas fa-eye"></i></a></li>

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



///////////////////////////////////////////////////////////////////////

//Funcion Modal

//generar la modal
function Modal() {


    document.getElementById("cuerpo").innerHTML =

        `      <div class="row" id="datos">
    
        <div class="col-4">
            <img src="/images/banner-01.jpg" class="w-100" alt="">
        </div>
    
        <div class="col-6">
            <h5>Nombre Categoria</h5>
            <h6>Nombre Producto</h6>
            <p>lorem iptsum dolor . . . </p>
        </div>
    
        <hr>
    
        <div class="col-12">
        <p class="text-center"><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i></p>
        </div>
    
        <hr>
    
    </div>
            
        <div class="modal-footer ml-auto">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      
        </div>
    
    
    </div>`;




}



////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel() {


    document.getElementById("img").innerHTML = `      
    <div class="carousel-item active">
        <img src="images/gallery-img-02.jpg" class="d-block w-100" >
    </div>
  

`


    for (let i = 1; i < 4; i++) {

        document.getElementById("img").innerHTML += `      
        <div class="carousel-item ">
            <img src="images/gallery-img-02.jpg" class="d-block w-100" >
        </div>
      
    
  `
    }

}




//////////////////////////////////////////////////////////////////////////


//Funcion que carga los comentarios
function Comentarios() {
    document.getElementById("comentarios").innerHTML = "";

    for (let i = 0; i < 4; i++) {

        document.getElementById("comentarios").innerHTML += `   <div class="row">
    
        
    <div class="col-2 my-2 ">
        <img src="images/user.png" class="w-100 img-thumbnail text-center m-auto">
    </div>

    <div class="col-10 my-2 text-rigth">
        <h6>Nombre Usuario</h6>
        <p>Lorem iptsum dolor . . . . </p>
    </div>
</div> `
    }

}

//////////////////////////////////////////////////////////


function generarSelect() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("cat").innerHTML +=

            `  <option value="${i}">${categorias[i].nombreCategoria}</option>`;


    }
}


//guardar Indices para acceder a los datos correxctos para la modal
function guardarIndices(ic, ia) {
    indiceCategoria = ic;
    indiceAplicacion = ia;
}