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
    public $mobilenos;
    public function __construct(array $data,$address,$mobilenos) 
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->address=$address;
        $this->mobilenos=$mobilenos;
    }
}
$addr=new Address('M.G.Road',560001,'Bangalore');
$person = new Person(array('id' => 1, 'name' => 'Amir'),$addr,array('9545645655','8435345345'));
//echo $person->mobilenos[1];
$jsonobj=json_encode($person, JSON_FORCE_OBJECT);
//echo $jsonobj;
$jsonob1=json_encode(json_decode($jsonobj),JSON_PRETTY_PRINT);
echo $jsonob1;
?>