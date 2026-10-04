<?php
require_once('carttable.php');
?>
<html>
<head>
	<title>Shop Cart</title>
	<style>
        body{
            margin-top: 3%;
            margin-left: 10%;
            margin-right: 10%;
            margin-bottom: 3%;
            color: black;
            background-color: white;
            border-style: double ; 
            border-color: black;
            align-content: center;
        }
        
        .mid{
          font-size: 15;
          padding: 20px 20px;
          text-align: center;
        }
    </style>
</head>
<body>
	<div class="mid">
		<p align="right"><a href="logout.php">Logout</a></p>
	<form method="get" action="" name="cat">
		<?php 
			if(isset($_GET['cat']))
				echo $_GET['cat'];
		?>
		Category:
		<select name="cat">
		<option>Select</option>
		<?php
		if(isset($options))
			echo $options;
		?>
		</select>
		<input type="submit" name="show" value="Show">
		<table border=1>
		<?php
		if($str1!=="")
		{
			echo $str1;

		}
		?>
		</table>
		<?php
		if($str2!=="")
		   echo $str2;

		?>
	</form>
</body>
</html>
