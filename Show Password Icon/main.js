const eyeImg = document.getElementById("eye-img");
const pass = document.getElementById("pass")

function showPass(){  
    console.log(pass.type)       
    if (pass.type==='password' ){
        pass.type = 'text'
    } else {
        pass.type = 'password'
    }
}