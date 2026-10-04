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
$person1 = new Person(array('id' => 2, 'name' => 'Amir'),$addr,array('9545645655','8435345345'));
$person2 = new Person(array('id' => 3, 'name' => 'Sohail'),$addr,array('9545645655','8435345345'));
$person3 = new Person(array('id' => 1, 'name' => 'Priya'),$addr,array('9545645655','8435345345'));
//$persons=array($person1,$person2,$person3);
$persons=array("p1"=>$person1,"p2"=>$person2,"p3"=>$person3);
echo json_encode($persons, JSON_PRETTY_PRINT);
?>