<?php
	DEFINE('DB_USER','root');
	DEFINE('DB_PASSWORD','root');
	DEFINE('DB_HOST','localhost');
	DEFINE('DB_NAME','testdb');
	$_GLOBAL['totsal']='';

	function conno(){
		$conn= mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
		return $conn;
	}

	function selByCat($conn,$cat){
		$sql = "SELECT * FROM devices WHERE cat='$cat'";		
		
		$rs = mysqli_query($conn, $sql);
		return $rs;
	}
	function getAllCat($conn)
	{
		$sql = "select distinct cat from devices";
	    $rs = mysqli_query($conn, $sql);
	    return $rs;
	} 
	function closeConn($conn)
	{
	  	mysqli_close($conn);
	}
	function fetchByDid($eno,$conn)
	{
		$sql = "SELECT *  from devices where did='$eno'";
		//echo "<br>".$sql."<br>";		
		$rs = mysqli_query($conn, $sql);
		return $rs;
	}

  	function newuserid($conn)
  	{
    	$sql = "SELECT max(did)+1 from devices";
    	//echo "<br>".$sql."<br>";    
    	$rs = mysqli_query($conn, $sql);
		$maxid=1;
		if($row=mysqli_fetch_array($rs))
		{
    	// print_r($row);
    	$maxid = (int) $row[0];

		}
    	return $maxid;
  	}
  	function insertDet($did,$pname,$desn,$brand,$price,$cat,$stock,$conn)
   	{
      	$ins = "insert into devices(did, pname, desn,brand,price,stock,cat) values ('$did','$pname','$desn','$brand',$price,$stock,'$cat')" ;
      	$status=mysqli_query($conn, $ins);
      	return $status;
   	}

?>