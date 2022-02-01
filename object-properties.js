var computer ={
      price:220000,
      storage: '156gb',
      processor: 'Intel i5',
}
console.log(computer);

console.log(computer.processor);

// 3 way add new value in a property
// 1.
 computer.storage='1tb';
console.log(computer);

// 2.
computer['storage']='2tb';
console.log(computer);

//3.
var storageProperty= "storage";
computer[storageProperty]='3tb';
console.log(computer);