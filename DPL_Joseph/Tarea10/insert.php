<?php
echo "<pre>";


$con = mysqli_connect('localhost', 'joseph', 'jobany5232', 'Prueba');


if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}


$name = $_POST['name'];
$email = $_POST['email'];


$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

$result = mysqli_query($con, $sql);

if ($result) {
    echo "El usuario se ha registrado con éxito.";
} else {
    echo "Error al insertar: " . mysqli_error($con);
}


mysqli_close($con);
?>

