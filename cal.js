
let button; 
let calScreen; 
let result = 0;
let previousResult = 0;

button = document.querySelectorAll(".btn");
calScreen = document.querySelector("#tsx");


for(var i = 0; i<button.length; i++){
	button[i].addEventListener("click", function (button){

		if(calScreen.innerText === "0"){ // p 0  
			calScreen.innerText = "";
		}

		if(this.innerText === "C"){
			calScreen.innerText = "0";
		}
		else{

			if(this.innerText != "="){
				calScreen.innerText += this.innerText;
			}
		}
		
		if(this.innerText === "="){
			if(calScreen.innerText.length >= 3){
				let screenContains = calScreen.innerText;
				try{
					let tmpBracket = screenContains.indexOf("(");

					if (tmpBracket != -1 ){
						
						let tmpBracket_operator =screenContains.charAt(tmpBracket-1);

						if ((tmpBracket_operator !== "+") || (tmpBracket_operator !== "-") || (tmpBracket_operator !== "/") || (tmpBracket_operator !== "*") ){
							screenContains = screenContains.slice(0, tmpBracket) + "*" + screenContains.slice(tmpBracket);
							//alert(screenContains);
							result = eval(screenContains);
							calScreen.innerText = result;
							previousResult = screenContains;
						}
					}
					
					//previousResult = calScreen.innerText
					console.log("The result: " + result);
				}catch(error){
					calScreen.innerText = previousResult + "=Syntax ERROR";
				}
			} 
		}
});
}