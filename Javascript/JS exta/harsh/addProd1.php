<?php
  $msg="";

  require_once('cartdb.php');
  $conn=conno();

  $did= newuserid($conn);
  closeConn($conn);
  if(isset($_GET['sublogin3']) )
  {
    
      $pid=$_GET['did'];
      
      $conn=conno();
      
      if(isset($_FILES["photo"]) && $_FILES["photo"]["error"] == 0){
        $allowed = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");
        $filename = $_FILES["photo"]["name"];
        $filetype = $_FILES["photo"]["type"];
        $filesize = $_FILES["photo"]["size"];
        $filetmp  = $_FILES['photo']['tmp_name'];
        $currentDirectory=getcwd();
        //echo getcwd();
        $uploadPath = $currentDirectory . "/images/" . basename($pid.'.jpg'); 
        echo $uploadPath;
        
        $photo=$_FILES('photo');
        
        // Verify file extension
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        if(!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
    
        // Verify file size - 5MB maximum
        $maxsize = 5 * 1024 * 1024;
        if($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
    
        // Verify MYME type of the file
        if(in_array($filetype, $allowed)){
            // Check whether file exists before uploading it
            if(file_exists($uploadPath.$filename)){
                echo $filename . " is already exists.";
            } else{
                move_uploaded_file($filetmp,$uploadPath);
                echo "Your file was uploaded successfully.";
                echo "<a href='$uploadPath' download> Download File Here...</a>";
            } 
        } else{
            echo "Error: There was a problem uploading your file. Please try again."; 
        }
    } 
      //$x=$_FILES('photo');
     $x=insertDet($_GET['pname'],$_GET['brand'],$_GET['desn'],$_GET['price'],$_GET['did'],$_GET['cat'],$_GET['stock'],$conn);
      echo $x;
      closeConn($conn);
      header('location: loginPage.php');

  }

?>


<html>
<head>
    <title>
        Registration Page
    </title>
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
	<form name="reg" method="GET" action="">
        <div class="mid">
          <br>
          <h2>Add Product Page</h2>
          <br>
          <strong>Product Id:</strong> &nbsp;&ensp;&ensp;<input type="text" size=20 name="did" value='<?php echo $did ?>' readonly > &nbsp;&ensp;&ensp;
          <strong>Category:</strong> <select name="cat">
            <option value="Mobile">Mobile</option>
            <option value="TV">TV</option>
          </select><br><br>
          <strong>Brand Name:</strong> &nbsp;&ensp;&ensp;<input type="text" size=30 name="brand" alt="Brand Name" placeholder="Product Name" required autofocus><br><br>
          <strong>Product Name:</strong> &nbsp;&ensp;&ensp;<input type="text" size=30 name="pname" alt="Product Name" placeholder="Product Name" required autofocus><br><br>
          <strong>Description:</strong> &nbsp;&ensp;&ensp;<input type="text" size=50 name="desn" alt="Description" placeholder="Description"required><br><br>
          <strong>Price:</strong> &nbsp;&ensp;&ensp;<input type="number" size=20  name="price" alt="Username here" placeholder="Enter "required><br><br>
          <strong>Available quantity:</strong> &nbsp;&ensp;&ensp;<input type="number" maxlength=10 size=20  name="stock" alt="Available quantity" placeholder="Enter Available Quantity"required><br><br>
          <strong>Add Image:</strong> &nbsp;&ensp;&ensp;<input type="file" name="photo" value required><br><br>
         
          <input type="submit" name="sublogin3" value="Add Product"><br><br>
          <!-- Reset -->
          <a href="cartmain.php">Go To Cart</a> 
          <br>
          <?php
          echo "<br>".$msg;
          ?>
        </div>  
    </form>
</body>
</html>