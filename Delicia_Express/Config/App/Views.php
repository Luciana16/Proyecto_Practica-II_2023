<?php
class Views{
    // Función para mostrar la vista
    public function getView($ruta, $vista, $data="")
    {
        if ($ruta == "home") {
            $vista = "Views/".$vista.".php";
        }else{
            $vista = "Views/".$ruta."/".$vista.".php";
        }
        require $vista;
    }
}
?>