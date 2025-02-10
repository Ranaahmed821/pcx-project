<?php
$dsn = "mysql:host=localhost;dbname=pcx_m_y";
$user = "root";
$password = "";
$option = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8mb4",

);
try{
    $connect = new PDO($dsn, $user , $password , $option ); // to connect to dataBase
    $connect->setAttribute(PDO::ATTR_ERRMODE , PDO:: ERRMODE_EXCEPTION ); 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS , GET");


}catch( PDOException $e){
    echo $e-> getMessage() ;

}



function filterRequest($requestName)
{
    return  htmlspecialchars(strip_tags($_GET[$requestName]));
}
?>
