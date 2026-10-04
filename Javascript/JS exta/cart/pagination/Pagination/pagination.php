<!DOCTYPE html>
<html>
<body>
   <form name="f1" method=get>
<?php
$str="";
require_once('dbfunctions.php');
$con=connOpen();
$pages=3;
if(!isset($_GET['flag'])){
   $flag=1;
}
else{
	$flag=$_GET['flag'];
}

if($flag!=1)
{
$prev=$flag-1;
print("<a href='pagination.php?flag=$prev'>Prev   </a>");
}
$form=($flag-1)*$pages;
$s="select * from emp";
$rs = mysqli_query($con, $s);
$rows = mysqli_num_rows($rs);
$noofpages=ceil($rows/$pages);
$s1="select * from emp Limit ".$form.",".$pages;
$r = mysqli_query($con, $s1);
$str="<table border=1>";
while($row = mysqli_fetch_array($r)) 
{
	 $str=$str."<tr>";
    $str=$str."<td>".$row[0]."</td>";
    $str=$str."<td>".$row[1]."</td>";
    $str=$str."<td>".$row[2]."</td>";
    $str=$str."<td>".$row[3]."</td>";
    $str=$str."<td>".$row[4]."</td>";
    $str=$str."<td>".$row[5]."</td>";
    $str=$str."<td>".$row[6]."</td>";
    $str=$str."<td>".$row[7]."</td>"; 
    $str=$str."<td><input type=checkbox name='salchk' onchange='document.f1.submit()' value='$row[0]'></td>";    
    $str=$str."</tr>";
}
print($str);

$imp;
for($i=1;$i<$noofpages+1;$i++){
	$imp=$i+1;
	print("<a href='pagination.php?flag=$i'>$i </a>");

}
if($flag!=$noofpages){
	$next=$flag+1;
print("<a href='pagination.php?flag=$next'>Next   </a>");
}
?>
</form>

</body>
</html>