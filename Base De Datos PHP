<?php

$server = 'localhost';
$username = 'root';
$password = '';
$base_de_datos = 'base_de_datos';

try {
  $conn = new PDO("mysql:host=$server;dbname=$base_de_datos;", $username, $password);
} catch (PDOException $e) {
  die('Conección fallida: ' . $e->getMessage());
}

?>