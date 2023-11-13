package com.practicaProfesionalizante.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.practicaProfesionalizante.dao.PedidosDao;
import com.practicaProfesionalizante.modelos.Pedidos;

@RestController
public class PedidosControlador {

	@Autowired
	private PedidosDao pedidosDao;
	
	@GetMapping("api/pedidos")
	public List<Pedidos> getPedidos() {
		
	List<Pedidos> user=pedidosDao.getPedidos();
	
	return user;
	}		

	@RequestMapping(value="api/pedidos/{id}", method=RequestMethod.DELETE)
	public void eliminar(@PathVariable Long id) {
		
		pedidosDao.eliminar(id);
	}
}
