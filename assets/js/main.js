// +++++++++++++globale Scopes++++++++++++++++++
// Runden
const rundenAnzeige = document.querySelector(".runden-anzeige");
const rundenAnzahl = document.querySelector(".runden-anzahl");
const gespielteRunden = document.querySelector(".gespielte-runden");
const gesamteRunden = document.querySelector(".gesamte-runden");
const resetBtn = document.querySelector(".reset");

//Spielstaende
const spielstandSpieler = document.querySelector(".spielstand-spieler");
const spielstandComputer = document.querySelector(".spielstand-computer");

//Anzeige - gewonnen, verloren, 'lass uns spielen'
const actionOutput = document.querySelector(".action-output");

// Button Area mit Buttons: Schere, Stein, Papier
const btnArea = document.querySelector(".choices");
const schereBtn = document.querySelector(".schere");
const steinBtn = document.querySelector(".stein");
const papierBtn = document.querySelector(".papier");

const makeYourMove = document.querySelector(".mach-deinen-zug");

//variable festlegen um Runden zu zaehlen
let aktuelleRunde = 0;

//variablen festlegen um Spielstaende zu zaehlen
let spielerPunkte = 0;
let computerPunkte = 0;

//variable festlegen um spaeter zu speichern was der Computer ausgewaehlt hat
let computerChoice = "";

// +++++++++++++++++++++++ Funktionen +++++++++++++++++++++++
//random Computer Choice generieren
const randomPcChoice = () => {
	let randomNum = Math.floor(Math.random() * 3 + 1);
	console.log(randomNum);

	if (randomNum === 1) {
		computerChoice = "Schere";
	} else if (randomNum === 2) {
		computerChoice = "Stein";
	} else {
		computerChoice = "Papier";
	}
};

// Play/Main Funktion
const playGame = userChoice => {
	event.preventDefault();
	randomPcChoice();

	//Rundenazahl auslesen
	let gesamteRundenZahl = document.querySelector(
		'input[name="num-of-rounds"]:checked',
	).value;
	//console.log(gesamteRundenZahl);

	//Runden im HTML anzeigen
	gesamteRunden.innerHTML = gesamteRundenZahl;
	rundenAnzahl.classList.add("display-none");
	rundenAnzeige.classList.add("display-block");

	//Runden hochzaehlen
	aktuelleRunde++;
	gespielteRunden.innerHTML = aktuelleRunde;

	//eigentliches Spiel, wer gewinnt/verliert + Punkte verteilen
	if (
		(userChoice == "Schere" && computerChoice == "Papier") ||
		(userChoice == "Stein" && computerChoice == "Schere") ||
		(userChoice == "Papier" && computerChoice == "Stein")
	) {
		spielerPunkte++;
		actionOutput.innerHTML = `You won`;
		if (userChoice === "Schere") {
			schereBtn.style.animation = "green 1s linear";
		} else if (userChoice === "Stein") {
			steinBtn.style.animation = "green 1s linear";
		} else if (userChoice === "Papier") {
			papierBtn.style.animation = "green 1s linear";
		}
	} else if (userChoice == computerChoice) {
		actionOutput.innerHTML = `Unetschieden. Beide haben ${userChoice} gewaehlt.`;
		if (userChoice === "Schere") {
			schereBtn.style.animation = "orange 1s linear";
		} else if (userChoice === "Stein") {
			steinBtn.style.animation = "orange 1s linear";
		} else if (userChoice === "Papier") {
			papierBtn.style.animation = "orange 1s linear";
		}
	} else {
		computerPunkte++;
		actionOutput.innerHTML = `You loose`;
		if (userChoice === "Schere") {
			schereBtn.style.animation = "red 1s linear";
		} else if (userChoice === "Stein") {
			steinBtn.style.animation = "red 1s linear";
		} else if (userChoice === "Papier") {
			papierBtn.style.animation = "red 1s linear";
		}
	}

	//Spielstand ins HTML schreiben
	spielstandSpieler.innerHTML = spielerPunkte;
	spielstandComputer.innerHTML = computerPunkte;

	// Spiel beenden bei erreichen der ausgewaehlten Rundenanzahl
	if (aktuelleRunde - 1 === gesamteRundenZahl - 1) {
		if (spielerPunkte === computerPunkte) {
			actionOutput.innerHTML = `Gleichstand! Du & der Computer haben jeweils ${spielerPunkte} Punkte.`;
		} else if (spielerPunkte > computerPunkte) {
			actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
		} else {
			actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
		}
		gameOver();
	}
};

//  Game Over Funktion
const gameOver = () => {
	btnArea.classList.add("display-none");
	makeYourMove.classList.add("display-none");
};

schereBtn.addEventListener("click", () => playGame("Schere"));
steinBtn.addEventListener("click", () => playGame("Stein"));
papierBtn.addEventListener("click", () => playGame("Papier"));

//reset function
resetBtn.addEventListener("click", () => {
	spielerPunkte = 0;
	computerPunkte = 0;
	aktuelleRunde = 0;
	actionOutput.innerHTML = "Lass uns spielen";

	spielstandSpieler.innerHTML = 0;
	spielstandComputer.innerHTML = 0;

	btnArea.classList.remove("display-none");
	makeYourMove.classList.remove("disply-none");
	rundenAnzahl.classList.remove("display-none");
	rundenAnzeige.classList.remove("display-block");
});
