console.log("js file");
document.getElementById("formvalidation").addEventListener("submit", function validationForm(event) {
    event.preventDefault();
    let UserName = document.getElementById("uname").value.trim();
    let Email = document.getElementById("email").value.trim()
    let Pass = document.getElementById("password").value.trim()
    let Cpass = document.getElementById("cpassword").value.trim()

    let uNameError = document.getElementById("error-name")
    let emailError = document.getElementById("error-email")
    let passError = document.getElementById("error-pass")
    let cPassError = document.getElementById("error-cpass")
    
    let unamePattern=/^[a-zA-Z0-9]{3,}$/;
    if (UserName === "") {
       uNameError.innerHTML = "*enter user name";
       uNameError.classList.remove("hidden");
       uNameError.classList.add("text-red-500");
    }
    else if (!unamePattern.test(UserName)) {
      uNameError.textContent = "* invalid username (eg: username123)";
      uNameError.classList.remove("hidden");
      uNameError.classList.add("text-red-500");
    }
    // VALID CASE
    else {
      uNameError.textContent = "";
      uNameError.classList.add("hidden");
    }
    
});

