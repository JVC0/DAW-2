<?php
echo "<pre>";
$con = mysqli_connect('localhost','joseph','jobany5232','Prueba');


$id = $_POST['id'];

$sql = "DELETE FROM users WHERE id=$id";

$result = mysqli_query($con, $sql);

if ($result) {
    echo "El usuario se ha registrado con éxito.";
} else {
    echo "Error al insertar: " . mysqli_error($con);
}


mysqli_close($con);
?>
