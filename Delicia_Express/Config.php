<?php
const HOST = "localhost";
const USER = "root";
const PASS = "";
const DB = "base_de_datos";
try {
    $conn = new PDO("mysql:host=$server;dbname=$base_de_datos;", $username, $password);
  } catch (PDOException $e) {
    die('Conección fallida: Error ' . $e->getMessage());
  }
?>