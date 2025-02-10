<?php
include '../connect.php';
$name = filterRequest("name");
$email = filterRequest("email");
$phone_number = filterRequest("phoneNumber");
$password = sha1($_GET['password']);
$stat = $connect->prepare("SELECT * FROM  `users2` WHERE  email = ?");
$stat->execute(array($email));
$cont = $stat->rowCount();
if ($cont > 0) {
    echo json_encode(array("status" => "fail","message"=> "email already registered"));
} else {
    $statement = $connect->prepare("INSERT INTO `users2`(`name`, `email`, `password`, `phone_number` ) VALUES (?,?,?,?)");
    $statement->execute(array($name, $email, $password, $phone_number));
    $count = $statement->rowCount();
    if ($count > 0) {
        echo json_encode(array("status" => "success"));
    } else {
        echo json_encode(array("status" => "fail"));
    }
}


