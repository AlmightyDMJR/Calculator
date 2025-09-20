let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

const clickSound = new Audio("click.mp3");

let string ="";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) => {

        clickSound.currentTime = 0; 
        clickSound.play();

        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML =='AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{

        string += e.target.innerHTML;
        input.value = string;
        }
    })
})