
function registrationSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form reference
    const form = event.target;

    // Get values from form fields
    const firstName = form.fname.value;
    const lastName = form.lname.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const password = form.pass.value;

    // Log the values to the console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Mobile No.:", mobile);
    console.log("Password:", password);
}

// The registrationSubmit function is already referenced in the form's onsubmit attribute in the HTML file
