let result = 0;
let typedNumber = ""; 
let lastAction = ""; 
let hasDecimal = false;

//For easier use of eventListeners
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equal");
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
//TODO: Ha túl hosszú a screen-re írt szöveg, akkor kicsúszik jobbra.
//TODO: Entert, backspacet stb, hogyan tudok key-re tenni?

function manageDecimal(){
  if (typedNumber === ""){
    typedNumber = "0.";
  }else{
    for (let i=0; i<typedNumber.length; i++){
      if (typedNumber[i] === "."){
        hasDecimal = true;
      }
    }
    if (!hasDecimal){
      typedNumber += ".";
    }
  }
  return screen.innerHTML = typedNumber;
}

function removeFirstZero(){
  if (typedNumber.charAt(0) === "0" && typedNumber.charAt(1) !== "."){
    typedNumber = typedNumber.substring(1);
  }
}

function clearScreen(){
  screen.innerHTML="0";
  typedNumber = "";
  result = 0;
  lastAction = "";
  equalEnabled = true;
}

function addNumbers(){
  equalsTo();
  lastAction = "add";
}

function subtractNumbers(){
  equalsTo();
  lastAction = "subtract";
}

function multiplyNumbers(){
  equalsTo();
  lastAction = "multiply";
}

function divideNumbers(){
  equalsTo();
  lastAction = "divide";
}

function equalsTo(){
  switch (lastAction){
    case "add":
      if(typedNumber !== ""){
        result += Number(typedNumber);
        screen.innerHTML = result;
        typedNumber = "";
      }
      break;
    case "subtract":
      if(typedNumber !== ""){
        result -= Number(typedNumber);
        screen.innerHTML = result;
        typedNumber = "";
      }
      break;
    case "multiply":
      if(typedNumber !== ""){
        result = result * Number(typedNumber);
        screen.innerHTML = result;
        typedNumber = "";
      }
      break;
    case "divide":
      if(typedNumber !== ""){
        result = result/Number(typedNumber);
        screen.innerHTML = result;
        typedNumber = "";
      }
      break;
    case "":
      result = Number(typedNumber);
      typedNumber = "";
      screen.innerHTML = result;
      break;
  }
  equalEnabled = false;
  typedNumber = "";
  lastAction = "equal";
  return result;
}

function main(){
  document.addEventListener("click", () => removeFirstZero());
  document.addEventListener("click", () => console.log(typedNumber));
  zero.addEventListener("click", () => screen.innerHTML = typedNumber+=0);
  one.addEventListener("click", () => screen.innerHTML = typedNumber+=1);
  two.addEventListener("click", () => screen.innerHTML = typedNumber+=2);
  three.addEventListener("click", () => screen.innerHTML = typedNumber+=3);
  four.addEventListener("click", () => screen.innerHTML = typedNumber+=4);
  five.addEventListener("click", () => screen.innerHTML = typedNumber+=5);
  six.addEventListener("click", () => screen.innerHTML = typedNumber+=6);
  seven.addEventListener("click", () => screen.innerHTML = typedNumber+=7);
  eight.addEventListener("click", () => screen.innerHTML = typedNumber+=8);
  nine.addEventListener("click", () => screen.innerHTML = typedNumber+=9);
  clear.addEventListener("click", () => clearScreen());
  decimal.addEventListener("click", () => manageDecimal());
  add.addEventListener("click", () => addNumbers());
  subtract.addEventListener("click", () => subtractNumbers());
  multiply.addEventListener("click", () => multiplyNumbers());
  divide.addEventListener("click", () => divideNumbers());
  equal.addEventListener("click", () => equalsTo());

  document.addEventListener('keydown', function (event) {
    switch (event.key){
      case "0":
        screen.innerHTML = typedNumber+=0;
        break;
      case "1":
        screen.innerHTML = typedNumber+=1;
        break;
      case "2":
        screen.innerHTML = typedNumber+=2;
        break;
      case "3":
        screen.innerHTML = typedNumber+=3;
        break;
      case "4":
        screen.innerHTML = typedNumber+=4;
        break;
      case "5":
        screen.innerHTML = typedNumber+=5;
        break;
      case "6":
        screen.innerHTML = typedNumber+=6;
        break;
      case "7":
        screen.innerHTML = typedNumber+=7;
        break;
      case "8":
        screen.innerHTML = typedNumber+=8;
        break;
      case "9":
        screen.innerHTML = typedNumber+=9;
        break;
      case "+":
        addNumbers();
        break;
      case "-":
        subtractNumbers();
        break;
      case "*":
        multiplyNumbers();
        break;
      case "/":
        divideNumbers();
        break;
      case ".":
        manageDecimal();
        break;
      case ",":
        manageDecimal();
        break;
      case "=":
        equalsTo();
        break;
      //case Enter:
        //equalsTo();
        //break;
    }
  });
}


main();
