function registrationSubmit(event) {
    // Prevent the default form submission.
    // console.log(event.target)
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("pass").value;

    // Regular expression(regex) checks for different character types in the password
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const specialCharacters = /[!@#$%^&*(),.?":{}<>]/.test(password);

    const isValid = upperCase && lowerCase && number && specialCharacters

    // Check if the password meets the validation criteria
    if (isValid) {
        const user_data = {
            fname,
            lname,
            email,
            mobile,
            password
        };

        // Display user data
        console.log(user_data)
    } else {
        // If the password is invalid, alert the user with the requirements
        alert(`Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character like !@#$%^&*(),.?":{}<>`);
    }
}

