<?php

require "config.php";

$con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);
$name = $_GET['name'];

if(!$con)
{
    echo "No se pudo conectar a la base de datos";
}
else
{
  $sql = "SELECT pok_id, pok_name FROM pokemon WHERE pok_name LIKE '" . $name . "%'";
  $res = mysqli_query($con, $sql);
  $resultados = [];
  while($row = mysqli_fetch_assoc($res))
  {
    $resultados[] = array("id" => $row["pok_id"], "name" => $row["pok_name"]);
  }

  echo json_encode($resultados);
}
