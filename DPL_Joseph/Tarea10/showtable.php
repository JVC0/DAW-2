<?php

$con = mysqli_connect('localhost', 'joseph', 'jobany5232', 'Prueba');


if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT id, name, email FROM users";
$result = mysqli_query($con, $sql);


echo "<div style='display: flex; flex-wrap: wrap;'>"; 

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {

        echo "
        <div style='border: 2px solid #000; padding: 20px; margin: 10px; width: 200px; box-shadow: 2px 2px 5px rgba(0,0,0,0.2);'>
            <h3>ID: {$row['id']}</h3>
            <p><strong>Nombre:</strong> {$row['name']}</p>
            <p><strong>Email:</strong> {$row['email']}</p>
        </div>";
    }
} else {
    echo "No se encontraron resultados.";
}

echo "</div>"; 

mysqli_close($con);
?>
