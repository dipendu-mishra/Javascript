<?php
   class Books {
      private $price=20;
      private $title;
      function __construct($price=100,$title="PHP")// default parameters
      {
        $this->price=$price;
        $this->title=$title;
         echo "cons called";
      }
      
    //   function __construct1($price, $title)
    //   {
    //     $this->price=$price;
    //     $this->title=$title;
    //     echo "Double Parameter cons called";

   // $price=100,$title="PHP"
    //   function __construct($title, $title)
    //   {
    //     $this->price=$price;
    //     $this->title=$title;
    //     echo "Double Parameter cons called";

    //   }

       static function  getPublisher()
       {
           return "MC Graw Hill";
       } 
      function setPrice($price)
      {
         echo $this->$price = $price;
      }      
      function getPrice(){
         echo $this->price ."<br/>";
      }      
      function setTitle($par){
         $this->title = $par;
         $this->f();
      }      
      function getTitle(){
         echo $this->title ." <br/>";
      }
      function f()
      {
          echo "f";
      }
   }
   //$str=Books::getPublisher();
   //echo $str;
   $b=new Books();  
   echo "<br>";
   echo $b->getPrice();
   echo "<br>";
   echo $b->getTitle();

   echo "<br>";
   $bb=new Books(2000,"JAVA");
   echo $bb->getPrice();
   echo "<br>";
   echo $bb->getTitle();

   $cc=new Books(3000);
   echo "<br>";
   echo $cc->getPrice();
   echo "<br>";
   echo $cc->getTitle();

//    $cc=new Books(title->"C#");
//    echo "<br>";
//    echo $cc->getPrice();
//    echo "<br>";
//    echo $cc->getTitle();


?>