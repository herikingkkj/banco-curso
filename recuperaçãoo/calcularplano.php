<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cálculo do Plano</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>Pet Care</header>
    <h1>Cálculo do Plano</h1>
    <p>para calcular o plano ideal para o seu pet, preencha as informações abaixo:</p>

    <?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $qtd = intval($_POST["qtd"]);
    $tipos = $_POST["tipo"];
    $idades = $_POST["idade"];
    $pesos = $_POST["peso"];
    $doencas = $_POST["doenca"];

    $total = 0;

    for ($i = 0; $i < $qtd; $i++) {

        if ($tipos[$i] == "cao") {
            $valor = 60;
        } else {
            $valor = 55;
        }

        if ($idades[$i] > 5) {
            $valor += 10;
        }

        if ($pesos[$i] > 8) {
            $valor += ($pesos[$i] - 8) * 2;
        }

        if ($doencas[$i] == "sim") {
            $valor *= 2;
        }

        $total += $valor;
    }

    if ($qtd == 2) {
        $total *= 0.93;
    } elseif ($qtd == 3) {
        $total *= 0.88;
    } elseif ($qtd == 4) {
        $total *= 0.83;
    } elseif ($qtd >= 5) {
        $total *= 0.75;
    }

    echo "Valor total do plano: R$ " . number_format($total, 2, ',', '.');
}

?>
</body>
</html>