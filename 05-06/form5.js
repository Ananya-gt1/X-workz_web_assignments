function validate() {
    let val = true;
    let names = document.formName.nameName.value;
    let email = document.formName.emailEmail.value;
    let password = document.formName.passwordPassword.value;
    let cpassword = document.formName.confirmPassword.value;
    let gender = document.formName.genderGender.value;
    let Course = document.formName.courseCourse.value;

    if (names.length > 20) {
        alert('the form not submitted')
        val = false;
    }
    else if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address');
        val = false;
        }
    else if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        val = false;
    }
    else if (password !== cpassword) {
        alert('Passwords do not match');
        val = false;
    }
    else alert('Form submitted successfully');
    return val;
}