<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h2>Registrar Usuario</h2>
    <form action="insert.php" method="POST">
        Nombre: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        <input type="submit" value="Insertar Usuario">
    </form>

    <h2>Actualizar informacion de usuario </h2>
    <form action="update.php" method="POST">
        id: <input type="text" name="id" required><br><br>
        Nombre: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        <input type="submit" value="Actualizar Usuaria">
    </form>
    <h2>Eliminar Usuario</h2>
    <form action="delete.php" method="POST">
        id: <input type="text" name="id" required><br><br>
        Nombre: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        <input type="submit" value="Eliminar Usuario">
    </form>

</body>
</html>