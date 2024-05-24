const genrateBTN =  document.getElementById("genratebtn");

genrateBTN.addEventListener("click", function() {
    // this are the referance of input checkbox
    const length = parseInt(document.getElementById("length").value);
    const includeupper = document.getElementById("uppercase").checked;
    const includelower = document.getElementById("lowercase").checked;
    const includenumber = document.getElementById("number").checked;
    const includesymbols = document.getElementById("symbol").checked;

    // pass as an function parameter / argument inside the genratePassword function.
const password = genratePassword(
    length,
    includeupper,
    includelower,
    includenumber,
    includesymbols
)
// `display hidden text also`
document.getElementById("passworddisplay").textContent = password;

})

function genratePassword(
    length,
    includeupper,
    includelower,
    includenumber,
    includesymbols) {
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()-_=+";

        let char = "";
        // if any checkbox iis clicked then it will add/push/append/stores the CaseChar inside the char variable.
        if (includeupper) char += upperCaseChars;
        if (includelower) char += lowerCaseChars; // i can use this type of statements also
        if (includenumber) char += numberChars;
        if (includesymbols) char  += symbolChars;
            console.log(char)
        // if we clicked button without selecting any checkbox.
        if (char === "") {
            return "Please select atleast one charector type.";
        }
        
        let password = "";
        for (let i=0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * char.length);
            password += char[randomIndex];
            console.log(password)
        }
        return password;
}