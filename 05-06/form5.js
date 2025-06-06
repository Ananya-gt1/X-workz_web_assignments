function validate() {
    let val = true;
    let names = document.formName.nameName.value;
    let email = document.formName.emailEmail.value;
    let password = document.formName.passwordPassword.value;
    let cpassword = document.formName.confirmPassword.value;
    let gender = document.formName.genderGender.value;
    let Course = document.formName.courseCourse.value;

    if (names.length > 20) {
        val = false;
        setError('spanNameId', 'Name must be less than 20 characters');
    }
    else if (!email.includes('@') || !email.includes('.')) {
        val = false;
        setError('spanEmailId', 'Email must contain "@" and "."');
        }
    else if (password.length < 8) {
        val = false;
        setError('spanPasswordId', 'Password must be at least 8 characters long');
    }
    else if (password !== cpassword) {
        val = false;
           setError('spanCpasswordId', 'Passwords do not match');
    }
    else {
        alert('Form submitted successfully!');
    }
    return val;
}

function setError(id, message) {
   document.getElementById(id).innerText = message;

}
 
function clearError(id) {
   document.getElementById(id).innerText ='';

}