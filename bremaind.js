// function onClick() {
//      document.getElementById('nameErrorId').innerHTML="The name should be minimum 3 and maximum 20";

// //  document.getElementsByClassName('name').innerHTML="The name should be minimum 3 and maximum 20";
//     // document.getElementsByName('name')[0].innerHTML="The name should be valid";
//     // document.getElementsByTagName('span')[0].innerHTML="The.......";
// }
function submitForm() {
    let val = true;
    let nameInput = document.formName.nameName.value;
    let ageInput = document.formName.ageAge.value;
    let numberInput = document.formName.numNumber.value;
    if (nameInput.length < 3|| nameInput.length > 20) {
        val = false;
        setError('nameErrorId', "The name should be minimum 3 and maximum 20");
    }else{
        clearfields('nameErrorId');
    }
    if (numberInput.length != 10) {
        val = false;
        setError('spanNumId', "The number should be 10 digit");
    }else{
        clearfields('spanNumId');
    }

    if (ageInput <= 18) {
        val = false;
        setError('ageSpanId', "The age should be 18 above");

    }else{
        clearfields('ageSpanId');
    }
    // let emailInput = document.formName.emailEmail.value;
    // let passwordInput = document.formName.passWord.value;
    // let confirmpasswordInput = document.formName.confirmPass.value;

    return val;
}

function setError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function clearForm(){
    document.getElementById('nameErrorId').innerHTML='';
    document.getElementById('spanNumId').innerHTML='';
    document.getElementById('ageSpanId').innerHTML='';
}

function clearfields(id){
    document.getElementById(id).innerHTML='';
}