//Business

function stringArrayConvert(stringNumber) { 
  let stringArray = []; 
    for (i = 0; i<=stringNumber; i += 1) { 
    stringArray.push(digitSplitter((i)).join(""));
  }
  return stringArray;
}


function digitSplitter(stringNumber){
  let splitDigits = stringNumber.toString().split("") 
  return splitDigits
}
function digitChecker(doubleDig, number){
  let arrayCheck = digitSplitter(doubleDig);
   if(arrayCheck.includes(number.toString()) === true){
    let digitJoin = arrayCheck.join('');
    console.log(arrayCheck);
    digitJoin.arrayCheck;
    return true;
  } else {
    return false;
  }
}

function beepBoop(stringNumber){
  let arrayInput = stringArrayConvert(stringNumber); 
  arrayInput.forEach(function(element) {
   if (digitChecker(arrayInput.indexOf(element), 3) === true) {
      arrayInput.splice(arrayInput.indexOf(element), 1 ,"Won't you be my neighbor?")
   } else if ((digitChecker(arrayInput.indexOf(element), 2)) === true ) {
      arrayInput.splice(arrayInput.indexOf(element), 1 ,"Boop")
   } else if (digitChecker(arrayInput.indexOf(element), 1) === true) {
    arrayInput.splice(arrayInput.indexOf(element), 1 ,"Beep!")
   } else {
    return false;
   }
  });
  return arrayInput;
}
function isEmpty(){
  for (let i=0; i<arguments.length; i++){
    if(arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

//UI
function printArray(number) {
 if(isEmpty(number)) {
  return null
 } 
  const div = document.querySelector("div.printArray")
  let array = beepBoop(number);
  pTag = document.querySelector("div.printArray p")
  
  array.forEach(function(element) {
    const p = document.createElement("p")
    p.append(element);
    div.append(p)
  })
  
}
function resetRoboger(event) {
  document.getElementById("numberInputForm").addEventListener("submit", handleFormSubmission);
  handleFormSubmission(event);
}
function clearResults() {
  let div = document.getElementById("results");
  const clearButton = document.getElementById("clearButton");
  const reloadButton = document.getElementById("reloadButton");
  div.innerText = null;
  document.getElementById("numberInputForm").removeEventListener("submit", handleFormSubmission);
  clearButton.classList.add("hidden");
  reloadButton.classList.remove("hidden");
  document.querySelector("input#numberInput").value = null;


}

function handleFormSubmission(event) {
  event.preventDefault();
  const numberInput = document.querySelector("input#numberInput").value;
  const reloadButton = document.getElementById("reloadButton");
  const clearButton = document.getElementById("clearButton");
  const submitButton = document.getElementById("submit");
  printArray(numberInput);
  clearButton.classList.remove("hidden")
  reloadButton.classList.add("hidden");
  submitButton.classList.add("hidden");
  document.getElementById("numberInputForm").removeEventListener("submit", handleFormSubmission);
  reloadButton.removeEventListener("click", resetRoboger);
  
  
  
}

window.addEventListener("load", function() {
  document.getElementById("numberInputForm").addEventListener("submit", handleFormSubmission);
  clearButton.addEventListener("click", clearResults);
  reloadButton.addEventListener("click", resetRoboger);
  
  
});



