<?php
echo "<pre>";
$con = mysqli_connect('localhost','joseph','jobany5232','Prueba');

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
$name = $_POST['name'];
$email = $_POST['email'];
$id = $_POST['id'];

$sql = "UPDATE users SET email='$email',name='$name' where id = '$id'";

$result = mysqli_query($con, $sql);

 if ($result) {
        echo "El usuario se ha actualizado con éxito.";
    } else {
        echo "Error al actualizado: " . mysqli_error($con);
    }
mysqli_close($con);



?>
