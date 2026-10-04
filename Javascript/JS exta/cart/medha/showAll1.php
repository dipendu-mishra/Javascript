<?php
require_once('dbfunctions1.php');
$str="";
$x = 0;
$tt = connOpen();
?>
<html>
<head>
</head>
<body>
  <form method="GET">
    <table border=1>
    Category:
    <?php
    $s="select distinct(category) from cart";

    $rs = mysqli_query($tt, $s);
    print("<select name='catg'>");
          print("<option>Select</option>");
  while($row = mysqli_fetch_array($rs)){
    if(isset($_GET['catg']))
    {
    if($_GET['catg']==$row[0])
    print("<option value='$row[0]' selected>$row[0]</option>");
    else
    print("<option value='$row[0]' >$row[0]</option>");
    }
    else
    print("<option value='$row[0]' >$row[0]</option>");

}
    print("</select>");
    ?>


  <input type = submit name=submit value=Show>

<?php
if (isset($_GET['submit']) ||isset($_GET['cal']))
{
$c = $_GET['catg'];
$cc = "select id,productname,price from cart where category='$c'"; 
$r = mysqli_query($tt,$cc);
$str="<table border=1>";
while($row = mysqli_fetch_array($r)){
    $str=$str."<tr>";
    $str=$str."<td>".$row[0]."</td>";
    $str=$str."<td>".$row[1]."</td>";
    $str=$str."<td>".$row[2]."</td>";  
    $str=$str."<td>"."<input type=checkbox name='check[]' value=$row[2]>"."</td>";
    $str=$str."</tr>"; 

}
  }
print($str);


if (isset($_GET['cal']))
{
  if(isset($_GET['check']))
  {
    foreach( $_GET['check'] as $value )
    {
      $x=$x+(int)$value;     
    }

   print("Total Price of Selected Items: ".$x);
  }

}

?>

</table>
<input type=submit name=cal value=TotalPrice>
  </form>


</body>
</html>