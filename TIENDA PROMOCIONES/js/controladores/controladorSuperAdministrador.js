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



///////////////////////////////////////////CONTROLADOR SUPERADMINISTRADOR//////////////////////////

//Funcion Caegar Empresas

function tablaEmpresas() {

    document.getElementById("empresas").innerHTML = ``;

    for (let c = 0; c < empresas.length; c++) {

        document.getElementById("empresas").innerHTML +=
            `
    
            <tr>

            <td class="thumbnail-img">
                <a href="#">
                    <img class="${empresas[c].logo}" alt="" />
                </a>
            </td>

            <td class="name-pr">
                <a href="#">
                ${empresas[c].nombreEmpresa}
        </a>
            </td>

            <td class="price-pr">
                <p>${empresas[c].correo}</p>
            </td>

            <td class="quantity-box">
                <input type="text" size="4" value="${empresas[c].contraseña}" min="0" step="1" class="c-input-text qty text">
            </td>


            <td class="total-pr">
                <p>${empresas[c].descripcion}</p>
            </td>

            <td class="name-pr">
                <a href="#">
                ${empresas[c].mision}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].vision}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].telefono}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].pais}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].ciudad}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].redesSociales[0].nombreRed1}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].redesSociales[0].nombreRed2}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].redesSociales[0].nombreRed3}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].direccion}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].latitud}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].longitud}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].formaDePago}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].nombrePropietario}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].numeroTarjeta}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].vencimiento}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].CCV}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].plan}
        </a>
            </td>



        </tr>
    
    
    `;
    }


}

//Funcion Cargar Planes

function tablaPlanes() {

    document.getElementById("planes").innerHTML = ``;

    for (let c = 0; c < planes.length; c++) {

        document.getElementById("planes").innerHTML +=
            `
    
            <tr>

            <td class="">
                <a href="#">
                   ${planes[c].nombrePlan}
                </a>
            </td>

            <td class="name-pr">
                <a href="#">
                ${planes[c].precio}
        </a>
            </td>

            <td class="price-pr">
                <p>${planes[c].promos}</p>
            </td>

            <td class="quantity-box">
                <input type="text" size="4" value="${planes[c].almacenamiento}" min="0" step="1" class="c-input-text qty text">
            </td>


            <td class="total-pr">
                <p>${planes[c].soporte}</p>
            </td>

            <td class="name-pr">
                <a href="#">
                ${planes[c].centroDeAyuda}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${planes[c].duracion}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${planes[c].panpallaPrincipal}
        </a>
            </td>
         
            <td >
            <div class="col-md-4 text-center">
                <button type="button" class="btn btn-outline-danger" onclick = "Editar(${c});">Editar  </button>
            </div>
            </td>

            <td >
            <div class="col-md-4 text-center">
                <button type="button" class="btn btn-outline-danger" onclick = "eliminarPlan(${c});">Borrar  </button>
            </div>
            </td >



        </tr>
    
    
    `;
    }




}

//Funcion Guardar Planes

function guardarPlan() {


    let plan = {


        nombrePlan: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        promos: document.getElementById("promos").value,
        almacenamiento: document.getElementById("almacenamiento").value,
        soporte: document.getElementById("soporte").value,
        centroDeAyuda: document.getElementById("ayuda").value,
        duracion: document.getElementById("duracion").value,
        panpallaPrincipal: document.getElementById("principal").value,




    };
    planes.push(plan);
    localStorage.setItem('planes', JSON.stringify(planes));
    $('#exampleModal').modal('hide');
    alert("Plan añadido con exito");
    tablaPlanes()

}


////FUNCION ELIMINAR PLAN

function eliminarPlan(e) {

    planes.splice(e, 1)
    localStorage.setItem('planes', JSON.stringify(planes));
    alert("Plan eliminado con exito");
    tablaPlanes()
}


//FUNCION MOSTRAR DIALOGO EDITAR

function Editar(r) {
    $('#exampleModal2').modal('show');

    document.getElementById("nombre2").value = planes[r].nombrePlan
    document.getElementById("precio2").value = planes[r].precio
    document.getElementById("promos2").value = planes[r].promos
    document.getElementById("almacenamiento2").value = planes[r].almacenamiento
    document.getElementById("soporte2").value = planes[r].soporte
    document.getElementById("ayuda2").value = planes[r].centroDeAyuda
    document.getElementById("duracion2").value = planes[r].duracion
    document.getElementById("principal2").value = planes[r].panpallaPrincipal

    document.getElementById("botones").innerHTML =
        `
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    <button type="button" class="btn btn-danger" onclick=" editarPlan(${r})">Guardar Plan</button>
    
    `

}

///FUNCION EDITAR PLAN

function editarPlan(m) {


    let editado = {


        nombrePlan: document.getElementById("nombre2").value,
        precio: document.getElementById("precio2").value,
        promos: document.getElementById("promos2").value,
        almacenamiento: document.getElementById("almacenamiento2").value,
        soporte: document.getElementById("soporte2").value,
        centroDeAyuda: document.getElementById("ayuda2").value,
        duracion: document.getElementById("duracion2").value,
        panpallaPrincipal: document.getElementById("principal2").value,




    };
    planes.splice(m, 1, editado)
        // planes.push(editado);
    localStorage.setItem('planes', JSON.stringify(planes));
    $('#exampleModal2').modal('hide');
    alert("Plan editado con exito");
    tablaPlanes()

}



///////////////////////////////////////////////////////////////////////////////////////////////////