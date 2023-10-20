import { useState } from 'react';
import './App.css'

function App() {
  const [answer, setAnswer] = useState("0");
  const [expression, setExpression] =useState("");
  
  //const et = expression.trim();

const isOperator = (symbol:string)=>{
  return /[*/+-]/.test(symbol);
}

const numbers: unknown[]=[];
const numbersClean: unknown[]=[];
const operators: unknown[] = [];
const buttonPress = (symbol:string)=>{
  
    
  


//let string = expression.split(/[-+*/]/g);
const string = expression.split(/([-+*/=])/g)
//let string = expression.split('');



let newVal;
let equal;
for(let i =0; i<string.length; i++){

  const parts = string[i].split('.');
  equal = string[i].includes('=')
  newVal = parts.shift()+ (parts.length >0 ? "." + parts.join(''):'');
  numbers.push(newVal);
//console.log(newVal)
}
if(symbol=="=" && equal){
  return;
}
if(symbol=="." &&  newVal?.includes('.') ){
  console.log('Multiple decimals');
  return;
}


setExpression(expression+symbol)


for(let i=0;i<numbers.length;i++){
  if(numbers[i]){
    numbersClean.push(numbers[i]);
  }
}

console.log(numbersClean);
console.log(expression);



if(symbol=="="){
  calculate();
}





 if(symbol =="clear"){
  setAnswer("");
  setExpression("0");
  return;
 }

 
 else if(symbol =="negative"){
   setAnswer( answer * (-1));
   setExpression("");
 }
else if(symbol =="percentage"){
  if(answer === ""){
    setExpression("0");
    return;
  }
  
  else{
    setAnswer((parseFloat(answer)/100));
    setExpression("");
  }
  
}


 
 
 
  if(expression.charAt(0) === "0"){
       setExpression(expression.slice(1) + symbol);
     }



 





}//button press

const calculate = () => {

  
 //Clean the expression so that two operators in row, uses the ast operator

 //it goes backward the array
  for(let i=numbersClean.length-1; i>=0;i--){
//it checks if the first string of the array is an operator, if it is not, it is get sent to
//the operators array in the else satatement(operators.unshift(numbersClean[i]))
    
    if(["*", "/", "+"].includes(numbersClean[i]) && isOperator(numbersClean[i-1])){
      //it checks if the following expression includes any of the operators and the isOperator function checks is the next expression is an operator
        operators.unshift(numbersClean[i]);
        //and then it goes to the while loops and decrements 'i' a 'j amount';
        let j=0;
        let k= i-1;
        //the while loop check if there followinf expressions are operators and
        // if they are it is going to skip them until if finds a number
        while(isOperator(numbersClean[k])){
          //it will count the operators and substract them, skip them
          //and go stright to the number
          k--;
          j++;
        }
        i-=j;
    }else{
      //here it sends the numbers once it finds out it is not an operator
      operators.unshift(numbersClean[i]);
    }
  }




  
  //console.log(operators);
  if(expression.includes("=")){
    expression.replace("=", "")
  }
 
  setExpression(expression);

  



  setAnswer(eval(answer + operators.join("")));
  setExpression("");
}












// const calculate = () => {
//   //if last character is an operator, do nothing
//   if(isOperator(expression.charAt(expression.length-1))) return;
//   //clean the expression so that two operators in a row uses the last operator
//   const parts = et.split(" ");
//    //console.log(parts);
//   const newParts = [];
//    for(let i=parts.length-1; i>=0; i--){
//         if(["*", "/", "+"].includes(parts[i]) && isOperator(parts[i-1])){
//           newParts.unshift(parts[i]);
//           let j=0;
//           let k= i -1;
//           while(isOperator(parts[k])){
//             k--;
//             j++;
//           }
//           i -= j;
//         } else{
//           newParts.unshift(parts[i]);
//         }
//   }

//   const newExpression = newParts.join(" ");
//   if(isOperator(newExpression.charAt(0))) {
//     setAnswer(eval(answer + newExpression) as string);
//   }else{
//     setAnswer(eval(newExpression) as string);
//   }
//   setExpression("");

// };






//const buttonPress = (symbol:string) => {
  //console.log(symbol)
  // if(symbol ==='clear'){
  //   setAnswer("");
  //   setExpression("0");
  //   return;
    
  //}else if(symbol === "negative"){
  //   if(answer === "") return;
  //   setAnswer(
  //     answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer
  //   );
  // } else if(symbol === "percent"){
  //   if (answer == "") return;
  //   setAnswer((parseFloat(answer)/100).toString());
  // } else if(isOperator(symbol)){
  //   setExpression(et + " " + symbol + " ");
  // } else if(symbol === "="){
  //   calculate()
  // }else if( symbol === "0"){
  //   if(expression.charAt(0) !== "0"){
  //     setExpression(expression + symbol);
  //   }
     
  // } else if(symbol === "."){
    //split by operators and get the last number
  //const lastNumber = expression.split(/[-+*/]/g).pop();
   
    //if last number already has a decimel, don't add another
  // if(lastNumber?.includes(".")) return;
  // setExpression(expression + symbol);


  // }else{
  //   if(expression.charAt(0) === "0"){
  //     setExpression(expression.slice(1) + symbol);
  //   }else{
  //     setExpression(expression + symbol);
  //   }
  // }
  

//};//buttonPress

// const calculate = () => {
//   //if last character is an operator, do nothing
//   if(isOperator(expression.charAt(expression.length-1))) return;
//   //clean the expression so that two operators in a row uses the last operator
//   const parts = et.split(" ");
//    //console.log(parts);
//   const newParts = [];
//    for(let i=parts.length-1; i>=0; i--){
//         if(["*", "/", "+"].includes(parts[i]) && isOperator(parts[i-1])){
//           newParts.unshift(parts[i]);
//           let j=0;
//           let k= i -1;
//           while(isOperator(parts[k])){
//             k--;
//             j++;
//           }
//           i -= j;
//         } else{
//           newParts.unshift(parts[i]);
//         }
//   }

//   const newExpression = newParts.join(" ");
//   if(isOperator(newExpression.charAt(0))) {
//     setAnswer(eval(answer + newExpression) as string);
//   }else{
//     setAnswer(eval(newExpression) as string);
//   }
//   setExpression("");

// };



  return (
    <>
      <div className="container">
      <h1>Calculator Application</h1>
      <div id="calculator">
        <div id="display" style={{ textAlign: "right" }}>
          <div id="answer">{answer}</div>
            <div id="expression">{expression}</div>
              </div>
                <button id="clear" onClick={()=> buttonPress("clear")} className="light-gray">C</button>
                <button id="negative" onClick={()=> buttonPress("negative")} className="light-gray">+/-</button>
                <button id="percentage" onClick={()=> buttonPress("percentage")} className="light-gray">%</button>
                <button id="divide" onClick={()=> buttonPress("/")} className="yellow">/</button>
                <button id="seven" onClick={()=> buttonPress("7")} className="dark-gray">7</button>
                <button id="eight" onClick={()=> buttonPress("8")} className="dark-gray">8</button>
                <button id="nine" onClick={()=> buttonPress("9")} className="dark-gray">9</button>
                <button id="multiply" onClick={()=> buttonPress("*")} className="yellow">*</button>
                <button id="four" onClick={()=> buttonPress("4")} className="dark-gray">4</button>
                <button id="five" onClick={()=> buttonPress("5")} className="dark-gray">5</button>
                <button id="six" onClick={()=> buttonPress("6")} className="dark-gray">6</button>
                <button id="subtract" onClick={()=> buttonPress("-")} className="yellow">-</button>
                <button id="one" onClick={()=> buttonPress("1")} className="dark-gray">1</button>
                <button id="two" onClick={()=> buttonPress("2")} className="dark-gray">2</button>
                <button id="three" onClick={()=> buttonPress("3")} className="dark-gray">3</button>
                <button id="add" onClick={()=> buttonPress("+")} className="yellow">+</button>
                <button id="zero" onClick={()=> buttonPress("0")} className="dark-gray">0</button>
                <button id="decimal" onClick={()=> buttonPress(".")} className="dark-gray">.</button>
                <button id="equals" onClick={()=> buttonPress("=")} className="yellow">=</button>



          
        
      </div>
      </div>
    </>
  )
}

export default App
