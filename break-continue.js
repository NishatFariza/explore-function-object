// var i= 0;
// while(i < 10){
//     console.log (i) ;
//     if (i==5){
//         break;
//     }
//     i++ ;
// // }
// for (var i=0;  i<20; i++){
//     console.log(i);
//     if(i > 7){
//         break;
//     }
// }
 var numbers = [12, 14, 23, 25, 28, 32, 45, 50, 55, 60, 44, 97];
//  for(var i=0; i<numbers.length; i++){
//     var number =numbers[i];
//      console.log(number);
//      if(number >= 50){
//          break;
//      }
//  }
 for(var i=0; i<numbers.length; i++){
    var number =numbers[i];
     console.log(number);
     if(number >= 40){
         continue;
     }
 }