const HashMap = require('./HashMap');

function main(){
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const lor = new HashMap();

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard'); // not all items will be added technically because they get overwritten by later values
  
  console.log(lor);
  console.log(lor.get('Maiar')); //Sauron
  console.log(lor.get('Hobbit')); //Frodo
  //this is not a discrepency because of the fact that it is overwriting the old value with the new input;
  //our curent simple function only creates an object at the correct index

  //The capacity is currenty at 24. The reason for that is because it only needed to do one resize
  //to keep the loadratio below the max_size_ratio
}
main();

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};//returns the values 20 and then 10 because the second set() for each HashMap overwrites the first set() values
// WhatDoesThisDo();

// 22 | 88 |    |    | 4 | 15 | 28 | 17 | 59 | 31 | 10 |
// 0    1    2    3    4    5   6    7    8     9   10

// 0    1    2    3    4    5   6    7    8 
//    | 28 | 20 | 12 |    | 5 | 15 |    | 17 |
//      19                      33
//      10                  