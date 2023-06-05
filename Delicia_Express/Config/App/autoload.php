<?php
// Cargar las clases de forma automatica
spl_autoload_register(function($class){
    // Verifica que exista el archivo
    if (file_exists("Config/App/".$class.".php")) {
        //Requiere el archivo
        require_once "Config/App/" . $class . ".php";
    }
})
?>