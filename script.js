const header = document.querySelector("header");
const email = document.querySelector("#email");
const emailLabel = document.querySelector("#emailLabel");
const submitBtn = document.querySelector("#submitBtn");

window.onscroll = () => {
    if(window.scrollY > 60){
        header.style.backgroundColor = " hsl(216, 53%, 9%)";
    }
    else{
        header.style.backgroundColor = " transparent";
    }
}

submitBtn.addEventListener("click", (e) => {
    if(email.value == ""){
        emailLabel.style.display = "block";
    }else{
        emailLabel.style.display = "none";
    }
    e.preventDefault();
})


const menu = document.querySelectorAll('.menu');
const tabContent = document.querySelectorAll('.tabContent');

function showContent(event){
    for(let i = 0; i < tabContent.length; i++){
        for(let j = 0; j < menu.length; j++){
            menu[j].className = menu[j].className.replace("active", "");
        }
    }
    event.currentTarget.className += " active";
}