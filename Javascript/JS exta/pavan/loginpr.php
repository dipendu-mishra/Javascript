
<?php

if(isset($_POST['user']) && isset($_POST['pass']))
{

$username = $_POST['user'];
$password = $_POST['pass'];

//echo $username."<br>";
//echo gettype($password);
// var_dump($username);
// var_dump($password);
// to prevent mysql injection
echo "<hr color=red>";
$username = stripcslashes($username);
$password = stripcslashes($password);
// var_dump($username);
// var_dump($password);
//echo 

  // connect to server and select database
    $con = mysqli_connect("localhost", "root", "root","test1");
    //var_dump($con);
    if($con==false)
    {
      //echo mysql_error();
      die("<br>End of Appalication");

    }  

  //mysqli_select_db("login");

   // query the database for user
   $sql="select * from user where username = '$username' and password = '$password' ";
   //echo $sql;
   $result = mysqli_query($con,$sql);   
   //var_dump($result); 
   $flag=false;
   while($row=mysqli_fetch_array($result))
   {
      // echo $row[0].":".$row[1];
      $flag=true;
   }
   mysqli_close($con);
   if($flag==true)
   {
     echo "Valid";
   }
    else
    {
       echo "Invaild";
    }
// $row = mysql_fetch_array($result);
// if ($row['username'] == $username && $row['password'] == $password){
// echo "login successful welcome" .$row['username'];
//             } else {
//             echo "failed to login";   
//             }



}

         	     ?>

