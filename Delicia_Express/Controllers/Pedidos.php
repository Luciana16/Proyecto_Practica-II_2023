<?php 
    class Pedidos extends Controller{
        public function __construct()
        {
            parent::__construct();
        }
        public function Pedidos()
        {
            // Se arma el array de datos que es enviado ala vista
            $data['page_tag'] = "Pedidos";
            $data['page_title'] = "Pedidos <small>Delicia Express</small>";
            $data['page_name'] = "pedidos";
            $data['page_functions_js'] = "functions_pedidos.js";
            $this->views->getView($this,"pedidos",$data);
        }
    }