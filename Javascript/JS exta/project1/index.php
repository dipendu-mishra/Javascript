<?php
$mysqli = new mysqli("localhost","root","root","testdb");
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$mysqli -> select_db("testdb");
$sql="select * from emp";
$result = $mysqli -> query($sql);

 while ($row = $result -> fetch_row())
  {
    echo  $row[0]." ".$row[1]."<br>";
  }

$mysqli -> close();
?>
