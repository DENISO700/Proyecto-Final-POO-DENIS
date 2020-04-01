var planes, empresas, categorias, usuarios;
var localStorage = window.localStorage;

//Verifica si hay datos en el local storage 

if (localStorage.getItem("planes") == null) {
    planes = [


        {
            nombrePlan: "Gratis",
            precio: "$ 0.00",
            promos: 10,
            almacenamiento: 2,
            soporte: true,
            centroDeAyuda: false,
            duracion: 1,
            panpallaPrincipal: false,



        },

        {
            nombrePlan: "Profesional",
            precio: "$ 15.00",


            promos: 20,
            almacenamiento: 10,
            soporte: true,
            centroDeAyuda: true,
            duracion: 12,
            panpallaPrincipal: false,



        },

        {
            nombrePlan: "ULTIMATE",
            precio: "$ 29.00",
            promos: 30,
            almacenamiento: 20,
            soporte: true,
            centroDeAyuda: true,
            duracion: 18,
            panpallaPrincipal: true


        },


    ];
    localStorage.setItem("planes", JSON.stringify(planes));
} else {
    planes = JSON.parse(localStorage.getItem('planes'));
}

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

//Verifica si hay datos en el local storage JSON usuarios

if (localStorage.getItem("usuarios") == null) {

    usuarios = [

            {
                nombreUsuario: "Denis",
                correo: "damarissevilla2005@gmail.com",
                contraseña: "cisco2019",
                telefono: "22465413",


                empresasFavoritas: [

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
                    }

                ],


                carrito: [

                    {
                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor  567. . . ",
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
                ],


                promocionesFavoritas: [

                    {

                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor  567. . . ",
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


                    }

                ]

            },

            {
                nombreUsuario: "Darwin",
                correo: "darwinRodas123@gmail.com",
                contraseña: "cisco2019",
                telefono: "22465413",


                empresasFavoritas: [

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
                    }

                ],


                carrito: [

                    {
                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor  567. . . ",
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
                ],


                promocionesFavoritas: [

                    {

                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor  567. . . ",
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


                    }

                ]

            },

            {
                nombreUsuario: "Damaris",
                correo: "damaris2005@gmail.com",
                contraseña: "cisco2019",
                telefono: "22465413",


                empresasFavoritas: [

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
                    }

                ],


                carrito: [

                    {
                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor  567. . . ",
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
                ],


                promocionesFavoritas: [

                    {

                        nombre: "Figura de Anime",
                        precio: "$ 30.00",
                        porcentaje: "0.5",
                        descripcion: "Lorem ipsum dolor  567. . . ",
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


                    }

                ]

            },



        ],


        localStorage.setItem("usuarios", JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

//////////////////////////////////////////////////////////////////////////

if (localStorage.getItem("empresas") == null) {

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
                        precio: 40.00,
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
                        precio: 400.00,
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
                        precio: 200.00,
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
                        precio: 40.00,
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

                        nombre: "Figura de Kimetsu no Yaiba",
                        precio: 30.00,
                        porcentaje: 0.5,
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
                            "images/gallery-img-11.jpg",
                            "images/gallery-img-11.jpg",
                            "images/gallery-img-11.jpg",
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

                        nombre: "Figura de Naruto",
                        precio: 50.00,
                        porcentaje: 0.3,
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
                    }


                ]

            },

            {
                nombreEmpresa: "Raymundo S.A",
                logo: "/images/LogosEmpresas/logo3.jpg",
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
                        precio: 40.00,
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
                        precio: 400.00,
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
                        precio: 200.00,
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
                        precio: 40.00,
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

                        nombre: "Telefono",
                        precio: 300.00,
                        porcentaje: 0.4,
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
                    },

                    {

                        nombre: "Laptop",
                        precio: 800.00,
                        porcentaje: 0.2,
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
                            "images/gallery-img-02.jpg",
                            "images/gallery-img-02.jpg",
                            "images/gallery-img-02.jpg",
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
                nombreEmpresa: "Termundo S.A",
                logo: "/images/LogosEmpresas/logo2.jpg",
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
                        precio: 40.00,
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
                        precio: 400.00,
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
                        precio: 200.00,
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
                        precio: 40.00,
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

                        nombre: "Mueble de Oficina",
                        precio: 200.00,
                        porcentaje: 0.4,
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
                            "images/gallery-img-05.jpg",
                            "images/gallery-img-05.jpg",
                            "images/gallery-img-05.jpg",
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

                        nombre: "Silla de Oficina",
                        precio: 150.00,
                        porcentaje: 0.4,
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
                            "images/gallery-img-04.jpg",
                            "images/gallery-img-04.jpg",
                            "images/gallery-img-04.jpg",
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


////////////////////////CONTROLADOR REGISTRO EMPRESAS/////////////////////////////

//FuncionCargarSelect

function CargarPlanes() {


    for (let i = 0; i < planes.length; i++) {



        document.getElementById("plan").innerHTML +=

            `  <option value="${planes[i].nombrePlan}">${planes[i].nombrePlan}</option>`;


    }

}



///////////////////////////////////////////////////////////////

function nuevaEmpresa() {

    let empresa = {

        nombreEmpresa: document.getElementById('nombre').value,
        logo: document.getElementById('logo').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value,
        descripcion: document.getElementById('descripcion').value,
        mision: document.getElementById('mision').value,
        vision: document.getElementById('vision').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        redesSociales: [{
            nombreRed1: document.getElementById('red1').value,
            url1: document.getElementById('url1').value,
            banner1: document.getElementById('logo1').value,
            nombreRed2: document.getElementById('red2').value,
            url2: document.getElementById('url2').value,
            banner2: document.getElementById('logo2').value,
            nombreRed3: document.getElementById('red3').value,
            url3: document.getElementById('url3').value,
            banner3: document.getElementById('logo3').value,
        }],
        direccion: document.getElementById('direccion').value,
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
        formaDePago: document.getElementById('formaPago').value,
        nombrePropietario: document.getElementById('propietario').value,
        numeroTarjeta: document.getElementById('numeroTarjeta').value,
        vencimiento: document.getElementById('Vencimiento').value,
        CCV: document.getElementById('CCV').value,
        plan: document.getElementById('plan').value,
        sucursales: [],
        productos: [],
        promociones: []
    };
    empresas.push(empresa);
    localStorage.setItem('empresas', JSON.stringify(empresas));

}

///////////////////////////////////////////////////////////////////////////


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
};




////////////////////////////////////////////////////////////////////////////

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah1').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}




////////////////////////////////////////////////////////////////////////

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah2').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}



////////////////////////////////////////////////////////////////////////////////

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah3').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}