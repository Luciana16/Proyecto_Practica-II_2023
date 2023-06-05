<?php
class Pedidos extends Query{
    public function __construct()
    {
        parent::__construct();
    }
    public function getPedidos()
    {
        $sql = "SELECT * FROM Pedidos";
        $data = $this->select($sql);
        return $data;
    }
}

?>