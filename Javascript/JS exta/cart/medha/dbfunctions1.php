<?php

DEFINE ('DB_USER', 'root');

DEFINE ('DB_PASSWORD',"root");

DEFINE ('DB_HOST', 'localhost');

DEFINE ('DB_NAME', 'testdb');

function connOpen()

{

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

return $conn;

}


function closeConn($conn)

{

mysqli_close($conn);

}

?>