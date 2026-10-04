 <?php
session_start();
require_once('cartdb.php');
$str1="";
$str="";
$str2="";
$s1="";

$x=0;
$options="";
$sd="";
$_GLOBAL['gtotal']="";
$recordexist=false;
if(isset($_GET['cat'])){
    $sd=$_GET['cat'];

}
$pages=3;
if(!isset($_GET['flag'])){
   $flag=1;
}
else{
	$flag=$_GET['flag'];
}

$form=($flag-1)*$pages;
$con=conno();
$rs=getAllCat($con,$sd);
closeConn($con);
while($row=mysqli_fetch_array($rs))
{
	if($sd==$row[0])
		$options=$options."<option selected>$row[0]</option>";
	else
	$options=$options."<option >$row[0]</option>";
 }


if(isset($_GET['show']) || isset($_GET['cat']))
{
	if (isset($_GET['cat']) )
	{
	$cat=$_GET['cat'];
	$con=conno();
	$rs=selByCat($con,$cat);
	$rows = mysqli_num_rows($rs);
	$noofpages=ceil($rows/$pages);
	$s1="select * from devices where cat='$cat' Limit ".$form.",".$pages;
	$lim=mysqli_query($con,$s1);
	$recordexist=false;
	$str1="<table border=1>";

	 
	while($row=mysqli_fetch_array($lim))
	{
		$x=$row[0];
		$str1=$str1."<tr>";
		$path="images/$x.jpg";
		if(!file_exists($path))
		{
			$path="images/defaultmobile.jpg";
		}
	

		$str1=$str1."<td><img src='$path' height=50 width=50></td>";
		$str1=$str1."<td>".$row[0]."</td>";
		$str1=$str1."<td>".$row[4]."</td>";
		$str1=$str1."<td>".$row[1]."</td>";
		$str1=$str1."<td>".$row[2]."</td>";
		$str1=$str1."<td>".$row[3]."</td>";

		$str1=$str1."<td><a href=''>More...</td>";
		$str1=$str1."<td><input type=checkbox name='devbox[]' value='$row[2]'></td>";
		$str1=$str1."</tr>";
		$recordexist=true;
	}
	$str1=$str1."</table>";

	if($flag!=1)
	{
	$prev=$flag-1;
	$str1=$str1."<a href='cartmain.php?flag=$prev&cat=$cat'>Prev   </a>";
	}
	$imp;
	for($i=1;$i<$noofpages+1;$i++){
		$imp=$i+1;
		$str1=$str1."<a href='cartmain.php?flag=$i&cat=$cat'>$i </a>";
	}
	if($flag!=$noofpages){
		$next=$flag+1;
		$str1=$str1."<a href='cartmain.php?flag=$next&cat=$cat'>Next   </a>";
	}
	closeConn($con);
	}
}
if($recordexist==true)
	{
	$str1=$str1. "<br><input type='submit' name='edit' value='Edit'>";
	
	
	$str1=$str1. " <input type='submit' name='addcart' value='Add to Cart'>";
	}


if(isset($_GET['edit']))
{
	if(isset($_GET['showdet']))
	{
		$errormsg1=="";
		$s="?empno=".$_GET['showdet'];
		header("location:editemp.php".$s);      
	}
	else
		$errormsg1="Please select one employee.";
}


// Add To Cart

if(isset($_GET['addcart']) || isset($_SESSION['cart']))
	{

		$cart=array();
		if(isset($_SESSION['cart']))
			$cart=(Array)$_SESSION['cart'];	
				
		$newarray=array();
		if(isset($_GET['devbox']))
		{
			$noe=count($cart);
			$i=0;
			foreach ( $_GET['devbox'] as $value )
			{			
				$newarray[$i]=$value;
				$i=$i+1;			
			}
		}
		$devcart=array_unique(array_merge($cart,$newarray), SORT_REGULAR);
		$_SESSION['cart']=$devcart;
		$str2="<table border=1>";
		$i=1;
		$quan=0;
		$_SESSION['sum']=0;
		$sum=$_SESSION['sum'];
		$con=conno();
		foreach($devcart as $value)
		{
				$str2=$str2."<tr>";
				$str2=$str2."<td>".$i++."</td>";
				$str2=$str2."<td>".$value."</td>";
				$str2=$str2."<td><select name='quan'>
									<option value=0>Delete</option>
									<option value=1 selected>1</option>
									<option value=2>2</option>
									<option value=3>3</option>
									<option value=4>4</option>
								</select><td>";
				if(isset($_GET['quan']))				
					$sum=$sum+((int)$value*(int)$_GET['quan']);

				$rs=fetchByDid($value,$con);
				if($row=mysqli_fetch_array($rs))
				{
					$str2=$str2."<td>".$row['brand']."</td>";
					$str2=$str2."<td>".$row['pname']."</td>";
				}
				$str2=$str2."</tr>";
		}
		closeConn($con);
		$str2=$str2."</table>"."Total bill amount is: ". $sum;
}
?>