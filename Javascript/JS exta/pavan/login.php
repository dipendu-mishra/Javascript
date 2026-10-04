<?php 
$err='';
if(isset($_GET['submit'])){

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
     throw new PDOException($e->getMessage(), (int)$e->getCode());
    echo "Error is:".$e->getMessage(); 
}


$data=['id'=>$_GET['user'],'pwd'=>$_GET['pwd']];
$sql = "select userid,password from login where userid=:id and password=:pwd" ;
$stmt=$pdo->prepare($sql);
$stmt->execute($data);
$rec=$stmt->fetch();
var_dump($rec);
    if($rec==false)
    {
    
        $err=$err.'<span style="color:red;">You have entered wrong login credentials!!</span>';
        
    }
    else 
    {
        header('location:next.php');
    }

}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>
</head>
<body class="style" align="center">
    <style>
    .style {
    background-color: #7FC8A9;
    align-content: center;
    }   
    </style>

<form method="GET">
    <table align="center">
        <tr>
            <td>
                <i>USER ID</i> 
            </td>
            <td>
                <input type="text" name="user">
            </td>
        </tr>
        <br>
        <tr>
            <td>
                PASSWORD
            </td>
            <td>
                <input type="password" name="pwd">
            </td>
        </tr>
    </table>
    <a href="forgotsql.php">Forgetten Password?</a>
    <a href="regpage.php">New User? Please SIGN UP</a>
    <br>
    <br>
    <input type="submit" name="submit" value="Sign In">
    &nbsp;
    &nbsp;
    <input type="reset" name="Reset">
    <br>
    <?php echo $err; ?>
</form>

</body>
</html>