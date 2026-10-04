<?php
// $result = $stmt->fetchAll(PDO::FETCH_OBJ);
// $result = $stmt->fetch(PDO::FETCH_OBJ);
// Default: Both

//PDOStatement::fetch — Fetches the next row from a result set

//PDOStatement::fetchAll — Returns an array containing all of the result set rows
//https://www.ibm.com/docs/en/db2/9.7?topic=rqrs-fetching-rows-columns-from-result-sets
//header('Content-Type: application/json');

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
$records=$stmt->fetchAll();
//var_dump($records);
//print_r($records);

//echo json_encode($records,JSON_PRETTY_PRINT);

echo "<table border=1>";
foreach($records as $rec)
{   $tr="<tr>";
    $td="";
   // print_r ($rec);
   // echo "<hr color=red>";
   // $td="<td>$rec[0]</td><td>$rec[1]</td>";
    foreach($rec as $key => $value)
    {
        $td=$td."<td>".$value."</td>";
    }
    $tr=$td."</tr>";
    echo $tr;
}
echo "</table";



?>