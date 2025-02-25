// Function Initializations

function comparison() {
/* 	console.log(number); */
	const guessValue = guessField.value;
/* 	console.log(guessValue); */

	if (guessValue < 1 || guessValue > 100) {
		resultField.textContent = `That value is not valid!`;
	}	else if (tries === 10) {
		resultField.textContent = `You lost!`;
		const finalMessageLost = document.createElement("div");
		const finalMessageContent = document.createTextNode("You lost!");
		finalMessageLost.appendChild(finalMessageContent);
		finalMessageLost.className = "center_div_body_results_finalMessage";

		const tryAgainButton = document.createElement("button");
		const tryAgainButtonContent = document.createTextNode("Play again?");
		tryAgainButton.appendChild(tryAgainButtonContent);
		tryAgainButton.className = "center_div_body_results_playAgainButton";

		finalMessageLost.appendChild(tryAgainButton);
		resultsDiv.replaceChildren(finalMessageLost);

		const tryAgainReference = document.querySelector(".center_div_body_results_playAgainButton");
		tryAgainReference.addEventListener("click", reset);

	} else {
		if (guessValue) {
			if (guessField.value == number) {

				/*resultField.textContent = `You won!`; */
				const finalMessageWin = document.createElement("div");
				const finalMessageContent = document.createTextNode("You win!");
				finalMessageWin.appendChild(finalMessageContent);
				finalMessageWin.className = "center_div_body_results_finalMessage";

				const tryAgainButton = document.createElement("button");
				const tryAgainButtonContent = document.createTextNode("Play again?");
				tryAgainButton.appendChild(tryAgainButtonContent);
				tryAgainButton.className = "center_div_body_results_playAgainButton";
		
				finalMessageWin.appendChild(tryAgainButton);
				resultsDiv.replaceChildren(finalMessageWin);
				
				const tryAgainReference = document.querySelector(".center_div_body_results_playAgainButton");
				tryAgainReference.addEventListener("click", reset);

			} else if (guessField.value > number) {

				lohiField.textContent = `Too high!`;
				resultField.textContent = `${guessValue}`;
				triesField.textContent += `${guessValue} `;
				tries++;
			
			} else if (guessField.value < number) {
				
				lohiField.textContent = `Too low!`;
				resultField.textContent = `${guessValue}`;
				triesField.textContent += `${guessValue} `;
				tries++;
			
			}
		}
	}
	guessField.value = "";
}

function reset() {
	console.log(":p");

	const divResultField = document.createElement("div");
	divResultField.appendChild(document.createTextNode("Result: "));
	const pResultField = document.createElement("p");
	pResultField.className = "resultField";
	divResultField.appendChild(pResultField);

	const divLohiField = document.createElement("div");
	divLohiField.appendChild(document.createTextNode("Low or High: "));
	const pLohiField = document.createElement("p");
	pLohiField.className = "lohiField";
	divLohiField.appendChild(pLohiField);

	const divTriesField = document.createElement("div");
	divTriesField.appendChild(document.createTextNode("Tries: "));
	const pTriesField = document.createElement("p");
	pTriesField.className = "triesField";
	divTriesField.appendChild(pTriesField);

	resultsDiv.replaceChildren(divResultField, divLohiField, divTriesField);

	init();
}

function init() {

	resultsDiv = document.querySelector(".center_div_body_results");

	guessField = document.querySelector(".guessField");

	guessSubmit = document.querySelector(".guessSubmit");

	resultField = document.querySelector(".resultField");

	lohiField = document.querySelector(".lohiField");

	triesField = document.querySelector(".triesField");

	// Reset Variables

	number = Math.trunc(Math.random()*(100+1));

	tries = 0;

	guessField.value = "";

	guessField.focus();
}

// Variable Initializations

let number = 0;

let tries = 0;

let resultsDiv;

let guessField;

let guessSubmit;

let resultField;

let lohiField;

let triesField;

// Init first game

init();

// Event Listener Initializations

guessSubmit.addEventListener("click", comparison);
guessField.addEventListener("keyup", (e) => {

	if (e.repeat) {
		return
	}

	else if (e.code === 'Enter') {
		console.log(e.code);
		comparison();
	} else if (e.code === 'NumpadEnter') {
		console.log(e.code);
		comparison();
	}
}, true)