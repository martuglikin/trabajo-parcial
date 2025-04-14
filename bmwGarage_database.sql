CREATE SCHEMA bmwGarage_db;
USE bmwGarage_db;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    dni INT(8) UNSIGNED UNIQUE NOT NULL,
    foto_perfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL,
    imagen_producto VARCHAR(255)NOT NULL,
    nombre_producto VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    producto_id INT UNSIGNED NOT NULL,
    usuario_id INT UNSIGNED NOT NULL,
    texto TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios (email, contraseña, fecha_nacimiento, dni, foto_perfil)
VALUES
('usuario1@mail.com', 'clave123', '2005-11-12', 12345678, 'perfil1.jpg'),
('usuario2@mail.com', 'clave456', '2005-03-10', 23456789, 'perfil2.jpg'),
('usuario3@mail.com', 'clave789', '2007-08-21', 34567890, 'perfil3.jpg'),
('usuario4@mail.com', 'claveabc', '1993-12-01', 45678901, 'perfil4.jpg'),
('usuario5@mail.com', 'clavedef', '1990-01-15', 56789012, 'perfil5.jpg');

INSERT INTO productos (usuario_id, imagen_producto, nombre_producto, descripcion)
VALUES
(1, 'bmw440i.jpg', 'BMW 440', 'Deportivo moderno con diseño provocador y tecnología de punta. 510 HP, tracción trasera o total, y todo el ADN M. Año 2024.'),

(2, 'bmw118i.jpg', 'BMW 118i', 'Compacto y versátil. Ideal para ciudad y escapadas. Motores eficientes, interior tecnológico y estilo juvenil. Año 2023.'),

(3, 'E28-clasico.jpg', 'E28-clasico', 'Un sedán deportivo antes de que eso fuera tendencia. Elegante por fuera, pero con un motor de 6 cilindros en línea que entregaba una experiencia de conducción pura. Año 1998.'),

(4, 'electrico1.jpg', 'i4 eDrive40', 'Sedán eléctrico de 340 HP. Combina elegancia con autonomía y conducción dinámica. Silencioso, pero potente. Año 2025.'),

(5, 'Z4.jpg', 'BMW Z4', 'Un biplaza descapotable con motor atmosférico de 6 cilindros. Combinación perfecta de manejo deportivo y libertad al volante. Año 2023.'),

(1, 'x2.jpg', 'BMW X2', 'SUV compacto, ideal para la ciudad y viajes. Diseño moderno, tecnología avanzada y versiones híbridas y eléctricas. Año 2024.'),

(2, 'M1-1978.jpg', 'BMW M1', 'El primer superdeportivo de BMW. Motor central, diseño de Giugiaro y alma de competición. Es un ícono de colección y una rareza moderna. Año 1978.'),

(3, 'electrico2.jpg', 'iX3', 'Versión eléctrica del X3. SUV elegante y funcional, sin emisiones, pero con el manejo típico de BMW. Año 2023.'),

(4, 'serie2.jpg', 'BMW Serie 2', 'Sedán mediano por excelencia. Tecnología, elegancia y precisión en la conducción. Un clásico que evoluciona con cada generación. Año 2020.'),

(5, 'M5-nuevo.jpg', 'BMW M5', 'Sedán con motor V10 derivado de la Fórmula 1. Una bestia disfrazada de auto ejecutivo, con más de 500 HP y sonido inconfundible. Año 2025.');

INSERT INTO comentarios (producto_id, usuario_id, texto)
VALUES
(1, 2, '¡Una joya clásica!'),
(1, 3, 'Siempre me gustó este modelo.'),
(1, 4, 'Increíble diseño retro.'),

(2, 1, 'Lo tengo, anda excelente.'),
(2, 5, 'Uno de los mejores sedanes.'),
(2, 3, 'BMW nunca falla.'),

(3, 2, 'Gran confort para viajar.'),
(3, 4, 'Diseño sobrio y elegante.'),
(3, 1, 'Lo recomiendo totalmente.'),

(4, 5, 'Quiero uno ya.'),
(4, 2, 'Demasiado futurista para mí.'),
(4, 3, 'Hermoso, aunque caro.'),

(5, 4, 'Espacio y potencia.'),
(5, 1, 'Ideal para familia.'),
(5, 2, 'Una bestia.'),

(6, 3, 'Me encanta con techo bajo.'),
(6, 2, 'Perfecto para el verano.'),
(6, 4, '¡Divertido de manejar!'),

(7, 1, 'Pura potencia.'),
(7, 5, 'Ideal para circuitos.'),
(7, 3, 'Sonido espectacular.'),

(8, 2, 'Combina lo mejor de dos mundos.'),
(8, 4, 'Muy cómodo y potente.'),
(8, 1, '¡Recomendado!'),

(9, 5, 'Eléctrico pero con garra.'),
(9, 3, 'Tecnología pura.'),
(9, 2, 'BMW lo hizo de nuevo.'),

(10, 1, 'Un misil con cuatro puertas.'),
(10, 4, 'Estilo y rendimiento.'),
(10, 5, 'Mi favorito sin dudas.');

