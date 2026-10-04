
<?php
require_once('showDept.php');
?>
<html>
<head>
</head>
<body>
<form method="get" action="" name="form1">
<?php 
// if(isset($_GET['dept']))
//    echo $_GET['dept'];
?>
<!-- <input type="submit" name="submit" value="Show">  -->
<hr color=red>
<hr color=red>
<p align="right"><a href="logout.php">Logout</a></p>
Dept:
<select name="selectdept">
<option>Select</option>
<?php
if(isset($options))
	echo $options;

?>
</session_destroy();select>
<input type="submit" name="show" value="Show">

<?php
if($str1!=="")
{
	echo $str1;

}
?>

<?php
if(isset($errormsg1))
	if($errormsg1!="")
		echo "<font color=red>$errormsg1</font>";
if($str2!=="")
   echo $str2;

?>








</form>
</body>
</html>
