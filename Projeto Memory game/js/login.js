const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");
const validateinput = ({target}) =>{
    if (target.value.length >2) {
        button.removeAttribute("disabled");
        return;
    }
    
    button.setAttribute("disabled", " " );
    
}
const handlesubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player',input.value);
    window.location = "game.html";

}

input.addEventListener("input",validateinput);
form.addEventListener("submit",handlesubmit);