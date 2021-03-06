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

    var div1 = document.getElementById("blah");
    var align = div1.getAttribute("src");

    var div2 = document.getElementById("blah1");
    var align2 = div1.getAttribute("src");

    var div2 = document.getElementById("blah2");
    var align2 = div1.getAttribute("src");

    var div3 = document.getElementById("blah3");
    var align3 = div1.getAttribute("src");


    let empresa = {

        nombreEmpresa: document.getElementById('nombre').value,
        logo: align,
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
            banner1: align2,
            nombreRed2: document.getElementById('red2').value,
            url2: align3,
            banner2: document.getElementById('logo2').value,
            nombreRed3: document.getElementById('red3').value,
            url3: align3,
            banner3: document.getElementById('logo3').value,
        }],
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

    alert("Empresa agregado con exito");
    location.href = 'index.html';

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