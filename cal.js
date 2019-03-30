
var button; 
var calScreen; 
var result = 0;

button = document.querySelectorAll(".btn");
calScreen = document.querySelector("#tsx");


for(var i = 0; i<button.length; i++){
	button[i].addEventListener("click", function (button){

		if(calScreen.innerText === "0"){ // p 0  
			calScreen.innerText = "";
		}

		if(this.innerText === "AC"){
			calScreen.innerText = "0";
		}
		else{

			if(this.innerText != "="){
				calScreen.innerText += this.innerText;
			}
		}
		
		if(this.innerText === "="){
			if(calScreen.innerText.length >= 3){
					result = eval(calScreen.innerText);
					calScreen.innerText = result;
				} 
		}
});
}





