<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PASSWORD', 'root');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'testdb');
$host='localhost';
$user='root';
$dbname='testdb';
$pwd='root';
$pdo='';
$dsn="mysql:host=$host;dbname=$dbname;charset=UTF8";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];
function connOpen()
{
try{
  global $dsn,$user,$pwd,$pdo;
$pdo=new PDO($dsn,$user,$pwd);
if($pdo)
{
  echo"Connection  established successfully";
}
}
catch(PDOException $e)
{
  echo $e->getMessage();
}
}

function fetchByDept($dept)
{
  global $pdo;
  $sql = "SELECT job,empno,ename,sal  from emp where deptno=$dept";
  $stmt=$pdo->query($sql)->fetchAll();
  return $stmt;
//   $rs = mysqli_query($conn, $sql);
// return $rs;
}

function getAllDept()
{
  global $pdo;
  $stmt=$pdo->query("SELECT distinct deptno from emp")->fetchAll();
  return $stmt;  
} 

?>

