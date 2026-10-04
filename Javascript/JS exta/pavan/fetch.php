<?php
// $result = $stmt->fetchAll(PDO::FETCH_OBJ);
// $result = $stmt->fetch(PDO::FETCH_OBJ);

//PDOStatement::fetch — Fetches the next row from a result set

//PDOStatement::fetchAll — Returns an array containing all of the result set rows
//https://www.ibm.com/docs/en/db2/9.7?topic=rqrs-fetching-rows-columns-from-result-sets
header('Content-Type: application/json');

$err='';
$dbHost="localhost";  
$dbName="testdb";  
$dbUser="root";  
$pwd="root";  
$dsn = "mysql:host=$dbHost;dbname=$dbName;";
$options = [
PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
PDO::ATTR_EMULATE_PREPARES   => false,];
try 
{
     $pdo = new PDO($dsn, $dbUser, $pwd, $options);
} 
catch (PDOException $e) 
{
    //  throw new PDOException($e->getMessage(), (int)$e->getCode());
    echo "Error is:".$e->getMessage(); 
}

$sql = "select * from emp " ;
$stmt=$pdo->prepare($sql);
$stmt->execute();
$rec=$stmt->fetch();
var_dump($rec);
echo json_encode($rec,JSON_PRETTY_PRINT);
?>