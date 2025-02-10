<?php
include "../connect.php";
$id = filterRequest("id");

$statement = $connect->prepare("SELECT * FROM `items` WHERE id = ?");
$statement->execute(array($id));
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(array("status" => "success",  "data" => $data));
