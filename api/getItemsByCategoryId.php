<?php
include "../connect.php";
$statement = $connect->prepare("SELECT * FROM `categories`");
$statement->execute();
$data = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode(array("status" => "success",  "data" => $data));
?>