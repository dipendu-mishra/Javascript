<!-- https://www.tutorialrepublic.com/php-tutorial/php-json-parsing.php -->
<?php
header('Content-type: text/javascript');
// Store JSON data in a PHP variable
// By default the json_decode() function returns an object.
//  However, you can optionally specify a second parameter $assoc 
//  which accepts a boolean value that when set as true JSON objects 
//  are decoded into associative arrays. It is false
$json = '{
    "id": 1,
    "name": "Amir",
    "address": "Bangalore",
    "mobilenos":934234234
}';

$emp1=json_decode($json);
echo $emp1->id;
?>