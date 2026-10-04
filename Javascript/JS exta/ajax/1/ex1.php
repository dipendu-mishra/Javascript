<html>
<head>
    <meta name="viewport" content="width=device-width" />
	<script type="text/javascript" 
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
    </script>
	<script type="text/javascript">
        $(document).ready(function () {			
		 $('#ajaxBtn').click(function(){
			$.get('//localhost/ajax/1/data.txt',   // request url
			{            
				success: function (data, status, xhr) {    // success callback function
					//	$('p').append(data);
                    console.log(data);
                   // $('#div1').html(data);
			}
                
			});
		 });

        });
    </script>
</head>
<body>
	<h1> jQuery ajax() demo 
	</h1>
	<input type="button" id="ajaxBtn" value="Send Ajax request" />
	<p>
	</p>
    <div id="div1"></div>
</body>
</html>