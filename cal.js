
var button; 

button = document.querySelectorAll(".btn");


for(var i = 0; i<button.length; i++){
	button[i].addEventListener("click", pressedButton);
}

/*button.forEach(function(aButton){
	aButton.addEventListener("click", alert("you pressed a button!!"));
});*/

function pressedButton(){
	alert("you pressed a button!!");
}