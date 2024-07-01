console.log("😎");

let displayAge = document.querySelector("#age");
let jours = document.querySelector("#jours");
let heures = document.querySelector("#heures");
let minutes = document.querySelector("#minutes");
let secondes = document.querySelector("#secondes");
const target = document.getElementById("target");
let ager = document.getElementById("age");
console.log(ager);
let softskill = [
  "Curieux !",
  "persévérant !",
  "positif !",
  "créatif !",
  "coopératif !",
  "Sans Alternance 😅",
];
let wordIndex = 0;
let letterindex = 0;
let diff_jours = "";
let diff_heures = "";
let diff_minutes = "";
let diff_secondes = "";

// function affiché age
function getAge(date) {
  let diff = Date.now() - date.getTime();
  let age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}
let age = getAge(new Date(1978, 07, 16));
displayAge.innerHTML = age;

// la date à partir de laquelle on compte
let cible = new Date("October 01, 2023 08:00:00");

// nombre de millisecondes par jour, heure, minute et seconde
let mms_jour = 24 * 60 * 60 * 1000;
let mms_heure = 60 * 60 * 1000;
let mms_minute = 60 * 1000;
let mms_seconde = 1000;

function decompte() {
  // la date courante
  let aujourdhui = new Date();

  // on crée les variables qui accueilleront les différences entre aujourd'hui et la date à atteindre
  let change_j = -1;
  let change_h = -1;
  let change_m = -1;

  // le total de millisecondes de différences
  let diff_mms = cible.getTime() - aujourdhui.getTime();

  // pareil pour les jours
  diff_jours = Math.floor(diff_mms / mms_jour);
  diff_mms -= diff_jours * mms_jour;

  // pour les heures
  diff_heures = Math.floor(diff_mms / mms_heure);
  diff_mms -= diff_heures * mms_heure;

  // les... minutes, bravo ;-)
  diff_minutes = Math.floor(diff_mms / mms_minute);
  diff_mms -= diff_minutes * mms_minute;

  // les secondes, ce qui reste en fait.
  let diff_secondes = Math.floor(diff_mms / mms_seconde);
  //   console.log(diff_jours);
  jours.innerHTML = diff_jours;
  heures.innerHTML = diff_heures;
  minutes.innerHTML = diff_minutes;
  secondes.innerHTML = diff_secondes;

  let results = diff_jours;
  return results;
  // on relance la fonction pour actualiser à la seconde
  setTimeout("decompte()", 1000);
}
setInterval(() => {
  decompte();
}, 1000);

// soft skill
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = softskill[wordIndex][letterindex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= softskill.length) {
      wordIndex = 0;
      letterindex = 0;
      loop();
    } else if (letterindex < softskill[wordIndex].length) {
      createLetter();
      letterindex++;
      loop();
    } else {
      wordIndex++;
      letterindex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();

// grid D3
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
