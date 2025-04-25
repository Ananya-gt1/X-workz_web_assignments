function onClick(a, b) {
    alert('Hiii', a, b)
}
function submitForm() {
    let val = true;
    let nameInput = document.formName.nameName.value;
    let ageInput = document.formName.ageAge.value;
    let numberInput = document.formName.numNumber.value;
    if (numberInput.length != 10) {
        val = false;
    }
    else if (3 <= nameInput.length <= 20) {
        val = true;
    }
    else if (ageInput >= 18) {
        alert('age is not 18+')
        val = true;
    }
    else  val=false;
   // let emailInput = document.formName.emailEmail.value;
    // let passwordInput = document.formName.passWord.value;
    // let confirmpasswordInput = document.formName.confirmPass.value;

    return val;
}