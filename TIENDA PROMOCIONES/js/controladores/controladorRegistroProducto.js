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


function cargarCategorias() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("categorias").innerHTML +=

            `  <option value="${categorias[i]}">${categorias[i]}</option>`;


    }

}

function nuevoProducto() {

    var div1 = document.getElementById("blah");
    var align = div1.getAttribute("src");


    let producto = {
        categoria: document.getElementById('categorias').value,
        nombre: document.getElementById('nombreProducto').value,
        precio: document.getElementById('precioproducto').value,
        cantida: document.getElementById('cantidad').value,
        descripcion: document.getElementById('descripcion').value,

        imagenes: [
            align,
            align,
            align,
        ],

        sucursales: empresas[0].sucursales,


    };
    empresas[0].productos.push(producto);
    localStorage.setItem('empresas', JSON.stringify(empresas));

}




//////////////////////////////////////////

//Funcion Cargar Precio

function vistaPrevia() {

    var foto = document.getElementById("foto").files[0].name;
    var pathname = window.location.pathname;
    alert(pathname);

    alert(foto);

    document.getElementById("img").innerHTML = `


    <div class="col-md-12 ">
    <img src="${foto}" class="w-100 ">
    </div>

`
}



function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }


        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function() {
    readURL(this);
});