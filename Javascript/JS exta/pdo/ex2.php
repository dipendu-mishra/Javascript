<?php
// header('Content-type: text/javascript');
$host = 'localhost';
$db   = 'testdb';
$user = 'root';
$pass = 'root';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try
{
    $pdo = new PDO($dsn, $user, $pass, $options);
   // var_dump($pdo);
    $deptno=30;
    $job="SALESMAN";
    $stmt = $pdo->prepare("SELECT empno,ename,job,sal,deptno FROM
     emp WHEeeRE deptno = :deptno AND job = :job ");     
   // var_dump($stmt);
    $stmt->execute(['deptno' => $deptno, 'job' => $job]);    
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // fetch() , FETCH_BOTH, FETCH_NUM
    //var_dump($data);
    //print_r($data);
    echo json_encode($data,JSON_PRETTY_PRINT);
   // echo "<br>Fetched successfully";
 }
catch (PDOException $e) 
{
    
    // throw new PDOException($e->getMessage(), (int)$e->getCode());
    echo "Error is:".$e->getMessage(); 
    echo "Please recitfy it.";
    
}
finally
{
    echo "Thank You";
}
?>