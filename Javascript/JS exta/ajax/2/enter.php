<?php
//fetch.php
if(isset($_POST["id"]))
{
 $id=(int)$_POST['id'];
 $name=$_POST['name'];
 $cat=$_POST['cat'];
 $des=$_POST['des'];
 $price=(float)$_POST['price'];
 $qty=(int)$_POST['qty'];


 $connect = mysqli_connect("localhost", "root", "password", "test");
 $query = "insert into mobile values($id,'$name','$cat','$des',$price,$qty)";
 //echo $query;
 $result = mysqli_query($connect, $query);
 if($result==true){
 	$data["msg"]="Updated succesfully";
 }
 else{
 	$data["f"]=$name;
 }

mysqli_close($connect);
echo json_encode($data);
//var_dump(json_encode($data));
}
?>
