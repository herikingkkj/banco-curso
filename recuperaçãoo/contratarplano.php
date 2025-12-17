<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contratar plano</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Contratação do Plano</h1>
<p>preencha os dados abaixo para finalizar a contratação do plano</p>

<form method="post">
    <label>Nome completo</label><br>
    <input type="text" name="nome" required><br><br>

    <label>CPF</label><br>
    <input type="text" name="cpf" required><br><br>

    <label>E-mail</label><br>
    <input type="email" name="email" required><br><br>

    <label>Senha</label><br>
    <input type="password" name="senha" required><br><br>

    <button type="submit">Contratar plano</button>
</form>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $senha = $_POST["senha"];

    if (
        strlen($senha) < 8 ||
        !preg_match('/[A-Z]/', $senha) ||
        !preg_match('/[a-z]/', $senha) ||
        !preg_match('/[0-9]/', $senha) ||
        !preg_match('/[\W]/', $senha)
    ) {
        echo "<p>a senha precisa ter no mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e um caractere especial</p>";
    } else {
        echo "<p>plano contratado com sucesso</p>";
    }
}

?>

</body>
</html>
