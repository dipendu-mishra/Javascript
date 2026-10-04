<?php
//Define a large json data
$data = '{"quiz bank":{ "Computer": {"q1": { "question": "who is the inventor of
 computer?","options": ["Thomas Alva Edison","Charles Babbage","Blaise Pascal",
 "Philo Farnsworth"],"answer": "Charles Babbage"},{"q2": { "question":
 "which of the following is a input device?", "options": ["Printer","Scanner",
"Monitor", "Keyboard"],"answer": "Keyboard"}},"PHP": { "q1": { "question":
 "What type of language is PHP?","options": ["High Level Language","Low level
Language","Scripting Language","Assembly Language"],"answer": "Scripting Language" },
"q2": {"question": "What is the full form of PHP?","options": ["Hypertext Preprocessor",
"Personal Home Package","Hypertext Processor","Perdonal HTML Page" ],"answer":
 "Hypertext Preprocessor"} } } }';

//call custom function for formatting json data
echo pretty_print($data);

//Declare the custom function for formatting
function pretty_print($json_data)
{

//Initialize variable for adding space
$space = 0;
$flag = false;

//Using <pre> tag to format alignment and font
echo "<pre>";

//loop for iterating the full json data
for($counter=0; $counter<strlen($json_data); $counter++)
{

//Checking ending second and third brackets
if ( $json_data[$counter] == '}' || $json_data[$counter] == ']' )
{
$space--;
echo "\n";
echo str_repeat(' ', ($space*2));
}
 

//Checking for double quote(“) and comma (,)
if ( $json_data[$counter] == '"' && ($json_data[$counter-1] == ',' ||
 $json_data[$counter-2] == ',') )
{
echo "\n";
echo str_repeat(' ', ($space*2));
}
if ( $json_data[$counter] == '"' && !$flag )
{
if ( $json_data[$counter-1] == ':' || $json_data[$counter-2] == ':' )

//Add formatting for question and answer
echo '<span style="color:blue;font-weight:bold">';
else

//Add formatting for answer options
echo '<span style="color:red;">';
}
echo $json_data[$counter];
//Checking conditions for adding closing span tag
if ( $json_data[$counter] == '"' && $flag )
echo '</span>';
if ( $json_data[$counter] == '"' )
$flag = !$flag;

//Checking starting second and third brackets
if ( $json_data[$counter] == '{' || $json_data[$counter] == '[' )
{
$space++;
echo "\n";
echo str_repeat(' ', ($space*2));
}
}
echo "</pre>";
}
?>