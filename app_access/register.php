<?php

//FILE EXISTING IN HTDOCS - XAMPP - NOT WORKING FROM HERE

// Importing the DB configuration
include 'DB_Config.php';
 
// Opening MYSQL connection
$con = mysqli_connect($Host,$User,$Pass,$Database);
 
 // Getting the received JSON into json variable.
$json = file_get_contents('php://input');
 
 // decoding the received JSON and store into obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

 // Populate User name from JSON $obj array and store into $name.
 $name = $obj['name'];

// Checking if account already exists by checking the emails
$checkAcc = "SELECT * FROM register WHERE email='$email'";

$check = mysqli_fetch_array(mysqli_query($con,$checkAcc));

if(isset($check)){

    $EmailExistMSG = 'An account with this e-mail address already exists. Please try again.';
    $EmailExistJson = json_encode($EmailExistMSG);
    echo $EmailExistJson ; 

 }
 else{
 
 // If e-mail doesn't exist, add acount into database
$Sql_Query = "insert into register (name,email,password) values ('$email','$password', '$name')";
 
 if(mysqli_query($con, $Sql_Query)){
 
 // User registered succesfully => display message
$MSG = 'User Registered Successfully' ;
$json = json_encode($MSG);
 echo $json ;
 }

 else{
 
 echo 'Try Again';
 
 }
 }

 //Closing the MYSQL connection
 mysqli_close($con);
?>