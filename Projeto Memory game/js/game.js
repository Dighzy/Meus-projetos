const grid = document.querySelector('.grid');
const player = document.querySelector(".player")
const timer = document.querySelector(".timer")



const characters = [
    'sombra',
    'mei',
    'heinhart',
    'pharah',
    'mccree',
    'lucio',
    'reaper',
    'roadhog',
    'hanzo',
    'genji',
];

const createElement = (tag,className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstcard = '';
let secondcard = '';
let accerts = 0 ;



const checkEndGame = () =>{
    if (accerts == 10) {
        setTimeout(() => {
            clearInterval(this.loop);
            alert("vc ganhou :p");

        }, 500 );
       
        
    }

}

const checkCards = () =>{
    const firstcaracter = firstcard.getAttribute("data-character");
    const secondcaracter = secondcard.getAttribute("data-character");

    if (firstcaracter == secondcaracter) {

        firstcard.firstChild.classList.add("disabled-card");
        secondcard.firstChild.classList.add("disabled-card");

        firstcard = "";
        secondcard = "";

        accerts = accerts + 1

        checkEndGame();

    
    }else {
        setTimeout(() => {
        
            firstcard.classList.remove("reveal-card");
            secondcard.classList.remove("reveal-card");

            firstcard = "";
            secondcard = "";
         
        }, 500);
    }

}

const revealcard = ({target}) => {
    
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }
    
    if (firstcard == ''){
        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode;    
    
    }else if (secondcard == ''){
        target.parentNode.classList.add('reveal-card');
        secondcard = target.parentNode

        checkCards();

    }
}

const create =(character) => { 
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', ' face back ');

    front.style.backgroundImage = `url('/img/${character}.png')`;
    
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click' , revealcard);
    card.setAttribute("data-character",character);
   

    return card;
    

   
        
}

const load = () => {

    
    
    const duplicate = [ ...characters , ...characters ];

    const embaralhar = duplicate.sort(() => Math.random() - 0.5 )

    embaralhar.forEach((characters) => {
        const card = create(characters);
        grid.appendChild(card);
    });
}

const starttimer = () => {
    this.lopp = setInterval(() => {
        
        const currenttime = +timer.innerHTML;   /**colocar + ou number , para conveter para number */
        timer.innerHTML = currenttime + 1;

    },1000)
}

window.onload = () =>{
    
    const playername = localStorage.getItem("player")

    player.innerHTML = "Player: " +  playername
    
    
    starttimer();
    load();
   
}




/*const create =() =>{
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = "card";
    front.className = "face front";
    back.className = "face back";

    card.appendChild(front)
    card.appendChild(back)

    grid.appendChild(card);

}

create()*/