// variable
var myFavouiteBook ='4 hour work';
var myFavouiteNumber=77;
var isNumber= false;

// array 
var bookList=['positioning', 'hooked', 'start with why', 'shoe dog'];
console.log(bookList);
 
// array index number ber koar way 
var startWithWhyIndex=bookList.indexOf('start with why');
console.log(startWithWhyIndex);

//array er element er indexnumber ber korar way
var bookNumber=bookList[2];
console.log(bookNumber);


//array ey end ey element add korar way
bookList.push('story band');
console.log(bookList);

//array er end ey element remove korar rule
bookList.pop();
console.log(bookList);

// array er start ey element add korar rule 
bookList.unshift('story band');
console.log(bookList);

bookList.shift('story band');
console.log(bookList);

// condition 
if(bookList[2]== 'start with why'){
     console.log('This is book name of start with why');
}
else if (bookList[1]=='hooked'){
    console.log('This book name is hooked');
}
else{
    console.log('there is no book');
}
//while loop
var i=0;
while(i<10){
    console.log(i);
    i++;

}

//for loop
for(var i=10; i>0; i--){
    console.log(i);

}