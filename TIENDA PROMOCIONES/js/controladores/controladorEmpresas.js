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
                        latitud: 15.5079941,
                        longitud: -88.02167773,

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
                        latitud: 14.08481023,
                        longitud: -87.1729061,

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
                        latitud: 14.44778701,
                        longitud: -87.63725817,

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],




                    },
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: 400.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],

                    },
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: 200.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],


                    },
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],





                    },
                ],

                promociones: [

                    {
                        categoria: "Anime",
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                        categoria: "Anime",
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                        latitud: 15.5079941,
                        longitud: -88.02167773,

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
                        latitud: 14.08481023,
                        longitud: -87.1729061,

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
                        latitud: 14.44778701,
                        longitud: -87.63725817,

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],




                    },
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: 400.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],

                    },
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: 200.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],


                    },
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],





                    },
                ],

                promociones: [

                    {
                        categoria: "Electronicos",
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                        categoria: "Electronicos",
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                        latitud: 15.5079941,
                        longitud: -88.02167773,

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
                        latitud: 14.08481023,
                        longitud: -87.1729061,

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
                        latitud: 14.44778701,
                        longitud: -87.63725817,

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],




                    },
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: 400.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],

                    },
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: 200.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],


                    },
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                        ],

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
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                                latitud: 14.08481023,
                                longitud: -87.1729061,

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
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],





                    },
                ],


                promociones: [

                    {
                        categoria: "Mobiliario",
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
                                latitud: 15.5079941,
                                longitud: -88.02167773,
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
                        categoria: "Mobiliario",
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




///////////////CONTROLADOR EMPRESAS///////////////////

///////////////////////////////////////////////////////////
function Celdas() {

    document.getElementById("celdas").innerHTML = "";

    for (let j = 0; j < empresas.length; j++) {

        document.getElementById("celdas").innerHTML += `

        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="products-single fix">
            <div class="box-img-hover">
                <div class="type-lb">

                </div>
                <img src="
                ${empresas[j].logo}" class="img-fluid w-100" >
                <div class="mask-icon">
                    <ul>

                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Favoritos" onclick = "empFav(${j});"><i class="far fa-heart"></i></a></li>
                    </ul>
                    <a class="cart" href="#" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal(${j});cargarSucursales(${j}); " >Ver Sucursales</a>
                </div>
            </div>
            <div class="why-text">
                <h4> ${empresas[j].nombreEmpresa}</h4>

            </div>
        </div>
    </div>
        
        
        `;


    }



}

////////////////////////////////////////////////////////////////////


//Crea la vista en filas de las empresas
function lista() {

    document.getElementById("list-view").innerHTML = "";

    for (var j = 0; j < empresas.length; j++) {


        document.getElementById("list-view").innerHTML += `

        <div class="list-view-box">

              <div class="row">

                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">

                         <div class="products-single fix">

                                 <div class="box-img-hover">

                                     <img src="${empresas[j].logo}" class="img-fluid" alt="Image">
                                
                                 </div>

                          </div>
                      
                     </div>
                                        

                     <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">

                            <div class="why-text full-width">

                                 <h4>${empresas[j].nombreEmpresa}</h4>

                                     <p>
                                     
                                     ${empresas[j].descripcion}
                                     
                                     </p>
                                                   
                                 <a class="btn hvr-hover" href="#" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal(${j});cargarSucursales(${j}); ">Ver Sucursales</a>
                                 <a class="btn hvr-hover" href="#" onclick = "empFav(${j});" > Agregar a Favoritos</a>
                                               
                            </div>
                    
                     </div>


                 </div>

           </div>
        
        
        `;


    }



}

////////////////////////////////////

//generar la modal para ver sucursales de las empresas 
function Modal(k) {


    document.getElementById("cuerpo").innerHTML =

        `      
       

          <div class="col-4  p-1"   >
            <img src="${empresas[k].logo}" class=" imagen-logo" >
          </div>
    
        <div class="col-4  datos-empresa">
              <div class="datos-titulo">
              <h1 >${empresas[k].nombreEmpresa}</h1>
             </div>
          
              <p> Correo: ${empresas[k].correo}</p>
             <p>${empresas[k].descripcion}</p>
             <p> Telefono: ${empresas[k].telefono}</p>
             <p>${empresas[k].pais}</p>
           
         </div>

        <div class="col-4 redes-empresa">

        <h1>REDES SOCIALES </h1>
        
         <div class="row ">

         <div class="col-12  datos-empresa">
         <p> <a href=""><img src="/images/logo-de-facebook-png.png" class="red"></a>&nbsp&nbsp&nbsp&nbsp${empresas[k].redesSociales[0].url1} </p>

        </div>

                    
         </div>
         <div class="row ">
         <div class="col-12  datos-empresa">
         <p> <a href=""><img src="/images/logo-instagram.png" class="red"></a>&nbsp&nbsp&nbsp&nbsp${empresas[k].redesSociales[0].url2} </p>

        </div>
        
       </div>
       <div class="row ">
       <div class="col-12  datos-empresa">
       <p> <a href=""><img src="/images/Logo-Twitter.png" class="red"></a>&nbsp&nbsp&nbsp&nbsp${empresas[k].redesSociales[0].url3} </p>

      </div>
     </div>
    
       
    </div>

      
        <hr>
    
    `;








}


///////////////////////////////////////////////////////////////////////

function empFav(l) {

    let empFav = {

        nombreEmpresa: empresas[l].nombreEmpresa,
        logo: empresas[l].logo,
        correo: empresas[l].correo,
        contraseña: empresas[l].contraseña,
        descripcion: empresas[l].descripcion,
        mision: empresas[l].mision,
        vision: empresas[l].vision,
        telefono: empresas[l].telefono,
        pais: empresas[l].pais,
        ciudad: empresas[l].ciudad,

        redesSociales: empresas[l].redesSociales,
    }
    usuarios[0].empresasFavoritas.push(empFav);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));



}

/////////////////////////////////////////////////////////////////////////

var x = document.getElementById("demo");

function cargarmap(k) {


    var locacion = document.getElementById("sucursal").value;

    navigator.geolocation.getCurrentPosition(showPosition, showError);

    //Funcion para mostrar posicion
    function showPosition(position) {
        lat = empresas[k].sucursales[locacion].latitud; //Valor de la latitud
        lon = empresas[k].sucursales[locacion].longitud; //Valor de la longitud
        latlon = new google.maps.LatLng(lat, lon)
        mapholder = document.getElementById('mapholder')
        mapholder.style.height = '420px';
        mapholder.style.width = '630px';
        var myOptions = {
            center: latlon,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
        };
        var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
        var marker = new google.maps.Marker({ position: latlon, map: map, title: "Aqui estamos!" });
    }
    //Funcion de Muestra mensajes por si hay error
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "Denegada la peticion de Geolocalización en el navegador."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "La información de la localización no esta disponible."
                break;
            case error.TIMEOUT:
                x.innerHTML = "El tiempo de petición ha expirado."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "Ha ocurrido un error desconocido."
                break;
        }
    }


}



///////////////////////////////


function cargarSucursales(k) {

    document.getElementById("mapholder").innerHTML = "";
    document.getElementById("date").innerHTML = "";

    document.getElementById("img").innerHTML =
        `
    <select class="custom-select select" id="sucursal" onchange="cargarmap(${k});Carrusel(${k});">
    <option selected>Sucursal</option>
   
  </select>
    `


    for (let i = 0; i < empresas[k].sucursales.length; i++) {



        document.getElementById("sucursal").innerHTML +=

            `  <option value="${i}">${empresas[k].sucursales[i].nombreSucursal}</option>`;


    }

}

////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel(k) {




    var sucu = document.getElementById("sucursal").value;

    document.getElementById("date").innerHTML = `      
        <div class=" sucursal-datos ">
    
       
          <div class="mt-2 p-2 datos-sucursales-generales" >


              <p class="da">Correo</p>
              <p>${empresas[k].sucursales[sucu].correo}</p>
              <p class="da"> Red Social</p>
              <p>${empresas[k].sucursales[sucu].redSocial}</p>
              <p>${empresas[k].sucursales[sucu].url}</p>
              <p class="da">Telefono</p>
              <p>${empresas[k].sucursales[sucu].telefono}</p>
              <p class="da">Direccion</p>
              <p>${empresas[k].sucursales[sucu].direccion}</p>
             
             
            </div>

        </div>

       `




}