//globale scopes
const rundenOutput = document.querySelector(".count-rounds article");
const actionOutput = document.querySelector(".action-output h3");

//outputs fuer spielstaende
const spielstandSpieler = document.querySelector(".spielstand-spieler");
const spielstandComputer = document.querySelector(".spielstand-computer");

//Variablen fuer Punkte
let spielerPunkte = 0;
let computerPunkte = 0;

//Button value auslesen
let spielerChoice = null;
const getChoiceValue = choice => {
	spielerChoice = choice;
};

//Buttons fuer color change
const btnSchere = document.querySelector(".btn1");
const btnStein = document.querySelector(".btn2");
const btnPapier = document.querySelector(".btn3");

//Variable fuer aktuelle Rundenzahl
let aktuelleRunde = 0;
//rundenanzahl auslesen
let runde = null;
const getRoundValue = num => {
	runde = num;
};

//++++++++++++  play funktion +++++++++++++
const play = () => {
	event.preventDefault();

	//random computer choice generieren
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	if (computerChoice === 1) {
		computerChoice = "Schere";
	} else if (computerChoice === 2) {
		computerChoice = "Stein";
	} else {
		computerChoice = "Papier";
	}

	console.log({ spielerChoice }, { computerChoice });

	if (aktuelleRunde < runde - 1) {
		btnSchere.style.border = "2px solid black";
		btnStein.style.border = "2px solid black";
		btnPapier.style.border = "2px solid black";
		if (spielerChoice === computerChoice) {
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			actionOutput.innerHTML = "Unentschieden!";
		} else if (spielerChoice === "Schere" && computerChoice === "Stein") {
			btnSchere.style.animation = "red 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			actionOutput.innerHTML = `${computerChoice} schlaegt ${spielerChoice}. Du verlierst 😐`;
		} else if (spielerChoice === "Schere" && computerChoice === "Papier") {
			btnSchere.style.animation = "green 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			actionOutput.innerHTML = `${spielerChoice} schlaegt ${computerChoice}. Du gewinnst 😌`;
		} else if (spielerChoice === "Stein" && computerChoice === "Schere") {
			btnStein.style.animation = "green 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			actionOutput.innerHTML = `${spielerChoice} schlaegt ${computerChoice}. Du gewinnst 😌`;
		} else if (spielerChoice === "Stein" && computerChoice === "Papier") {
			btnStein.style.animation = "red 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			actionOutput.innerHTML = `${computerChoice} schlaegt ${spielerChoice}. Du verlierst 😐`;
		} else if (spielerChoice === "Papier" && computerChoice === "Schere") {
			btnPapier.style.animation = "red 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			actionOutput.innerHTML = `${computerChoice} schlaegt ${spielerChoice}. Du verlierst 😐`;
		} else if (spielerChoice === "Papier" && computerChoice === "Stein") {
			btnPapier.style.animation = "green 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			actionOutput.innerHTML = `${spielerChoice} schlaegt ${computerChoice}. Du gewinnst 😌`;
		}
	} else if (aktuelleRunde === runde - 1) {
		btnSchere.style.border = "2px solid black";
		btnStein.style.border = "2px solid black";
		btnPapier.style.border = "2px solid black";
		if (spielerChoice === computerChoice) {
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			if (spielerPunkte > computerPunkte) {
				actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
			} else {
				actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
			}
		} else if (spielerChoice === "Schere" && computerChoice === "Stein") {
			btnSchere.style.animation = "red 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			if (spielerPunkte > computerPunkte) {
				actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
			} else {
				actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
			}
		} else if (spielerChoice === "Schere" && computerChoice === "Papier") {
			btnSchere.style.animation = "green 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			if (spielerPunkte > computerPunkte) {
				actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
			} else {
				actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
			}
		} else if (spielerChoice === "Stein" && computerChoice === "Schere") {
			btnStein.style.animation = "green 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			if (spielerPunkte > computerPunkte) {
				actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
			} else {
				actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
			}
		} else if (spielerChoice === "Stein" && computerChoice === "Papier") {
			btnStein.style.animation = "red 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			if (spielerPunkte > computerPunkte) {
				actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
			} else {
				actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
			}
		} else if (spielerChoice === "Papier" && computerChoice === "Schere") {
			btnPapier.style.animation = "red 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			computerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			if (spielerPunkte > computerPunkte) {
				actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
			} else {
				actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
			}
		} else if (spielerChoice === "Papier" && computerChoice === "Stein") {
			btnPapier.style.animation = "green 1s linear 1";
			aktuelleRunde++;
			rundenOutput.innerHTML = `${aktuelleRunde} / ${runde}`;
			spielerPunkte++;
			spielstandSpieler.innerHTML = spielerPunkte;
			spielstandComputer.innerHTML = computerPunkte;
			if (spielerPunkte > computerPunkte) {
				actionOutput.innerHTML = `Glueckwunsch, du hast den Computer geschlagen`;
			} else {
				actionOutput.innerHTML = `Du hast leider gegen den Computer verloren`;
			}
		}
	}
};
