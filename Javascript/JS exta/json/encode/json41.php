<?php
header('Content-type: text/javascript');
class Address
{
    public $street;
    public $pin;
    public $city;
    public function __construct($st,$pin,$ci) 
    {
        $this->street = $st;
        $this->pin = $pin;
        $this->city=$ci;
    }    
}
class Person
{
    public $id;
    public $name;
    public $address;
    public function __construct(array $data,$address) 
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->address=$address;
    }
}
$addr=new Address('M.G.Road',560001,'Bangalore');
//var_dump($addr);
$person = new Person(array('id' => 1, 'name' => 'Amir'),$addr);
$person->id;
//var_dump($person);
//echo $person->address->pin;
 //var_dump($person);
 echo json_encode($person, JSON_PRETTY_PRINT);
?>