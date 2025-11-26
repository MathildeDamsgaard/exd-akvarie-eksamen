"use strict";
let currentFishSound = null; // holder styr på den aktive fiskelyd

// DOM Elementer
const getCrab = document.getElementById("crab");
const getNemoFish = document.getElementById("nemo");
const getPufferFish = document.getElementById("pufferfish");
const getShark = document.getElementById("shark");
const getStingRay = document.getElementById("stingray");
const getTurtle = document.getElementById("turtle");
const getSeaweed = document.getElementById("seaweed");

// Opretter et lyd-objekt og tildeler source til den specifikke lydfil i mappen "sound"
const soundCrab = new Audio();
soundCrab.src = "sound/krabbe.wav";

const soundNemo = new Audio();
soundNemo.src = "sound/nemo.wav";

const soundPuffer = new Audio();
soundPuffer.src = "sound/pufferfisk.wav";

const soundShark = new Audio();
soundShark.src = "sound/hvidhaj.wav";

const soundStingray = new Audio();
soundStingray.src = "sound/rokke.wav";

const soundTurtle = new Audio();
soundTurtle.src = "sound/skilpadde.wav";

//Dataobjekt med information om hver fisk
const fishInfo = {
  crab: {
    title: "KRABBE",
    text: "Hej! Jeg er en krabbe. Jeg bor på stranden og i vandet, og jeg går sidelæns. Jeg har et hårdt skjold, som beskytter mig, og når jeg vokser, skifter jeg det gamle skjold ud med et nyt. Jeg spiser næsten alt - både planter, små dyr og nogle gange døde fisk. Selv om jeg ser lille ud, kan nogle af mine venner blive over en meter store.",
  },
  nemo: {
    title: "KLOVNFISK",
    text: "Hej! Jeg er en klovnfisk. Jeg er en lille, farverig fisk med orange og hvide striber - næsten som en lille tiger i vandet. Måske har du set mig i filmen Find Nemo? Jeg bor i en søanemone, som har små stikkende arme, men de kan ikke stikke mig, fordi jeg har et særligt slimlag. Jeg elsker at svømme og lege med mine venner!",
  },
  pufferfish: {
    title: "PUFFERFISK",
    text: "Hej! Jeg er en pufferfisk og jeg bliver bogstaveligt talt oppustet, når jeg bliver stresset! Jeg kan blive op til tre gange min normale størrelse, så jeg ligner en ballon - men uden at tage på i vægt! Jeg er super giftig. Ét lille måltid af mig, og du får en evig madforgiftning. Selvom jeg ser sød ud, er jeg faktisk et af havets mest dødelige dyr. Surprise!",
  },
  shark: {
    title: "HVIDHAJ",
    text: "Hej! Jeg er en hvidhaj. Jeg er en stor fisk, der bor i havet. Jeg har skarpe tænder, og man kalder mig hvidhaj, fordi min mave er lys. Du kan finde mig i varme have over hele verden. Jeg kan svømme meget hurtigt! Selvom jeg ser farlig ud, er jeg mest forvirret. Nogle gange tror jeg, at mennesker er sæler.",
  },
  stingray: {
    title: "ROKKE",
    text: "Hej! Jeg er en rokke. Jeg er næsten lige så flad som en pandekage, og jeg elsker at gemme mig under sandet. Jeg spiser muslinger og krabber. Mine øjne sidder ovenpå mit hovede, og min mund sidder nedenunder. Jeg har også en lang hale, som kan være giftig, og jeg bruger den til at forsvare mig selv. Jeg kan blive op til 7 meter lang!",
  },
  turtle: {
    title: "SKILPADDE",
    text: "Hej! Jeg er en skilpadde. Jeg er et roligt og venligt dyr, som for det meste lever i de varme have. Jeg har ikke specielt travlt i livet - jeg er nemlig ikke hurtig. Men hvis jeg endelig skal skynde mig, kan jeg faktisk svømme hurtigt. Jeg svømmer en hel del og bevæger mig mange kilometer med mine finner.",
  },
  seaweed: {
    title: "TANG",
    text: "“Hej! Jeg er tang. Jeg vokser i vandet og mange fisk bor ved mig. Jeg kan vokse hurtigt og jeg kan både være grøn, brun og rød. Mennesker kan spise mig! Måske har du smagt mig i sushi?”",
  },
};

// Funktion: vis popup med HTML-indhold
function showFishPopup(html) {
  const popup = document.getElementById("fish-popup");
  if (!popup) return;
  popup.querySelector(".popupBody").innerHTML = html;
  popup.classList.add("is-visible");
}

// Funktion: skjul popup
function hideFishPopup() {
  const popup = document.getElementById("fish-popup");
  if (!popup) return;
  popup.classList.remove("is-visible");
  popup.setAttribute("aria-hidden", "true");
  // Stop lyd, hvis en spiller
  if (currentFishSound) {
    currentFishSound.pause();
    currentFishSound.currentTime = 0;
  }
}

// Luk-knap
const closeBtn = document.querySelector(".closeBtn");
if (closeBtn) closeBtn.addEventListener("click", hideFishPopup);

// Binder click-handlere til alle fisk ved at bruge deres id'er
// Når der klikkes, hentes teksten fra fishInfo og sendes til showFishPopup
[
  "crab",
  "nemo",
  "pufferfish",
  "shark",
  "stingray",
  "turtle",
  "seaweed",
].forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", () => {
    const info = fishInfo[id];
    if (!info) return;
    // Vis popup
    showFishPopup(`<strong>${info.title}</strong><p>${info.text}</p>`);
    // Stop evt. tidligere lyd
    if (currentFishSound) {
      currentFishSound.pause();
      currentFishSound.currentTime = 0;
    }
    switch (id) {
      case "crab":
        currentFishSound = new Audio("sound/krabbe.wav");
        break;
      case "nemo":
        currentFishSound = new Audio("sound/nemo.wav");
        break;
      case "pufferfish":
        currentFishSound = new Audio("sound/pufferfisk.wav");
        break;
      case "shark":
        currentFishSound = new Audio("sound/hvidhaj.wav");
        break;
      case "stingray":
        currentFishSound = new Audio("sound/rokke.wav");
        break;
      case "turtle":
        currentFishSound = new Audio("sound/skilpadde.wav");
        break;
      case "seaweed":
        currentFishSound = new Audio("sound/tang.wav");
        break;
    }
    // Afspil lyd
    currentFishSound.play();
  });
});
