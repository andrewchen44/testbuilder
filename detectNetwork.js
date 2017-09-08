var detectNetwork = function(cardNumber) {

//Diner's Club
 if(cardNumber.substr(0,2) === '38' || cardNumber.substr(0,2) === '39' && cardNumber.length === 14) {
   return ('Diner\'s Club');
 }

//American Express
 if(cardNumber.substr(0,2) === '34' || cardNumber.substr(0,2) === '37' && cardNumber.length === 15) {
   return ('American Express');
 }

 //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

 if((cardNumber.substr(0,4) === '4903'||
   cardNumber.substr(0,4) === '4905' ||
   cardNumber.substr(0,4) === '4911' ||
   cardNumber.substr(0,4) === '4936' ||
   cardNumber.substr(0,4) === '6333' ||
   cardNumber.substr(0,4) === '6759' ||
   cardNumber.substr(0,6) === '633110' ||
   cardNumber.substr(0,6) === '564182') && 
   (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) 
 ){
   return ('Switch');
 }

//Visa 4903, 4905, 4911, 4936,
  if((cardNumber.substr(0,4) === '4903' || cardNumber.substr(0,4) === '4905' 
  ||cardNumber.substr(0,4) === '4911' || cardNumber.substr(0,4) === '4936') &&
  cardNumber.length === 16){
    return('Switch');
  } else if(cardNumber.substr(0,1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16
  || cardNumber.length === 19)){
      return ('Visa');
  }

//MasterCard
  if((cardNumber.substr(0,2) === '51' || cardNumber.substr(0,2) === '52' ||cardNumber.substr(0,2) === '53'
  || cardNumber.substr(0,2) === '54' || cardNumber.substr(0,2) === '55') && cardNumber.length === 16){
      return ('MasterCard');
  }

//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if((cardNumber.substr(0,4) === '6011' ||
   cardNumber.substr(0,3) === '644' || 
   cardNumber.substr(0,3) === '645' || 
   cardNumber.substr(0,3) === '646' || 
   cardNumber.substr(0,3) === '647' || 
   cardNumber.substr(0,3) === '648' || 
   cardNumber.substr(0,3) === '649' || 
   cardNumber.substr(0,2) === '65')
  && (cardNumber.length === 16 || cardNumber.length === 19)){
    return ('Discover');
  }

//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if((cardNumber.substr(0,4) === '5018' || cardNumber.substr(0,4) === '5020' || cardNumber.substr(0,4) === '5038'
  || cardNumber.substr(0,4) === '6304') && (cardNumber.length >= 12 && cardNumber.length <= 19)){
    return ('Maestro');
  }


//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if(
  (
  (cardNumber.substr(0,6) >= 622126 && cardNumber.substr(0,6) <= 622925) ||
  (cardNumber.substr(0,3) >= 624 && cardNumber.substr(0,3) <= 626) ||
  (cardNumber.substr(0,4) >= 6282 && cardNumber.substr(0,3) <= 6288)
  ) &&
  (cardNumber.length >= 16 && cardNumber.length <= 19)
  ){
    return ('China UnionPay');
  }
    








  return ('Network Not Known');

};

