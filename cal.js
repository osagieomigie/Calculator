
let button; 
let calScreen; 
let result = 0;
let previousResult = 0;

button = document.querySelectorAll(".btn");
calScreen = document.querySelector("#resultScreen"); 
previousResult = document.querySelector("#prevResultScreen");

for(var i = 0; i<button.length; i++){
	button[i].addEventListener("click", function (button){

		if(calScreen.innerText === "0"){ 
			calScreen.innerText = "";
		}

		// handle CE case here
		if(calScreen.innerText === "CE"){
			//delete last digit from number
			// carry answer to previous result screen.
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
				let screenContains = calScreen.innerText;
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
							//alert(screenContains);
							result = eval(screenContains);
							//previousResult = screenContains;
							//calScreen.innerText = result;
						}else{
							//alert("Has operator");
							//alert(screenContains);
							result = eval(screenContains);
							//calScreen.innerText = result;
						}
					}else{
						result = eval(screenContains);
						//calScreen.innerText = result;
					}
					
					//previousResult = calScreen.innerText

					// captures the inifinity case from eval
					if (result == "Infinity"){
						result = "ERROR";
					}

					calScreen.innerText = result;
					console.log("The result: " + result);
				}catch(error){
					previousResult.innerText = previousResult + "=Syntax ERROR";
					calScreen.innerText = "Syntax ERROR";
				}
			}else{
				calScreen.innerText = "0";
				// dp the repeating equal sign done in google calculator.
			} 
		}
});
}