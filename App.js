import NumberWork from "./numberWork.js";
import FormControl from "./formControl.js";


const username =localStorage.getItem("username")
if(username){
    const spanElement = document.getElementById('username')
    spanElement.textContent = username
}else{
    alert("No username found")
}

window.setName = () => {
  const nameInput = document.getElementById("usernameInput").value.trim();

  if (nameInput === "") {
    alert("Please enter a name first.");
    return;
  }


  localStorage.setItem("username", nameInput);

  

   alert("Name saved! Welcome, " + nameInput + " ");
};


document.getElementById("forSave").addEventListener("click", window.setName);


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
window.yes = function () {
    document.getElementById("form-section").style.display = "block";
    document.getElementById("bye").style.display = "none";
};

window.onNo = function () {
document.getElementById("form-section").style.display = "none";
document.getElementById("bye").style.display = "inline";
};

window.start();
window.showForm = function () {
  document.getElementById("Form-Section").style.display = "block"; // show form
  document.getElementById("noBtn").style.display = "none"; // hide goodbye
  document.getElementById("HelloSection").style.display = "none"; // hide goodbye
};
window.showNo = function () {
  document.getElementById("noBtn").style.display = "block"; // show goodbye
  document.getElementById("FormSection").style.display = "none"; // hide form
  document.getElementById("HelloSection").style.display = "none"; // hide goodbye
};