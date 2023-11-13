package com.practicaProfesionalizante.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.practicaProfesionalizante.modelos.Pedidos;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class PedidosDaoImp implements PedidosDao {
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	@Transactional
	public List<Pedidos> getPedidos() {
		
		String query="from pedidos";
		
		return entityManager.createQuery(query).getResultList();
	}

	@Override
	public void eliminar(Long id_orden) {
		
		Pedidos pedido=entityManager.find(Pedidos.class,id_orden);
		
		entityManager.remove(pedido);
	}

	@Override
	public void entregar(Pedidos pedido) {
		
		Long id = pedido.getId_orden();
		
		Pedidos carrito=entityManager.find(Pedidos.class,id);
		
		carrito.setEstado(pedido.getEstado());
		
		entityManager.merge(carrito);
		
	}
}
