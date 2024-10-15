<?php
echo "<pre>";
$con = mysqli_connect('localhost','joseph','jobany5232','Prueba');


$id = $_POST['id'];

$sql = "DELETE FROM users WHERE id=$id";

$result = mysqli_query($con, $sql);

if ($result) {
    echo "El usuario se ha eliminado con éxito.";
} else {
    echo "Error al eliminar: " . mysqli_error($con);
}


mysqli_close($con);
?>
