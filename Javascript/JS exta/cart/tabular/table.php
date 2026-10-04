<?php
require_once ('dbfunc.php');

$str="";
$errmsg="";
$table="";
$con=connOpen();
$rs=getAllCategory($con);
closeConn($con);
while($row=mysqli_fetch_array($rs))
{
  if(isset($_GET['catg']))
  {
  $catg=$_GET['catg'];
  echo "<br>$catg:$row[0]";
  if($catg==$row[0])
  $str=$str."<option selected>$row[0] </option>";
  else
  $str=$str."<option>$row[0] </option>";
  }
  else
  $str=$str."<option>$row[0] </option>";
}


if(isset($_GET['sub']) && isset($_GET['catg']))
{
    $catg=$_GET['catg'];
    if($catg!="Select")
    {
        $con=connOpen();
        $rs=getProductsByCatg($con,$catg);
        closeConn($con);
        $table="<br><table border=1>";
        while($row=mysqli_fetch_array($rs))
        {
            $table=$table."<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td></tr>";
        }
        $table=$table."</table>";       
    }
    else
    {
       $errmsg="<font color=red> Please select catg...";
    }


}


?>
<html>
<body>
<form method="">
Category
 <select name="catg">
<option>Select </option>
<?php echo $str; ?>
</select><input type=submit name=sub value=submit>
<?php 
if(isset($table))
{
    if(!$table=="")
      echo $table;
}
?>


<?php echo $errmsg; ?>
</form>
</body>
</html>