<?php
class Controller{
    // Es necesario para solucionar las advertencias
    protected $views, $model;
    // Constructor que llama a la función cargarModel
    public function __construct(){
        // Instanciamos una vista
        $this->views = new Views();
        $this->cargarModel();
    }
    // Función para cargar el modelo
    public function cargarModel(){
        // Obtiene el nombre de la clase de cada controlador y la concatena con "Model"
        $model = get_class($this)."Model";
        // Guarda la ruta generada con la variable model
        $ruta = "Models/".$model.".php";
        // Verificar si existe ese archivo
        if (file_exists($ruta)) {
            // Requerimos esa ruta
            require_once $ruta;
            // Instanciamos
            $this->model = new $model();
        }
    }
}
 
?>