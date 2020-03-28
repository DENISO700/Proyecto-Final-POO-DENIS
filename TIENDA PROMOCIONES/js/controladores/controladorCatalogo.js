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
                        nombreSucursal: "Variedades Darwin",
                        correo: "example123@gmail.com",
                        telefono: "2245-5689",
                        pais: "Honduras",
                        ciudad: "San Pedro Sula",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDarwin",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: "45",
                        longitud: "54",

                    },

                    {
                        nombreSucursal: "Variedades Isaac",
                        correo: "example1243@gmail.com",
                        telefono: "2245-5656",
                        pais: "Honduras",
                        ciudad: "Tegucigalpa",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesIsaac",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Popular",
                        latitud: "55",
                        longitud: "64",

                    },

                    {
                        nombreSucursal: "Variedades Denis",
                        correo: "example12345@gmail.com",
                        telefono: "2245-5646",
                        pais: "Honduras",
                        ciudad: "Comayagua",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDenis",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Cañada",
                        latitud: "65",
                        longitud: "74",

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: "$ 40.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
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
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: "$ 400.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
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
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: "$ 200.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
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
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: "$ 40.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
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

                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor . . . ",
                        inicio: "12/12/2020",
                        final: "11/11/2021",

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "/images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: "45",
                                longitud: "54",

                            },

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
                        nombreSucursal: "Variedades Darwin",
                        correo: "example123@gmail.com",
                        telefono: "2245-5689",
                        pais: "Honduras",
                        ciudad: "San Pedro Sula",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDarwin",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: "45",
                        longitud: "54",

                    },

                    {
                        nombreSucursal: "Variedades Isaac",
                        correo: "example1243@gmail.com",
                        telefono: "2245-5656",
                        pais: "Honduras",
                        ciudad: "Tegucigalpa",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesIsaac",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Popular",
                        latitud: "55",
                        longitud: "64",

                    },

                    {
                        nombreSucursal: "Variedades Denis",
                        correo: "example12345@gmail.com",
                        telefono: "2245-5646",
                        pais: "Honduras",
                        ciudad: "Comayagua",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDenis",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Cañada",
                        latitud: "65",
                        longitud: "74",

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: "$ 40.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
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
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: "$ 400.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
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
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: "$ 200.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
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
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: "$ 40.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,

                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
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

                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor . . . ",
                        inicio: "12/12/2020",
                        final: "11/11/2021",

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "/images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: "45",
                                longitud: "54",

                            },

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
                        nombreSucursal: "Variedades Darwin",
                        correo: "example123@gmail.com",
                        telefono: "2245-5689",
                        pais: "Honduras",
                        ciudad: "San Pedro Sula",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDarwin",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: "45",
                        longitud: "54",

                    },

                    {
                        nombreSucursal: "Variedades Isaac",
                        correo: "example1243@gmail.com",
                        telefono: "2245-5656",
                        pais: "Honduras",
                        ciudad: "Tegucigalpa",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesIsaac",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Popular",
                        latitud: "55",
                        longitud: "64",

                    },

                    {
                        nombreSucursal: "Variedades Denis",
                        correo: "example12345@gmail.com",
                        telefono: "2245-5646",
                        pais: "Honduras",
                        ciudad: "Comayagua",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDenis",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Cañada",
                        latitud: "65",
                        longitud: "74",

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: "$ 40.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
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
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: "$ 400.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
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
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: "$ 200.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
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
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: "$ 40.00",
                        cantida: "24",
                        descripcion: "Lorem ipsum dolor . . . ",
                        calificacion: 2,
                        ubicacion: [{
                            direccion: "Col. La Cañada",
                            latitud: "25",
                            longitud: "45",
                        }],
                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
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

                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor . . . ",
                        inicio: "12/12/2020",
                        final: "11/11/2021",

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "/images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: "45",
                                longitud: "54",

                            },

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




//////////FUNCIONES DE CATALOGO/////////////////////////////////////

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

    //////////////////////////////////////////////

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
    <div class="col-lg-3 col-md-6 special-grid Anime">
    <div class="products-single fix">
        <div class="box-img-hover">
            <img src="images/gallery-img-12.jpg" class="img-fluid w-100" >
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

    ////////////////////////////////////////////


    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
        <div class="col-lg-3 col-md-6 special-grid Mobiliario">
        <div class="products-single fix">
            <div class="box-img-hover">
                <img src="images/gallery-img-05.jpg" class="img-fluid w-100" >
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

    ////////////////////////////////////////////////////////

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
        <div class="col-lg-3 col-md-6 special-grid Vestimenta">
        <div class="products-single fix">
            <div class="box-img-hover">
                <img src="images/gallery-img-09.jpg" class="img-fluid w-100" >
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

////////////////////////////////////////////////////////////////////
//Funcion llenar Group Button
function generarButtons() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("filtro").innerHTML +=

            `  <button data-filter=".${categorias[i]}">${categorias[i]}</button>`;


    }
}

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