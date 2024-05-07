const incButton = document.getElementById("increasebutton");
        const decButton = document.getElementById("decreasebutton");

        const num = document.getElementById("number");


        function inc_Btn (){
            console.log(num.innerText)
            num.innerText =  parseInt(num.innerText)+1
        }

        function dec_Btn (){
            console.log(num.innerText)
            // console.log("num", num)
            if (num.innerText ==0){ // 
            return 
            }

            num.innerText =  parseInt(num.innerText) - 1
        }

        incButton.addEventListener('click', inc_Btn);
        decButton.addEventListener('click', dec_Btn);

