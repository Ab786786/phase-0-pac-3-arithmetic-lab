function add(){
    // this function is empty
}



function subtract() {
    // an empty function
}

function multiply(){
    // an empty function
}

function divide(){
    // an empty function
}

function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
}


function multiply(a,b){
    return a * b;
}


function divide(a,b){
    return a/b;
    
}


function increment(n){
    return
}

// increment function
function increment(n){

    n++;
    return n;
  }

  // Decrement function
  function decrement(n){

    n--;
    return n;
  }



  // takes a number inside the qoute such as "115" which is basically a string and parse it. it changes it to a number.
  //if the value is a string such as "dfdfs" or "hello" it retuns a NaN, means Not a Number.
  function makeInt(a){
    Number = parseInt(a, 10);
    return Number;
  }

  // this is how to call it the above function: console.log(makeInt("sfsdfds",10)) or console.log(makeInt("115",10))

  //----------------------------------------------------------------------
  //This is how to parse the float number, and preserve decimal in a number.
  function preserveDecimal(num){
    a = parseFloat(num);
    return a;
  }
  // console.log(preserveDecimal("118.222"))   This is how to call it.
  