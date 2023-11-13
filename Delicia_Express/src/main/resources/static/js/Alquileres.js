// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	cargarPedidos();
	
  	$('#pedidos').DataTable();
  	
  	//eliminarPedido();
  	//entregarPedido();
    
});

async function cargarPedidos(){
	
	const request = await fetch('api/pedido/listar',{
		
		method: 'GET',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	})
	
	const pedidos = await request.json();

	let listadoHTML = '<tr><th>Id</th><th>Nro. Orden</th><th>Fecha</th><th>Importe</th><th>Tipo de pago</th><th>Estado</th><th>Acciones</th></tr>';
	
	for (let pedido of pedidos){
		
		let botonEliminar = '<a href="#" onclick="eliminarPedido(' + pedido.id_carrito + ')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';
		
		let botonEntregar = '<a href="#" onclick="entregarPedido(\'' + pedido.id_carrito + '\')" class="btn btn-success btn-circle"><i class="fas fa-check"></i></a>';
				
		let pedidoshtml = '<tr><td>' + pedido.id + '</td><td>' + pedido.id_orden + '</td><td>' + pedido.fecha + '</td><td>'
		 + pedido.importe + '</td><td>' + pedido.tipoPago + '</td><td>' + pedido.estado + '</td><td>' + botonEntregar + botonEliminar + '</td></tr>';
		
		listadoHTML += pedidoshtml;
	}


	document.querySelector('#pedidos tbody').outerHTML = listadoHTML;
}

async function eliminarPedido(id_carrito){
	if(!confirm("Se cancelo el Pedido?")){
		return;
	}
	
	const request = await fetch('api/pedido/eliminar/' + id_carrito,{
		
		method: 'DELETE',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	location.reload();
}

async function entregarPedido(id){
	
	let estado = prompt('Por favor, escriba el nuevo estado del pedido:');
	
	let datos = {};
	datos.id_orden = id;
	datos.estado = estado;
	
	const request = await fetch('api/pedido/entregar',{
		
		method: 'PATCH',

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	location.reload();
}

function busqueda() {
  var input, filter, table, tr, td, i, txtValue1, txtValue2;
  input = document.getElementById("buscador");
  filter = input.value.toUpperCase();
  table = document.getElementById("pedidos");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[1]; 
    td2 = tr[i].getElementsByTagName("td")[5]; 
    if (td1 && td2) {
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
