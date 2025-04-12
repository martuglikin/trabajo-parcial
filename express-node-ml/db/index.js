const datosProductos = {
    usuario: {
        email: '',
        usuario: 'Martina Glikin',
        pass: '',
        fecha: '',
        dni: '',
        foto: ''
    },

    productos: [
        {
            id: '1',
            imagen: '440.jpg',
            nombre: 'BMW 440',
            descripcion: 'Auto deportivo 440, 2024.',
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
            descripcion: 'Auto urbano 118, 2023.',
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
            imagen: 'E28 clasico.jpg',
            nombre: 'E 28',
            descripcion: 'Auto clasico, 1998.',
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
            imagen: 'electrico 1.jpg',
            nombre: 'i4 eDrive40',
            descripcion: 'Auto eléctrico i4 eDrive40, 2025.',
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
            descripcion: 'Auto deportivo, 2023.',
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
            descripcion: 'Auto urbano, 2024.',
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
            imagen: 'M1 1978.jpg',
            nombre: 'M1',
            descripcion: 'Auto clásico, 1978',
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
            imagen: 'electrico 2.jpg',
            nombre: 'iX3',
            descripcion: 'Auto eléctrico, 2022.',
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
            imagen: 'M3 nuevo.webp',
            nombre: 'M3',
            descripcion: 'Auto deportivo, 2025.',
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
            imagen: 'serie 3.jpg',
            nombre: 'Serie 3',
            descripcion: 'Auto urbano, 2020.',
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
        }
        
    ]
}

module.exports = datosProductos;