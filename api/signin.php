<?php

include '../connect.php';

$email = filterRequest("email");
$password = sha1($_GET['password']);

$statement = $connect->prepare(" SELECT * FROM `users2` WHERE email =? AND password =?  ");
$statement->execute(array($email, $password));
$data = $statement->fetch(PDO::FETCH_ASSOC);

$count = $statement->rowCount();
if ($count > 0) {
    echo json_encode(array("status" => "success",  "data" => $data));
} else {
    echo json_encode(array("status" => "fail"));
}
