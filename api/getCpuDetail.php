<?php
include "../connect.php";
$statement = $connect->prepare("SELECT * FROM `items`WHERE `categories_id`=6");
$statement->execute();
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

$selected_cpu = array();
$selected_cpu = [];
for ($x = 0; $x <= count($data); $x++) {
    // echo "The number is: " . var_dump($data[$x]["description"]) . ". <br>";
    if (strpos(strval($data[$x]["description"]), "AM") !== false) {
        // echo "The number is: " . var_dump($data[$x]["description"]) . ". <br>";
        array_push($selected_cpu, $data[$x]);
    } else {
        // echo "The number is: " . var_dump($data[$x]["description"]) . ". <br>";
        array_push($selected_cpu, $data[$x]);
    }
}
echo json_encode(array("status" => "success",  "data" => $selected_cpu));
