var categorias;
var localStorage = window.localStorage;



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



///////////////////////////////////////////////////////////////////////////

if (localStorage.getItem("empresa") == null) {

    empresas = [

            {
                nombreEmpresa: "Edmundo S.A",
                logo: "/images/LogosEmpresas/logo1.jpg",
                correo: "damarissevilla2005@gmail.com",
                contraseña: "cisco2019",
                descripcion: "Lorem ipsum dolor . . . ",
                mision: "Lorem ipsum dolor . . .",
                vision: "Lorem ipsum dolor . . .",
                telefono: "22465413",
                pais: "Honduras",
                ciudad: "Tegucigalpa",

                redesSociales: [

                    {
                        nombreRed1: "Facebook",
                        url1: "www.facebook.com",
                        banner1: "/images/banner-01.jpg",


                        nombreRed2: "Instagram",
                        url2: "www.instagram.com",
                        banner2: "/images/banner-02.jpg",


                        nombreRed3: "Twitter",
                        url3: "www.twitter.com",
                        banner3: "/images/banner-03.jpg",

                    },

                ],

                direccion: "Col. La Cañada",
                latitud: "22",
                longitud: "45",

                formaDePago: "Credito",
                nombrePropietario: "Denis Ordoñez",
                numeroTarjeta: "505-405-5214-4512",
                vencimiento: "12/22",
                CCV: "180",
                plan: "ULTIMATE",

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

                        nombre: "",
                        precio: "$ 40.00",
                        porcentaje: "",
                        descripcion: "Lorem ipsum dolor . . . ",
                        inicio: "",
                        final: "",

                        sucursales: [


                            {
                                direccion: "",
                                latitud: "",
                                longitud: "",
                            }

                        ],
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


        localStorage.setItem("empresas", JSON.stringify(empresas));
} else {
    empresas = JSON.parse(localStorage.getItem('empresas'));
}

//////////////////////////////////////////////////////////////


function cargarCategorias() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("categorias").innerHTML +=

            `  <option value="${categorias[i]}">${categorias[i]}</option>`;


    }

}

cargarCategorias();



/////////////////////////////////

function nuevoProducto() {

    let producto = {
        categoria: document.getElementById('categorias').value,
        nombre: document.getElementById('nombreProducto').value,
        precio: document.getElementById('precioproducto').value,
        cantida: document.getElementById('cantidad').value,
        descripcion: document.getElementById('descripcion').value,
        ubicacion: [{
            direccion: document.getElementById('direccion').value,
            latitud: document.getElementById('latitud').value,
            longitud: document.getElementById('longitud').value,
        }],
        imagenes: [
            document.getElementById('foto').value,
            document.getElementById('foto').value,
            document.getElementById('foto').value,
        ],

        Comentarios: []
    };
    empresas[0].productos.push(producto);
    localStorage.setItem('empresas', JSON.stringify(empresas));

}