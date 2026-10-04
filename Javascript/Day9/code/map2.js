// What you have
var officers = [
    { id: 20, name: 'Captain Piett',dept:"HR",salary:10000 },
    { id: 24, name: 'General Veers',dept:"HR",salary:20000 },
    { id: 56, name: 'Admiral Ozzel',dept:"Sales",salary:30000 },
    { id: 561, name: 'Admiral Ozzel',dept:"Sales",salary:30000 },
    { id: 88, name: 'Commander Jerjerrod', dept:"Sales",salary:20000 }
  ];  
 
  var result = new Map(officers.map(key => [key.id, key.name])); 
//   console.log(result.get(56));
//   console.log(result.has(56));
//   console.log(result.delete(56));
//   console.log(result)
let keys=result.keys();
console.log( keys.constructor.name)



 
//   console.log(result.values())
//   console.log(result.set(56,"Tom"))
  

