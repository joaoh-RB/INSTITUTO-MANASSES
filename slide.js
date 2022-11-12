

//-----------------------------------------------------------
//Variables
let imgAtual=0;
const quanImagens = document.querySelectorAll("div .imagens").length;
const marginslides = document.querySelector(".slides-all");
const balls = document.querySelector(".balls");
var rolar = true;

function next(){
    imgAtual++;
    if(imgAtual > (quanImagens-1)){
        imgAtual = 0;
    }
    updateMargin();
}

setInterval(()=>{
    if(rolar){
        next();
    } else{
        rolar = true;
    }
}, 3000)

//Buttons
for(i = 0; i<quanImagens; i++){
    const div = document.createElement("div");
    div.id = i;
    div.className = "ball";
    balls.appendChild(div);
}

document.getElementById("0").classList.add("active");

const quantDivButao = document.querySelectorAll(".balls div");
for(i=0; i < quantDivButao.length; i++){
    quantDivButao[i].addEventListener("click", (event)=>{
        const id = event.target;
        imgAtual=id.id;
        updateMargin();
    });
    
}

//Margin
function updateMargin(){
    rolar= false;
    const newMargin = (imgAtual*100);
    marginslides.style.marginLeft = `-${newMargin}%`;
    document.querySelector("#venha-conhecer .active").classList.remove("active");
    document.getElementById(imgAtual).classList.add("active")
}



