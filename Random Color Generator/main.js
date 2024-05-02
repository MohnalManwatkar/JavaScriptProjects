const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);

    // to convert Hexadecimal code,
    // 16 stand for Hexadecimal code 
    const randomCode = "#" + randomNumber.toString(16);

    // to change the background color
    document.body.style.backgroundColor = randomCode;

    // to write the color code 
    document.getElementById("color-code").innerText = randomCode;

    // to copy the code on the clipboard 
    navigator.clipboard.writeText(randomCode);

    // console.log(randomNumber, randomCode);
}

// event call
const btn = document.getElementById("btn");
btn.addEventListener('click', getColor);


// init call/ initial call
getColor()