<?php
session_start();
require_once('dbfunctions.php');
$str1="";
$str="";
$str2="";
$errormsg1="";
$x=0;
$options="";



if(isset($_GET['show']) || isset($_GET['selectdept']))
{
	if (isset($_GET['selectdept']) )
	{
	$deptno=$_GET['selectdept'];
	
	$recordexist=false;
    if (isset($_GET['pageno'])) {
		$pageno = $_GET['pageno'];
	} else {
		$pageno = 1;
	}
	$con=connOpen();
	$no_of_records_per_page = 3;
    $offset = ($pageno-1) * $no_of_records_per_page; 
    $total_pages_sql = "SELECT COUNT(*) FROM emp where deptno=$deptno";
	$result = mysqli_query($con,$total_pages_sql);
	$total_rows = mysqli_fetch_array($result)[0];
	$total_pages = ceil($total_rows / $no_of_records_per_page);

	
	$sql = "SELECT * FROM emp where deptno=$deptno LIMIT $offset, $no_of_records_per_page"; 
    $rs = mysqli_query($con, $sql);
	$str1="<table border=1>";	 
	while($row=mysqli_fetch_array($rs))
	{
		$str1=$str1."<tr>";
		$str1=$str1."<td>".$row[0]."</td>";
		$str1=$str1."<td>".$row[1]."</td>";
		$str1=$str1."<td>".$row[2]."</td>";
		$str1=$str1."<td>".$row[3]."</td>";
		$str1=$str1."<td><input type='checkbox' name='salcheckboxes[]' value='$row[3]'></td>";
		$str1=$str1."<td><input type='radio' name='showdet' value='$row[1]'></td>";
		$str1=$str1."<td><a href=''>More...</td>";
		$str1=$str1."<td><input type=checkbox name='addtocartchkbox[]' value='$row[1]'></td>";
		$str1=$str1."</tr>";
		$recordexist=true;
	}
	$str1=$str1."</table>";
	closeConn($con);	
	}
}
?>
    <ul class="pagination">
        <li><a href="?pageno=1">First</a></li>
        <li class="<?php if($pageno <= 1){ echo 'disabled'; } ?>">
            <a href="<?php if($pageno <= 1){ echo '#'; } else { echo "?pageno=".($pageno - 1); } ?>">Prev</a>
        </li>
        <li class="<?php if($pageno >= $total_pages){ echo 'disabled'; } ?>">
            <a href="<?php if($pageno >= $total_pages){ echo '#'; } else { echo "?pageno=".($pageno + 1); } ?>">Next</a>
        </li>
        <li><a href="?pageno=<?php echo $total_pages; ?>">Last</a></li>
    </ul>


