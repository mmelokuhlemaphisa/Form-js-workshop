export default class FormControl {
  constructor(num, email, lastName) {
    this.num1 = num;
    this.email = email;
    this.lname = lastName;
    this.getName();

    this.numSpan = window.document.getElementById("error-message");
    this.emailSpan = window.document.getElementById("emailMessage");
  }

  submitHundler() {
    let isValid = true;

    // --- Check number ---
    if (isNaN(this.num1) || this.num1.trim() === "") {
      this.numSpan.textContent = "This is not a number";
      this.numSpan.hidden = false;
      this.numSpan.style.color = "red";
      isValid = false;
    } else {
      this.numSpan.textContent = "Valid number!";
      this.numSpan.hidden = false;
      this.numSpan.style.color = "green";
    }

    // --- Check email ---
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.emailSpan.textContent = "Invalid email address";
      this.emailSpan.hidden = false;
      this.emailSpan.style.color = "red";
      isValid = false;
    } else {
      this.emailSpan.textContent = "Valid email!";
      this.emailSpan.hidden = false;
      this.emailSpan.style.color = "green";
    }

    return isValid;
  }

  getName() {
    localStorage.setItem("lastname", "Maphisa");
    localStorage.setItem("Name", "Melokuhle" );
     localStorage.setItem("Phone", "07867");
    
  }
}
