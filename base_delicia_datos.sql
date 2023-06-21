create database base_delicia_datos;

use base_delicia_datos;

create table pedidos (
	idPedidos int8 not null auto_increment primary key,
	nroOrden int8 not null,
	fecha datetime not null,
	precio float8 not null,
	tipoPago varchar(45) not null,
	estado varchar(45) not null
);
    
    
