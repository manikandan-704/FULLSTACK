
document.getElementById("formvalidation").addEventListener('submit', function validationForm(event) {
    event.preventDefault();
    let UserName = document.getElementById("uname").value
    let Email = document.getElementById("email").value
    let Pass = document.getElementById("password").value
    let Cpass = document.getElementById("cpassword").value

    let uNameError = document.getElementById("error-name")
    let emailError = document.getElementById("error-email")
    let passError = document.getElementById("error-pass")
    let cPassError = document.getElementById("error-cpass")
    //
    if (UserName === "") {
       uNameError.innerHTML = "*enter user name"
    }
    
});

