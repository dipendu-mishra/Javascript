<?php
require_once('dbfunctions.php');
$str="";
connOpen();
$deptno="";
if (isset($_GET['selectdept']))
{
	$deptno=$_GET['selectdept'];
	$stmt=fetchByDept($deptno);
	$str="";
	foreach($stmt as $row)
	{
		$str=$str."<tr>";
		$str=$str."<td>".$row[0]."</td>";
		$str=$str."<td>".$row[1]."</td>";
		$str=$str."<td>".$row[2]."</td>";
		$str=$str."<td>".$row[3]."</td>";
		$str=$str."<td><input type='checkbox' checked></td>";
		$str=$str."<td><input type='radio' name='showDept' checked></td>";
		$str=$str."<td><a href=''>More...</td>";
		$str=$str."</tr>";

	}
}
if(isset($_GET['showbyDept']))
{
   $deptno=$_GET['showbyDept']; 

}


$stmt=getAllDept();
$options="";

$sd="";
if(isset($_GET['selectdept']))
    $sd=$_GET['selectdept']; 

	foreach($stmt as $row)
	{
		if($sd==$row[0])
		$options=$options."<option selected>$row[0]</option>";
	else
		$options=$options."<option >$row[0]</option>";
	}
	
	



?>
