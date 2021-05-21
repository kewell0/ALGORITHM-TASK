// #1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

function convertFahrToCelsius(fahrenheit) {
    var celsius;
    var fahrenheit;

    if (isNaN(fahrenheit)){
        if(Array.isArray(fahrenheit)){
            console.log(JSON.stringify(fahrenheit)+ " is not a valid number but a/an array");
        } else if(typeof(fahrenheit)=='object'){
            console.log(JSON.stringify(fahrenheit)+ " is not a valid number but a/an object");
        }else {
            console.log(fahrenheit + " is not a valid number but a/an " + typeof(fahrenheit));
        }
      return fahrenheit;
    }
     else {
        celsius=((fahrenheit-32)/1.8);
        console.log(celsius.toFixed(4));
        return celsius;
    }
}



// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n 
// and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", 
// then returns the resulting array.


function checkYuGiOh(n){
    if(isNaN(n)){
       console.log(`${n} is not a valid number but a/an ${typeof(n)}.`) 
     }
    const arr = Array.from({length: n}, (_, index) => index + 1);
    for (i = 0; i < arr.length; i++) {
       if( (arr[i] % 2 == 0 ) && (arr[i] % 3 != 0) &&  ( arr[i] % 5 != 0 )){
          console.log("Yu")
       }
 
       else if( (arr[i] % 3 == 0 ) && (arr[i] % 2 != 0) &&  ( arr[i] % 5 != 0 )){
       console.log("Gi")
       }
 
      else if( (arr[i] % 5 == 0 ) && (arr[i] % 2 != 0) &&  ( arr[i] % 3 != 0 )){
       console.log("Oh")
      }
 
      else if(  (arr[i] % 2 == 0)  &&  (arr[i] % 3 == 0) &&  ( arr[i] % 5 != 0 ) ){
          console.log('Yu-Gi')
      }  
 
      else if(  (arr[i] % 2 == 0)  &&  (arr[i] % 5 == 0) &&  ( arr[i] % 3 != 0 ) ){
       console.log('Yu-Oh')
      }
      else if(  (arr[i] % 3 == 0)  &&  (arr[i] % 5 == 0) &&  ( arr[i] % 2 != 0 ) ){
      console.log('Gi-Oh')
      }
      else if( ( arr[i] % 2 == 0 ) && ( arr[i] % 3 == 0 ) && ( arr[i] % 5 == 0 ) ){
       console.log('Yu-Gi-Oh')
      }                             
      else if( ( arr[i] % 2 != 0 ) && ( arr[i] % 3 != 0 ) && ( arr[i] % 5 != 0 ) ){
      console.log(arr[i])
      }
     
    }
    
 
 }
 checkYuGiOh(10)
 
   