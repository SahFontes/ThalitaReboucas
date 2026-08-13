// ANIMAÇÃO AO APARECER NA TELA
const elementos = document.querySelectorAll(
    ".section, .card, .impactos div, .frases-grid div, .caixa-opiniao"
);

function mostrarElementos(){
    elementos.forEach(elemento => {
        const alturaElemento =
        elemento.getBoundingClientRect().top;
        const alturaTela =
        window.innerHeight;

        if(alturaElemento < alturaTela - 100){
            elemento.classList.add("aparecer");
        }
    });
}

window.addEventListener(
    "scroll",
    mostrarElementos
);

mostrarElementos();

// MENU MAIS ELEGANTE AO ROLAR

const header =
document.querySelector("header");

window.addEventListener(
    "scroll",
    ()=>{

        if(window.scrollY > 80){
            header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";
        }else{
            header.style.boxShadow =
            "none";
        }
    }
);

// SCROLL SUAVE DO MENU

const links =
document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener(
        "click",
        function(e){

            e.preventDefault();
            const destino =
            document.querySelector(
                this.getAttribute("href")
            );

            destino.scrollIntoView({
                behavior:"smooth"
            });
        }
    );
});

// BOTÃO VOLTAR AO TOPO

const botaoTopo =
document.createElement("button");

botaoTopo.innerHTML =
"↑";

botaoTopo.classList.add(
    "botao-topo"
);

document.body.appendChild(
    botaoTopo
);

window.addEventListener(
    "scroll",
    ()=>{

        if(window.scrollY > 500){

            botaoTopo.style.display =
            "flex";
        }else{

            botaoTopo.style.display =
            "none";
        }
    }
);

botaoTopo.addEventListener(
    "click",
    ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
);

// EFEITO DE DIGITAÇÃO NA FRASE PRINCIPAL
const texto =
"Histórias que parecem conversar com a gente.";
const elemento =
document.querySelector(".hero h2");
let indice = 0;

function escreverTexto(){

    if(indice < texto.length){
        elemento.innerHTML +=
        texto.charAt(indice);
        indice++;

        setTimeout(
            escreverTexto,
            70
        );
    }
}
elemento.innerHTML = "";


window.addEventListener(
    "load",
    escreverTexto
);


const swiper = new Swiper(".entrevistasSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

/* =========================================
   ROLETA
========================================= */

const roleta = document.getElementById("roleta");
const botaoRoleta = document.getElementById("girarRoleta");
const resultadoRoleta = document.getElementById("resultadoRoleta");

const resultados = [
    "AMIZADE — você valoriza as conexões que tornam tudo mais especial!",
    "HUMOR — rir das situações da vida é muito a sua vibe!",
    "LITERATURA — histórias fazem parte do seu universo!",
    "SONHOS — nunca deixe de imaginar coisas grandes!",
    "EMOÇÕES — sentir tudo intensamente também faz parte da jornada!",
    "JUVENTUDE — aproveitar cada fase e descobrir quem você é!"
];

let rotacaoAtual = 0;
let girando = false;

botaoRoleta.addEventListener("click", () => {

    if (girando) return;

    girando = true;
    botaoRoleta.disabled = true;

    resultadoRoleta.textContent = "Girando...";

    const voltas = 5 + Math.floor(Math.random() * 4);
    const angulo = Math.floor(Math.random() * 360);

    rotacaoAtual += voltas * 360 + angulo;

    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

    setTimeout(() => {

        const resultado =
            resultados[Math.floor(Math.random() * resultados.length)];

        resultadoRoleta.textContent = resultado;

        botaoRoleta.disabled = false;
        girando = false;

    }, 4200);
});


