<?php
//Declare the array
$courses=array("Module-1"=>"HTML",1=>"JavaScript", "Module-3"=>"CSS3",
"Module-4"=>"PHP");

//Notify the browser about the type of the file using header function
header('Content-type: text/javascript');

//Print the array in a simple JSON format
echo json_encode($courses, JSON_PRETTY_PRINT);
$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($courses,JSON_PRETTY_PRINT));
fclose($fp);
?>



