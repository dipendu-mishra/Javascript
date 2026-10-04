<?php
//Declare the array
$courses=array("HTML","JavaScript","CSS3","PHP");

//Notify the browser about the type of the file using header function
header('Content-type: text/javascript');

//Print the array in a simple JSON format
//echo json_encode($courses, JSON_PRETTY_PRINT);
echo json_encode($courses,JSON_FORCE_OBJECT);
$fp = fopen('results1.json', 'w');
fwrite($fp, json_encode($courses,JSON_PRETTY_PRINT));
fclose($fp);
?>