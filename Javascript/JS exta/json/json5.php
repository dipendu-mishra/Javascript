<?php
class Person implements JsonSerializable
{
    private $id;
    private $name;
    
    public function __construct(array $data) 
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
    }
    
    public function getId() 
    {
        return $this->id;
    }
    
    public function getName() 
    {
        return $this->name;
    }

    public function jsonSerialize() // Convert object into string
    {
        return 
        [
            'id'   => $this->getId(),
            'name' => $this->getName()
        ];
    }
}
$person = new Person(array('id' => 1, 'name' => 'Amir'));
echo json_encode($person);
?>