function bringSingara(taka){
     console.log.apply('ami singara khabo '+ taka+'taka dau');
     var singaraParce=10;
     var singaraQuantity =taka/singaraParce;
     return singaraQuantity;




}
var money =200;
var singara =bringSingara(money);
console.log(singara);