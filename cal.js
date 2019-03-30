
var button; 
var screen; 
var result = 0;
//var equalButton []; 

button = document.querySelectorAll(".btn");
screen = document.querySelector("#tsx");


for(var i = 0; i<button.length; i++){
	button[i].addEventListener("click", function (button){
		//alert("you pressed " + this.innerText +"!!");
		//equalButton.push() should append to array

		if(screen.innerText === "0"){
			screen.innerText = "";
		}

		if(this.innerText === "AC"){
			screen.innerText = "0";
		}
		else{
			screen.innerText += this.innerText;
		}
		
		if(this.innerText === "="){
			screen.innerText = result; 
			//equalButton.push() Calculate result 
		}
});
}



/*button.forEach(function(aButton){
	aButton.addEventListener("click", alert("you pressed a button!!"));
});*/

