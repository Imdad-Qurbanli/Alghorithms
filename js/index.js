
var input1 = +prompt("eded daxil edin")
var input2 = +prompt("eded daxil edin")
var counter = 0;
for ( var i = input1; i <= input2; i++) {
   
  for( var k = 0; k <= i; k++) {
     if ( i % k === 0){
         counter = counter + 1
      }
   }
   if( k <= 2 ){
      console.log("eded sadedir")
   }
   else {
      console.log("eded murekkebdir")
   }
}
// var input1 = +prompt("Enter the first number:");
// var input2 = +prompt("Enter the second number:");
// var counter = 0;  

// for (var i = input1; i <= input2; i++) {
//    if (i < 2) {
//       console.log(i + " is not a prime number");
//       continue;
//    }
//    for (var k = 1; k <= i; k++) {
//       if (i % k === 0) {
//          counter++;
//       }
//    }
//    if (counter === 2) {
//       console.log(i + " is a prime number");
//    } else {
//       console.log(i + " is a prime number");
//    }
// }