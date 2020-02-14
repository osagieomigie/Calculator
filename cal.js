
let button; 
let calScreen; 
let result = 0;
let previousTmp = 0;

button = document.querySelectorAll(".btn");
calScreen = document.querySelector("#resultScreen"); 
let previousResult = document.querySelector("#prevResultScreen");
let screenContains = calScreen.innerText;

for(var i = 0; i<button.length; i++){
	button[i].addEventListener("click", function (button){

		// clear screen before user starts entering input
		if(calScreen.innerText === "0"){ 
			calScreen.innerText = "";
		}

		// clear screen 
		if(this.innerText === "C"){
			calScreen.innerText = "0";
			previousResult.innerText = "Ans = "+previousTmp; 
		}
		else if (this.innerText === "CE"){
			//delete last digit from number
			console.log("clearing digit")
			let tmpSC = calScreen.innerText;
			let deletePos = tmpSC.length-1; 
			calScreen.innerText = tmpSC.slice(0, deletePos);

			// handles case when there was only 1 digit on screen 
			if (calScreen.innerText.length === 0){
				calScreen.innerText = 0; 
			}
		}
		else{
			if(this.innerText != "="){
				calScreen.innerText += this.innerText;
			}
		}
		
		if(this.innerText === "="){
			if(calScreen.innerText.length !== 0){
				screenContains = calScreen.innerText;
				previousResult.innerText = screenContains+"=";
				previousTmp = screenContains+"=";

				try{
					let tmpBracket = screenContains.indexOf("(");
					let closingBracket = screenContains.indexOf(")");
					let tmpBracket_operator =screenContains.charAt(tmpBracket-1);

					// check if expression uses brackets
					if ((tmpBracket != -1 ) && (tmpBracket_operator != 0)){

						// check for closing brackets, throw error if there isnt one 
						if (closingBracket < 0 ){
							console.log("No closing bracket");
							throw "ERROR";
						}

						if ((tmpBracket_operator !== "+") && (tmpBracket_operator !== "-") && (tmpBracket_operator !== "/") && (tmpBracket_operator !== "*") ){
							screenContains = screenContains.slice(0, tmpBracket) + "*" + screenContains.slice(tmpBracket);
							previousResult.innerText = screenContains + "=";
							previousTmp = screenContains + "=";
							result = eval(screenContains);
						}else{
							result = eval(screenContains);
						}
					}else{
						result = eval(screenContains);
					}

					// captures the inifinity case from eval
					if (result == "Infinity"){
						result = "ERROR";
					}

					calScreen.innerText = result;
					previousTmp = screenContains + "=";
					previousResult.innerText = screenContains + "=";
					console.log("The result: " + result);
				}catch(error){
					// handle case of when theres an error on the 1st calculation
					if ( previousResult instanceof HTMLButtonElement){
						previousResult.innerText = screenContains + "=Syntax ERROR";
						previousTmp = screenContains +  "=Syntax ERROR";
					}else{
						previousResult.innerText = previousResult + "=Syntax ERROR";
						previousTmp = screenContains +  "=Syntax ERROR";
					}

					calScreen.innerText = "Syntax ERROR";
				}
			}else{
				calScreen.innerText = "0";
			} 
		}
});
}