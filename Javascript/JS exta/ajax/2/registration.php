<!DOCTYPE html>
<html>
<head>
	<title>Registration</title>
</head>
<body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<form method="POST" name="form">
	ID:<input type="text" name="id" id="id"><br>
	Pname:<input type="text" name="name" id="name"><br>
	Pcat:<input type="text" name="cat" id="cat"><br>
	Pdes:<input type="text" name="des" id="des"> <br>
	Price:<input type="text" name="price" id="price"><br>
	Qty:<input type="text" name="qty" id="qty"><br>
	<input type="button" name="submit" id="show" value="submit">

	
</form>


<script>
	$(document).ready(function(){
		$('#show').click(function(){
     console.log('test');
     var id=$("#id").val();
     var name=$("#name").val();
     var cat=$("#cat").val();
     var des=$("#des").val();
     var price=$("#price").val();
     var qty=$("#qty").val();
     if(id.length>0 && name.length>0 && cat.length>0 && des.length>0 && price.length>0 && qty.length){

     	$.ajax({
     		url:"enter.php",
    method:"POST",
    data:{id:id,name:name,cat:cat,des:des,price:price,qty:qty},
    dataType:"JSON",
    success:function(data)
    {
      console.log(data);
    },
    


     	})

     }
     else{
     	alert("fill everything");
     }

 });
});
	


</script>

</body>
</html>