package com.practicaProfesionalizante.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.practicaProfesionalizante.dao.PedidosDao;
import com.practicaProfesionalizante.modelos.Pedidos;

@RestController
public class PedidosControlador {

	@Autowired
	private PedidosDao pedidosDao;
	
	@GetMapping("api/pedido/listar")
	public List<Pedidos> getPedidos() {
		
	List<Pedidos> pedido=pedidosDao.getPedidos();
	
	return pedido;
	}		

	@DeleteMapping(value="api/pedido/eliminar/{id_orden}")
	public void eliminar(@PathVariable Long id_orden) {
		
		pedidosDao.eliminar(id_orden);
	}

	@PatchMapping(value="api/pedido/entregar")
	public void entregar(@RequestBody Pedidos pedido) {
		
		pedidosDao.entregar(pedido);
	}
}
