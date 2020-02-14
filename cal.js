
let button; 
let calScreen; 
let result = 0;
let previousResult = 0;

button = document.querySelectorAll(".btn");
calScreen = document.querySelector("#resultScreen"); 
previousResult = document.querySelector("#prevResultScreen");
let screenContains = calScreen.innerText;

for(var i = 0; i<button.length; i++){
	button[i].addEventListener("click", function (button){

		if(calScreen.innerText === "0"){ 
			calScreen.innerText = "";
		}

		// handle CE case here
		if(screenContains.includes("CE")){
			//delete last digit from number
			// let deletePos = calScreen.length(); 
			// calScreen = calScreen.slice(0, deletePos);
			// console.log("clearing digit");
		}

		if(this.innerText === "C"){
			calScreen.innerText = "0";
			previousResult.innerText = "Ans = "+result; 
		}
		else{
			if(this.innerText != "="){
				calScreen.innerText += this.innerText;
			}
		}
		
		if(this.innerText === "="){
			if(calScreen.innerText.length !== 0){
				previousResult.innerText = screenContains+"=";

				try{
					let tmpBracket = screenContains.indexOf("(");
					let closingBracket = screenContains.indexOf(")");
					let tmpBracket_operator =screenContains.charAt(tmpBracket-1);

					// check if expression uses brackets
					if ((tmpBracket != -1 ) && (tmpBracket_operator != 0)){

						// check for closing brackets
						if (closingBracket < 0 ){
							console.log("No closing bracket");
							throw "ERROR";
						}

						if ((tmpBracket_operator !== "+") && (tmpBracket_operator !== "-") && (tmpBracket_operator !== "/") && (tmpBracket_operator !== "*") ){
							screenContains = screenContains.slice(0, tmpBracket) + "*" + screenContains.slice(tmpBracket);
							result = eval(screenContains);
							//previousResult = screenContains;
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
					previousResult.innerText = screenContains + "=";
					console.log("The result: " + result);
				}catch(error){
					// handle case of when theres an error on the 1st calculation
					if ( previousResult instanceof HTMLButtonElement){
						previousResult.innerText = screenContains + "=Syntax ERROR";
						previousResult = screenContains +  "=Syntax ERROR";
					}else{
						previousResult.innerText = previousResult + "=Syntax ERROR";
					}

					calScreen.innerText = "Syntax ERROR";
				}
			}else{
				calScreen.innerText = "0";
			} 
		}
});
}