// =========================
// BOTÕES
// =========================

const botaoJogar = document.getElementById("jogar");
const botaoComecar = document.getElementById("comecar");

botaoJogar.addEventListener("click", function () {
    alert("⚽ Prepare seu time! A partida vai começar!");
});

botaoComecar.addEventListener("click", function () {
    alert("🏆 Sua jornada começa agora!");
});


// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });

});


// =========================
// MENU MOBILE
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "20px";
        nav.style.background = "#080d0f";
        nav.style.padding = "20px";
        nav.style.borderRadius = "10px";

    }

});


// =========================
// CONSOLE
// =========================

console.log("⚽ eFootball Landing Page carregada!");
