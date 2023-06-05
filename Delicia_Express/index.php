<?php
// Requiere el archivo
require_once 'Config/Config.php';
//  si no puede mostrar nada la variable url almacenara uno por defecto
$ruta = !empty($_GET['url']) ? $_GET['url'] : "home/index";
// Un array que nos sirve para dividir la ruta en partes y poder definirlas como controlador, metodo y parametros
$array = explode("/", $ruta);
// El indice 0 es un controlador
$controller = ucfirst($array[0]);
// El metodo por defecto tendra el valor Pedidos
$metodo = "Pedidos";
$parametro = "";
// Verificar si existe el array[1]
if (!empty($array[1])) {
    // Verificar si no esta vacio
    if (!empty($array[1] != "")) {
        // Sobreescribimos metodo
        $metodo = $array[1];
    }
}
// Lo mismo que metodo
if (!empty($array[2])) {
    if (!empty($array[2] != "")) {
        // Para recorrer todo el arreglo array
        for ($i = 2; $i < count($array); $i++) {
            //Sobreescribiendo parametro
            $parametro .= $array[$i] . ",";
        }
        // Para quitar la ultima coma
        $parametro = trim($parametro, ",");
    }
}
// Requiere los archivos 
require_once 'Config/App/Autoload.php';
require_once 'Config/Helpers.php';
// Para almacenar la ruta de la carpeta controllers concatenandola con la variable controller y agregandole la terminación .php
$dirControllers = "Controllers/" . $controller . ".php";
// Verificar si existe el controlador 
if (file_exists($dirControllers)) {
    // Requerimos dicho controlador
    require_once $dirControllers;
    // Instanciamos 
    $controller = new $controller();
    // Verificamos si existe metodo
    if (method_exists($controller, $metodo)) {
        // Llamamos al metodo y su posible parametro
        $controller->$metodo($parametro);
    } else {
        // Para indicar que no existe el metodo
        header('Location: '.BASE_URL.'errors');
        echo('No existe el metodo');
    }
} else {
    // Para indicar que no existe el controlador
    header('Location: ' . BASE_URL . 'errors');
    echo('No existe el controlador');
}
?>