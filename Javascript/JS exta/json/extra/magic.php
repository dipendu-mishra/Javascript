<?php

//Getter and setters


class rr{
	private $dd=0;  // set get read and write
	private $tt="";  //set writeone
	private $ff=0;    //get readonly
    public $var=100;
    function __construct($a,$b,$c)
    {
    
        $this->dd=$a;
        $this->tt==$b;
        $this->ff=$c;

    }
	function __set($name,$value){
		if($name=="dd"){
			$this->dd=$value;
		
		}
		// elseif($name=="ff"){
		// 	$this->ff=$value;
			
		// }
		elseif($name=="tt"){
			$this->tt=$value;
		}
		// else{
		// 	$this->name=$value;
		// }
	}
	function __get($name){
		if($name=="dd"){
		return $this->dd."<br>";
        }

	  elseif($name=="ff"){
	  	print($this->ff."<br>");
	  }
	//   elseif($name=="tt"){
	//   	print($this->tt."<br>");
	//   }
	//   else{
	//   	print("property dont exist");
	//   }
	}
    public function getAllDetail()
    {
      echo "<br>".$this->tt.":".$this->dd.":".$this->ff;
    }
   
}


$var = new rr(34,"done",67);
$var->dd=100;
//echo $var->dd;

// $var->tt=2000;
// $var->tt;
//echo $var->tt;
$var->ff=4000;
echo $var->ff;

//$var->getAllDetail();

// $var->ff=123;
// $var->tt=1234;
// $var->name="shubham";
// $var->dd;
// $var->ff;
// $var->tt;
// $var->name;
?>