<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PASSWORD', 'root');
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
function getAllCategory($conn)
{
$sql = "SELECT distinct job  from emp ";
$rs = mysqli_query($conn, $sql);
return $rs;
  
}
function getProductsByCatg($conn, $catg)
{
$sql = "select empno,ename,sal from emp where job='$catg'";
echo $sql;
$rs = mysqli_query($conn, $sql);
return $rs;
}


?>
