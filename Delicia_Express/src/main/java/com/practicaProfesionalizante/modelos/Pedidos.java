package com.practicaProfesionalizante.modelos;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pedidos")
public class Pedidos {

	@Column(name="id")
	private Long id;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_orden")
	private Long id_orden;
	@Column(name="fecha")
	private Date fecha;
	@Column(name="importe")
	private Float importe;
	@Column(name="tipoPago")
	private String tipoPago;
	@Column(name="estado")
	private String estado;
	
	public Pedidos(Long ord, Date fech, Float imp, String tP, String est) {
		this.id_orden=ord;
		this.fecha=fech;
		this.importe=imp;
		this.tipoPago=tP;
		this.estado=est;
		
	}
	
	public Pedidos() {}

	public Pedidos(Long id_orden, String estado) {
		this.id_orden = id_orden;
		this.estado = estado;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId_orden() {
		return id_orden;
	}

	public void setId_orden(Long id_orden) {
		this.id_orden = id_orden;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Float getImporte() {
		return importe;
	}

	public void setImporte(Float importe) {
		this.importe = importe;
	}

	public String getTipoPago() {
		return tipoPago;
	}

	public void setTipoPago(String tipoPago) {
		this.tipoPago = tipoPago;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
}
