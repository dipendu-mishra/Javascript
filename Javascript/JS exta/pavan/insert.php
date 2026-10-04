<?php 
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
try {
     $pdo = new PDO($dsn, $dbUser, $pwd, $options);
} 
catch (PDOException $e) 
{
    //throw new PDOException($e->getMessage(), (int)$e->getCode());
    echo "Error is:".$e->getMessage(); 
    die('Thank you');
}

try
{
    $sql = "INSERT INTO login (userid, password) VALUES (?, ?)" ;
    $stmt=$pdo->prepare($sql);   
    $stmt->bindParam(1, $name);
    $stmt->bindParam(2, $value);
    $name = 'gtytry@gmail.com';
    $value = 'ggy';
    $status=$stmt->execute();
    echo $status;
    // if($status==true)
    // echo "Added 1";

    // // insert another row with different values
    // $name = 'hh@gmail.com';
    // $value = 'hh';
    // $status=$stmt->execute();
    // if($status==true)
    // echo "Added 2";
    
}
catch(PDOException $e)
{
    //throw new PDOException($e->getMessage(), (int)$e->getCode());
    echo "Error is:".$e->getMessage(); 
}
    


?>
