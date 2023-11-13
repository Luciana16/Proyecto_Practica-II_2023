package com.practicaProfesionalizante.dao;

import java.util.List;

import com.practicaProfesionalizante.modelos.Pedidos;

import jakarta.transaction.Transactional;

@Transactional
public interface PedidosDao {
	List <Pedidos> getPedidos();
	void eliminar(Long id_carrito);
	void entregar(Pedidos pedido);

}
