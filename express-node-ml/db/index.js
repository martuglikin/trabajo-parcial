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
            imagen: '440.jpg',
            nombre: 'BMW 440',
            descripcion: 'Deportivo moderno con diseño provocador y tecnología de punta. 510 HP, tracción trasera o total, y todo el ADN M. Año 2024.',
            comentarios: [
                {
                    nombre: 'user1',
                    comentario: 'muy bueno',
                    imagen: 'default-image.png',
                },

                {
                    nombre: 'user2',
                    comentario: 'buenisimo',
                    imagen: 'default-image.png',
                },

                {
                    nombre: 'user3',
                    comentario: 'malo',
                    imagen: 'default-image.png',
                },
            ]
        },

        {
            id: '2',
            imagen: '118.jpg',
            nombre: 'BMW 118',
            descripcion: 'Compacto y versátil. Ideal para ciudad y escapadas. Motores eficientes, interior tecnológico y estilo juvenil. Año 2023.',
            comentarios: [
                {
                    nombre: 'mariana23',
                    comentario: 'Excelente servicio, súper recomendable.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'juan_tech',
                    comentario: 'El producto llegó rápido y en buen estado.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'lucasdev',
                    comentario: 'No era lo que esperaba, pero igual cumplió.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'maxi_art',
                    comentario: 'Muy buen diseño, volvería a comprar.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'ana.codes',
                    comentario: 'El envío tardó un poco, pero valió la pena.',
                    imagen: 'default-image.png',
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
                    nombre: 'auto_fan23',
                    comentario: 'El motor suena increíble, súper recomendable.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'speedy_lucas',
                    comentario: 'Ideal para los que aman la velocidad. 10/10.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'claudia_ruta',
                    comentario: 'Cómodo, seguro y elegante. Me encantó.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'rocioviajera',
                    comentario: 'Lo usamos para un viaje largo y respondió perfecto.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'ale_turbo',
                    comentario: 'Muy buena relación precio-calidad.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'luisa_drive',
                    comentario: 'Súper cómodo para viajes largos, lo recomiendo.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'max_rider',
                    comentario: 'Me encantó el diseño, pero el consumo podría mejorar.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'maria_turismo',
                    comentario: 'Excelente para viajes largos, súper cómodo y seguro.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'fer_autoentusiasta',
                    comentario: 'La conducción es suave, pero el consumo de combustible es algo elevado.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'pablo_drive',
                    comentario: 'Excelente calidad de materiales y confort en el interior.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'carla_circuito',
                    comentario: 'Buena performance, aunque podría mejorar la tecnología a bordo.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'victoria_viajera',
                    comentario: 'Comodidad y eficiencia en el consumo de combustible, ideal para largos recorridos.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'pedro_turbo',
                    comentario: 'Me gusta el diseño, pero podría mejorar la suspensión en caminos irregulares.',
                    imagen: 'default-image.png',
                },
            ]
        },
        {
            id: '11',
            imagen: '507.jpg',
            nombre: '507',
            descripcion: 'Un roadster de lujo con diseño atemporal y motor V8. Ícono de los años 50, con solo 252 unidades fabricadas, amado por celebridades como Elvis Presley. Año 2005.',
            comentarios: [
                {
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    nombre: 'jose_roadtrip',
                    comentario: 'Gran coche para viajes largos, súper estable y cómodo.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
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
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'sofia_motor',
                    comentario: 'Rendimiento increíble en la pista, muy ágil y rápido.',
                    imagen: 'default-image.png',
                },
                {
                    nombre: 'martin_mec',
                    comentario: 'Excelente tecnología de seguridad, pero algo ruidoso en carretera.',
                    imagen: 'default-image.png',
                },
                
            ]
        },
        
        
    ]
}

module.exports = datosProductos;