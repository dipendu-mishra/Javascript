<?php
header('Content-type: text/javascript');
class Person implements JsonSerializable
{
    private $id;
    private $name; 
    private $mobilenos;   
    public function __construct(array $data) 
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $arr=array(645645,546456,46456);
        $this->mobilenos=$arr;
    }    
    public function jsonSerialize() // Convert object into string
    {
        return 
        [
            'id'   => $this->id,
            'name' => $this->name,
            'contacts'=> [
                "contact1"=> $this->mobilenos[0],
                "contact2"=>$this->mobilenos[1]
            ]
        ];
    }
}
$person = new Person(array('id' => 1, 'name' => 'Amir'));
echo json_encode($person,JSON_PRETTY_PRINT);
?>