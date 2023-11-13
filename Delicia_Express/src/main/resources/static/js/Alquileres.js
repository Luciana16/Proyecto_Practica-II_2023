// Call the dataTables jQuery plugin
$(document).ready(function(){
	
	cargarPedidos();
	
	$('#pedidos').DataTable();
	
});


async function cargarPedidos(){
	
	const request = await fetch('api/pedidos',{
		
		method: 'GET',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	const pedidos = await request.json();

	let listadoHTML = '';
	
	for (let pedido of pedidos){
		
		let botonEliminar = '<a href="#" onclick="eliminarPedido(' + pedido.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
		
		let pedidohtml = '<tr><td>' + pedido.id + '</td><td>' + pedido.orden + '</td><td>' + pedido.fecha + '</td><td>'
		 + pedido.importe + '</td><td>' + pedido.tipoPago + '</td><td>' + pedido.estado + '</td><td>' + botonEliminar + '</td></tr>';
		
		listadoHTML +=pedidohtml;
	}


	document.querySelector('#pedidos tbody').outerHTML = listadoHTML;
}

async function eliminarPedido(id){
	if(!confirm("Desea eliminar el pedido?")){
		return;
	}
	
	const request = await fetch('api/pedidos/' + id,{
		
		method: 'DELETE',
		
		headers: {
			
			'Accept': 'application/json',
			
			'Content-Type': 'application/json'
		}
	});
	location.reload();
}

// Función botón modificar
function modificar( event ) {

    let row = event.target.closest("tr");
    let cells = row.cells;
    // Modificar el contenido de las celdas
    for (let i = 0; i < cells.length - 1; i++) {
        let nuevoValor = prompt( `Dato ${ cells[ i ].textContent } por`, cells[ i ].textContent );
        if ( nuevoValor !== null && nuevoValor !== "" ) {
            cells[ i ].textContent = nuevoValor;
        }
    }
}

// Para que se cargue despues de todo el buscador
window.addEventListener('DOMContentLoaded', function() {

    const buscador = document.querySelector('.buscador');

    // Agregar un evento de escucha al buscador
    buscador.addEventListener('input', function() {
        // Obtener el valor ingresado en el buscador
        const valorBuscador = this.value.toLowerCase();

        // Obtener todas las filas de la tabla
        const filas = document.querySelectorAll('#pedidos tr');

        // Recorrer todas las filas
        filas.forEach(function(fila) {
            // Obtener el texto de la fila
            const textoFila = fila.textContent.toLowerCase();

            // Verificar si el texto de la fila incluye el valor del buscador
            if (textoFila.includes(valorBuscador)) {
                // Si incluye el valor del buscador, mostrar la fila
                fila.style.display = '';
            } else {
                // Si no incluye el valor del buscador, ocultar la fila
                fila.style.display = 'none';
            }
        });
    });
});
