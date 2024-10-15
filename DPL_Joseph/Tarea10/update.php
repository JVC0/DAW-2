<?php
echo "<pre>";
$con = mysqli_connect('localhost','joseph','jobany5232','Prueba');

$name = $_POST['name'];
$email = $_POST['email'];
$id = $_POST['id'];

$sql = "UPDATE user SET email=$name,name=$name where id = $id";

$result = mysqli_query($con, $sql);

 if ($result) {
        echo "El usuario se ha registrado con éxito.";
    } else {
        echo "Error al insertar: " . mysqli_error($con);
    }
mysqli_close($con);



?>
