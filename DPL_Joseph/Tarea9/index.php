<?php
echo "<pre>";
$con = mysqli_connect('localhost','joseph','jobany5232','Prueba');
print_r($con);
$sql = "INSERT INTO users (name, email) VALUES ('Juan', 'juan@gmail.com')";

$result = mysqli_query($con, $sql);
print_r($result)
mysqli_close($con);

$sql = "UPDATE user SET email='juan@hotmail.com' ;

?>
