var skyColor='White';

var phones=['Iphone', 'xaoumi', 'Samsang', 'lg', 'htc'];
phones[3]='walton';
console.log(phones);
if(phones.indexOf('oppo')==-1){
    console.log('Opps! oppo is missing');
}
if(phones.indexOf('Iphone') !=-1){
    console.log('Iphone is avaiable');
}

// loop
var number =0;
while(number <10){
    console.log(number);
    number++;
}

for(var i=0; i<20; i++){
    console.log('This is for loop'+i);
}
//function
function addThreeNumber(num1, num2, num3){
    var total =num1+num2+num3;
    return total;
}
var firstNumber =30;
var secondNumber=40;
var thirdNumber=56;
var result =addThreeNumber(firstNumber, secondNumber, thirdNumber);
console.log(result);