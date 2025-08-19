import NumberWork from "./numberWork.js";
import FormControl from "./formControl.js";

const num1 = new NumberWork(5);

num1.displayNumber();
num1.posOrNeg();

// const numberInput = document.getElementById("num1").value.trim();
// const span = document.getElementById("error-message");
// const email = document.getElementById("emailMessage");


// window.start = (event) => {
//   let formControl = new FormControl(numberInput);
//   event.preventDefault();
//   console.log(formControl.checkIsNotNumber());

//   if (formControl.checkIsNotNumber()) {
//     formControl.submitHandler();
//   }else{
   
//      span.hidden = false;
//   }
window.start = function (event) {
  event.preventDefault();

  const numInput = window.document.getElementById("num1").value;
  const emailInput = window.document.getElementById("email").value;

  const fc = new FormControl(numInput, emailInput);
  const result = fc.submitHundler();

  if (result) {
    alert("Success! Both inputs are valid.");
    console.log("Both number and email are valid");
  } else {
    console.log("One or both inputs are invalid");
  }
}