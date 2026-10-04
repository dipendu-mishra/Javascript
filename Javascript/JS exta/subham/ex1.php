<!DOCTYPE html>
<html>
<head>
	<title>quest1</title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<body>
	State:<select name="state" id="state">
		  <option>Select</option>
    
  
</select>
<br><br>
City:<select name="city" id="city">
			  <option>Select</option>

  
</select><br><br>
Pincode:<select name="Pincode" id="pincode">
			  <option>Select</option>

  
</select><br><br>

</body>
</html>

<script>
$(document).ready(function(){ 
		// $("#state").click(function(){
		// var tt=($("#state").val());
        //   console.log(tt);
        $.ajax({
                url: 'data.json',
                dataType:'JSON',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: $(this).serialize(),
                success: function( data, textStatus, jQxhr ){
                    // for(st in data.states)
                    //    console.log(st[i]);
                    //$('#state').append('<option>'.st</option>');
                        console.log(data.states);
                },
                // error: function( jqXhr, textStatus, errorThrown ){
                //     console.log( errorThrown );
                //  }
            // });
        });

});

</script>
