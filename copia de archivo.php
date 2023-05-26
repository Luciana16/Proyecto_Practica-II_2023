<?php
    class Pedidos extends Controllers{
        public function _construct()
        {
            parent::_construct();
            //Iniciar sesión
            session_start();
            //Generar un nuevo id de sesión
            session_regenerate_id(true);
            //Comprobar que existe 
            if(empty($_SESSION['login']))
            {
                header('Location: '.base_url().'/login');
                die();
            }
            /*Funcion que extrae permisos de la base de datos
            Hay que programar esta función*/
            getPermisos();
        }
        public function Pedidos{
            //verificar si esta varable de seción esta bacia
            if(empty($_SESSION['permisosMod']['r'])){
                //no tiene permisos de lectura entonces redirecciona al "dashboard"
                header("Location:".base_url().'/dashboard');
            }
            //se arma el array de datos que se va ala vista
            $data['page_tag'] = "Pedidos";
            $data['page_title'] = "Pedidos <small>Delicia Express</small>";
            $data['page_name'] = "pedidos";
            $data['page_functions_js'] = "functions_pedidos.js";
            //Llamamos ala vista
            $this->views->getView($this,"pedidos",$data);
        }
    }
?>