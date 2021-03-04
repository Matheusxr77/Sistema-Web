<?php 

//Coletar as informações
$nome = $_POST["nome1"]; //$_GET["nome1"];
$email = $_POST["email"];//$_GET["email"];
$senha = $_POST["senha"];//$_GET["senha"];

echo $nome." " . $email." " . $senha. " ";

//Verificar se as informações existem no banco de dados

//$achou = bd.excutamysql("SELECT * FROM usario WHERE nome = '".$nome."' AND senha = '".$senha ."'" );
//$achou = true;

//Direcionar a saida 

//if($achou){
//    header("Location: http://www.google.com");
//}else{
//    header("Location: /../Códigos HTML/pagina_login.html");
//}

//exit();