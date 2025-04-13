const datosProductos = {
    usuario: {
        email: 'fcolapinto@gmail.com',
        usuario: 'Franco Colapinto',
        pass: '111',
        fecha: '27/05/2003',
        dni: '43123456',
        foto: 'franco-colapinto.png'
    },

    productos: [
        {
            id: '1',
            imagen: 'bmw440i.png',
            nombre: 'BMW 440',
            descripcion: 'Deportivo moderno con diseño provocador y tecnología de punta. 510 HP, tracción trasera o total, y todo el ADN M. Año 2024.',
            comentarios: [
                {
                    nombre: 'user1',
                    comentario: 'muy buenoooo',
                    imagen: 'imagen1.jpg',
                },

                {
                    nombre: 'user2',
                    comentario: 'buenisimo',
                    imagen: 'imagen2.png',
                },

                {
                    nombre: 'user3',
                    comentario: 'malo',
                    imagen: 'imagen3.jpg',
                },
            ]
        },

        {
            id: '2',
            imagen: 'bmw118i.jpg',
            nombre: 'BMW 118i',
            descripcion: 'Compacto y versátil. Ideal para ciudad y escapadas. Motores eficientes, interior tecnológico y estilo juvenil. Año 2023.',
            comentarios: [
                {
                    nombre: 'mariana23',
                    comentario: 'Excelente servicio, súper recomendable.',
                    imagen: 'imagen4.png',
                },
                {
                    nombre: 'juan_tech',
                    comentario: 'El producto llegó rápido y en buen estado.',
                    imagen: 'imagen5.jpg',
                },
                {
                    nombre: 'lucasdev',
                    comentario: 'No era lo que esperaba, pero igual cumplió.',
                    imagen: 'imagen6.jpg',
                },
            ]
        },

        {
            id: '3',
            imagen: 'E28-clasico.jpg',
            nombre: 'E 28',
            descripcion: 'Un sedán deportivo antes de que eso fuera tendencia. Elegante por fuera, pero con un motor de 6 cilindros en línea que entregaba una experiencia de conducción pura. Año 1998.',
            comentarios: [
                {
                    nombre: 'sofi_gamer',
                    comentario: 'Increíble calidad, superó mis expectativas.',
                    imagen: 'imagen7.png',
                },
                {
                    nombre: 'maxi_art',
                    comentario: 'Muy buen diseño, volvería a comprar.',
                    imagen: 'imagen8.png',
                },
                {
                    nombre: 'ana.codes',
                    comentario: 'El envío tardó un poco, pero valió la pena.',
                    imagen: 'imagen9.jpg',
                },
            ]
        },

        {
            id: '4',
            imagen: 'electrico1.jpg',
            nombre: 'i4 eDrive40',
            descripcion: ' Sedán eléctrico de 340 HP. Combina elegancia con autonomía y conducción dinámica. Silencioso, pero potente. Año 2025.',
            comentarios: [
                {
                    nombre: 'speedy_lucas',
                    comentario: 'Ideal para los que aman la velocidad. 10/10.',
                    imagen: 'imagen10.png',
                },
                {
                    nombre: 'claudia_ruta',
                    comentario: 'Cómodo, seguro y elegante. Me encantó.',
                    imagen: 'imagen11.jpg',
                },
            ]
        },

        {
            id: '5',
            imagen: 'Z4.jpg',
            nombre: 'BMW Z4',
            descripcion: 'Un biplaza descapotable con motor atmosférico de 6 cilindros. Combinación perfecta de manejo deportivo y libertad al volante. Año 2023.',
            comentarios: [
                {
                    nombre: 'mecanico_juan',
                    comentario: 'Excelente suspensión y muy buen consumo.',
                    imagen: 'imagen12.jpg',
                },
                {
                    nombre: 'rocioviajera',
                    comentario: 'Lo usamos para un viaje largo y respondió perfecto.',
                    imagen: 'imagen13.png',
                },
                {
                    nombre: 'ale_turbo',
                    comentario: 'Muy buena relación precio-calidad.',
                    imagen: 'imagen14.jpg',
                },
            ]
        },

        {
            id: '6',
            imagen: 'x2.jpg',
            nombre: 'X2',
            descripcion: 'SUV compacto, ideal para la ciudad y viajes. Diseño moderno, tecnología avanzada y versiones híbridas y eléctricas. Año 2024.',
            comentarios: [
                {
                    nombre: 'carlos_racing',
                    comentario: '¡El coche es una bestia! Increíble aceleración.',
                    imagen: 'imagen15.png',
                },
                {
                    nombre: 'luisa_drive',
                    comentario: 'Súper cómodo para viajes largos, lo recomiendo.',
                    imagen: 'imagen16.jpg',
                },
                {
                    nombre: 'max_rider',
                    comentario: 'Me encantó el diseño, pero el consumo podría mejorar.',
                    imagen: 'imagen17.jpg',
                },
            ]
        },

        {
            id: '7',
            imagen: 'M1-1978.jpg',
            nombre: 'M1',
            descripcion: 'El primer superdeportivo de BMW. Motor central, diseño de Giugiaro y alma de competición. Es un ícono de colección y una rareza moderna. Año 1978',
            comentarios: [
                {
                    nombre: 'juanito_motor',
                    comentario: 'Muy buen rendimiento, ideal para ciudad y carretera.',
                    imagen: 'imagen18.jpg',
                },
                {
                    nombre: 'maria_turismo',
                    comentario: 'Excelente para viajes largos, súper cómodo y seguro.',
                    imagen: 'imagen19.jpg',
                },
                {
                    nombre: 'fer_autoentusiasta',
                    comentario: 'La conducción es suave, pero el consumo de combustible es algo elevado.',
                    imagen: 'imagen20.png',
                },
            ]
        },

        {
            id: '8',
            imagen: 'electrico2.jpg',
            nombre: 'iX3',
            descripcion: ' Versión eléctrica del X3. SUV elegante y funcional, sin emisiones, pero con el manejo típico de BMW. Año 2023.',
            comentarios: [
                {
                    nombre: 'ricardo_rally',
                    comentario: 'Ideal para los amantes de la velocidad, el mejor de su categoría.',
                    imagen: 'imagen1.jpg',
                },
                {
                    nombre: 'pablo_drive',
                    comentario: 'Excelente calidad de materiales y confort en el interior.',
                    imagen: 'imagen2.png',
                },
                {
                    nombre: 'carla_circuito',
                    comentario: 'Buena performance, aunque podría mejorar la tecnología a bordo.',
                    imagen: 'imagen3.jpg',
                },
            ]
        },

        {
            id: '9',
            imagen: 'M3-nuevo.webp',
            nombre: 'M3',
            descripcion: 'El M3 original. Ligero, ágil y nacido para las pistas. Su éxito en el automovilismo lo convirtió en leyenda y referencia hasta hoy. Año 2021.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen4.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen5.jpg',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen6.jpg',
                },
            ]
        },

        {
            id: '10',
            imagen: 'serie2.jpg',
            nombre: 'Serie 2',
            descripcion: 'Sedán mediano por excelencia. Tecnología, elegancia y precisión en la conducción. Un clásico que evoluciona con cada generación. Año 2020.',
            comentarios: [
                {
                    nombre: 'luis_carrera',
                    comentario: 'Este coche es una máquina, ¡perfecto para los fanáticos de la velocidad!',
                    imagen: 'imagen7.png',
                },
                {
                    nombre: 'victoria_viajera',
                    comentario: 'Comodidad y eficiencia en el consumo de combustible, ideal para largos recorridos.',
                    imagen: 'imagen8.png',
                },
                {
                    nombre: 'pedro_turbo',
                    comentario: 'Me gusta el diseño, pero podría mejorar la suspensión en caminos irregulares.',
                    imagen: 'imagen9.jpg',
                },
            ]
        },
        {
            id: '11',
            imagen: 'bmw507.jpg',
            nombre: '507',
            descripcion: 'Un roadster de lujo con diseño atemporal y motor V8. Ícono de los años 50, con solo 252 unidades fabricadas, amado por celebridades como Elvis Presley. Año 2005.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Tiene un estilo elegante y atemporal que lo convierte en una obra de arte sobre ruedas.',
                    imagen: 'imagen10.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Su motor ofrece un sonido clásico y una conducción emocionante, perfecta para los amantes de los autos vintage como yo.',
                    imagen: 'imagen11.jpg',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente, pero algo ruidoso en carretera.',
                    imagen: 'imagen12.jpg',
                },
            ]
        },
        {
            id: '12',
            imagen: 'electrico3.webp',
            nombre: 'i7',
            descripcion: 'Lujo eléctrico sin precedentes. El sedán más tecnológico y lujoso de BMW, con detalles como pantalla de cine en los asientos traseros.Año 2025.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen13.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen14.jpg',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen15.png',
                },
            ]
        },
        {
            id: '13',
            imagen: 'M5-nuevo.jpg',
            nombre: 'M5',
            descripcion: 'Sedán con motor V10 derivado de la Fórmula 1. Una bestia disfrazada de auto ejecutivo, con más de 500 HP y sonido inconfundible. Año 2025.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen16.jpg',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen17.jpg',
                },
            ]
        },
        {
            id: '14',
            imagen: '430-coupe.jpg',
            nombre: '430 coupe',
            descripcion: ' Diseño coupé con espíritu deportivo y practicidad. Perfecto para quienes buscan dinamismo sin renunciar al confort.Año 2023.',
            comentarios: [
                {
                    nombre: 'nicodrive92',
                    comentario: 'Lo tengo hace unos meses y la verdad es que cada vez que lo manejo, disfruto el viaje. Suave, potente y con un diseño que no pasa desapercibido.',
                    imagen: 'imagen18.jpg',
                },
                {
                    nombre: 'sofiaurbanmotor',
                    comentario: 'El interior es una locura. Todo se siente de alta gama y la tecnología es súper intuitiva. Me encanta cómo se adapta a mi forma de manejar.',
                    imagen: 'imagen19.jpg',
                },
                {
                    nombre: 'leoautolover',
                    comentario: 'Al principio dudaba por el tamaño, pero una vez que lo probás... te das cuenta de que es puro placer de conducción. Vale cada peso.',
                    imagen: 'imagen20.png',
                },
            ]
        },
        {
            id: '15',
            imagen: '2002.jpg',
            nombre: '2002 Turbo',
            descripcion: 'El primer BMW turboalimentado. Compacto, veloz y con una estética agresiva, fue un pionero del diseño deportivo en autos de calle. Año 1973.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen1.jpg',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen2.png',
                },
            ]
        },
        {
            id: '16',
            imagen: 'electrico4.webp',
            nombre: 'i3',
            descripcion: 'El pionero eléctrico urbano. Diseño audaz, interior sustentable y una propuesta diferente para la movilidad moderna. Año 2025.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen3.jpg',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen4.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen5.jpg',
                },
            ]
        },
        {
            id: '17',
            imagen: 'M2.jpg',
            nombre: 'M2 CS',
            descripcion: 'Una edición limitada y radical del M2. Más potencia, menor peso y mejoras en la suspensión para un manejo extremo en pista. Año 2021.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen6.jpg',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen7.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen8.png',
                },
            ]
        },
        {
            id: '18',
            imagen: 'Serie5.jpg',
            nombre: 'Serie 5',
            descripcion: 'Sedán ejecutivo con un balance perfecto entre lujo y rendimiento. Ahora también con versión eléctrica (i5). Año 2021.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen9.jpg',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen10.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen11.jpg',
                },
            ]
        },
        {
            id: '19',
            imagen: '3.0-CSL.jpg',
            nombre: '3.0 CSL',
            descripcion: 'Conocido como el “Batimóvil”, este coupé fue una leyenda del automovilismo europeo y precursor de la línea M. Ligero, potente y con aerodinámica avanzada para su época. Año 1975.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen12.jpg',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen13.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen14.jpg',
                },
                
            ]
        },
        {
            id: '20',
            imagen: 'electrico5.jpg',
            nombre: 'i X6',
            descripcion: 'SUV eléctrico insignia. Diseño futurista, 523 HP, pantalla curva y más de 600 km de autonomía. Año 2025.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'imagen15.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'imagen16.jpg',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'imagen17.jpg',
                },
                
            ]
        },
        
        
    ]
}

module.exports = datosProductos;