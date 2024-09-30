<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="get.php" enctype="multipart/form-data">
        Nombre: <input type="text" name="usuario">
        <br>
        Fichero: <input type="file" name="Fichero">
        <br>
        <input type="submit" value="Send">
    </form> 
    <form method="get" action="post.php" enctype="multipart/form-data">
        Nombre: <input type="text" name="usuario">
        <br>
        Fichero: <input type="file" name="Fichero">
        <br>
        <input type="submit" value="Send">
    </form> 
</body>
</html>
