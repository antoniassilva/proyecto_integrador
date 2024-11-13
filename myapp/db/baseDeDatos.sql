CREATE SCHEMA tpprogra2;
USE tpprogra2;

CREATE TABLE users( 
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
usuario VARCHAR(255) NOT NULL,
contraseña VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED NOT NULL,
imagen VARCHAR(255) NOT NULL,
nombre_producto VARCHAR(255) NOT NULL,
descripcion_producto VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES users (id)
);

INSERT INTO products (usuario_id, imagen, nombre_producto, descripcion_producto) VALUES (1, "..\public\images\products\audiculares.jpg", "Auriculares", "Auriculares con carga rápida, Extra Bass, larga duración de batería, deportes y mucho más. Auriculares con calidad de sonido excepcional y funciones de escucha inteligente.");
INSERT INTO products (usuario_id, imagen, nombre_producto, descripcion_producto) VALUES (1, "..\public\images\products\celular.jpg", "Samsung", "Capturá tus mejores momentos y revivilos cuando quieras con la cámara trasera de 8 Mpx. Además, con la cámara frontal con flash preparate para compartir selfies más iluminadas en tus redes sociales. Batería para todo el día y el espacio que necesites");
INSERT INTO products (usuario_id, imagen, nombre_producto, descripcion_producto) VALUES (2, "..\public\images\products\iphone.jpg", "Iphone", "Teléfono inteligente de alta gama diseñado y comercializado por Apple. Lo más avanzado tecnologicamente, todo en un teléfono");
INSERT INTO products (usuario_id, imagen, nombre_producto, descripcion_producto) VALUES (3, "..\public\images\products\jbl.jpg", "JBL", "Lleva la fiesta contigo a todas partes. El parlante ofrece hasta 20 horas de autonomía y una práctica batería integrada que te permite cargar tus dispositivos y alargar la fiesta durante toda la noche.");
INSERT INTO products (usuario_id, imagen, nombre_producto, descripcion_producto) VALUES (4, "..\public\images\products\macbook.jpg", "Macbook", "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados");
INSERT INTO products (usuario_id, imagen, nombre_producto, descripcion_producto) VALUES (4, "..\public\images\products\smart.jpg", "Smart TV", "Eleva tu entretenimiento con su pantalla LED HD, que ofrece imágenes nítidas y vibrantes, mientras que te brinda acceso a plataformas de streaming como Netflix y YouTube.");
INSERT INTO products (usuario_id, imagen, nombre_producto, descripcion_producto) VALUES (5, "..\public\images\products\tablet.jpg", "Tablet", "Esta tablet es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, lo convierte en una combinación perfecta de rendimiento y versatilidad.");

INSERT INTO users (email ,usuario, contraseña) VALUES ("estanislaomiedziak@gmail.com", "estanislaom", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("briangomez@gmail.com", "briang", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("luisnavas@gmail.com", "luisn", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("antoniasilva@gmail.com", "antonias", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("paznobile@gmail.com", "pazn", "1234");