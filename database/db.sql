CREATE DATABASE if not exists tienda character set utf8mb4;
use tienda;

CREATE table if not exists articulos(
    id int auto_increment primary key,
    nombre varchar(100),
    descripcion text,
    precio_compra decimal(10,2),
    precio_venta decimal(10,2),
    stock_minimo int default 0,
    stock_maximo int default 0,
    imagen varchar(255) -- Solo la ruta, por ejemplo /uploads/01008.png
);