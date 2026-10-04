<?php
$jsonstr = '{"Peter":35,"Ben":37,"Joe":43}';
$jsonobj=json_decode($jsonstr);
echo gettype($jsonobj);
echo "<br>";
echo $jsonobj->Peter;
?>