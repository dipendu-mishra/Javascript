<?php
//Declare the array
$courses=array(123=>"HTML","Module-2"=>234324, "Module-3"=>"CSS3",
"Module-4"=>"PHP",123=>"HTML");

//Notify the browser about the type of the file using header function
header('Content-type: text/javascript');

//Print the array in a simple JSON format
echo json_encode($courses, JSON_PRETTY_PRINT);
//return json_encode($courses, JSON_PRETTY_PRINT);
//$fp = fopen('results.json', 'w');
//fwrite($fp, json_encode($courses,JSON_PRETTY_PRINT));
//fclose($fp);


// Assign JSON encoded string to a PHP variable
$json = '{"Peter":65,"Harry":80,"John":78,"Clark":90}';
 
// Decode JSON data to PHP associative array
$arr = json_decode($json, true);
// Access values from the associative array
echo $arr["Peter"];  // Output: 65
echo $arr["Harry"];  // Output: 80
echo $arr["John"];   // Output: 78
echo $arr["Clark"];  // Output: 90
 
// Decode JSON data to PHP object

$json = '{"name":"Amit","age":30,"salary":23000}';

$obj = json_decode($json);


echo $obj->name;
echo $obj->age;









// Access values from the returned object
echo $obj->Peter;   // Output: 65
echo $obj->Harry;   // Output: 80
echo $obj->John;    // Output: 78
echo $obj->Clark;   // Output: 90
?>


  








