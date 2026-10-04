<?php
$string = file_get_contents("data.json");
$json_a = json_decode($string, true);

//print_r($json_a);
//var_dump($json_a);

echo $json_a['John']['status']."<br>";
echo $json_a['Jennifer']['status'];

?>