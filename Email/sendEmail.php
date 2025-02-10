<?php
include "../connect.php";
$orderNumber = filterRequest("orderNumber"); 
$email = filterRequest("email"); 
require_once 'mail.php';
$mail->From = 'mohamedyosry701@gmail.com';
$mail->FromName = 'PCX';
$mail->addAddress($email); 
$mail->Subject = 'message from PCX';
$mail->Body    = '<p>Welcome Sir, <br> Here Is Your Order Number</p> '.$orderNumber;
$mail->send();
if(!$mail->send()) {
    echo json_encode('Message could not be sent.') ;
    echo json_encode('Mailer Error: ')  . $mail->ErrorInfo;
} else {
    echo json_encode('Message has been sent') ;
}















?>