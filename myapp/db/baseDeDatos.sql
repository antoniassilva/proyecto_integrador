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


INSERT INTO users (email ,usuario, contraseña) VALUES ("estanislaomiedziak@gmail.com", "estanislaom", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("briangomez@gmail.com", "briang", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("luisnavas@gmail.com", "luisn", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("antoniasilva@gmail.com", "antonias", "1234");
INSERT INTO users (email ,usuario, contraseña) VALUES ("paznobile@gmail.com", "pazn", "1234");