var o=document.getElementById("orange");
var b=document.getElementById("blue");
var g=document.getElementById("orange-kid");
var v=document.getElementById("blue-man");

// call this function when "orange-kid" is clicked!
o.addEventListener("click", moveGif);
function moveGif(){
	g.classList.add("fly-forward");
	v.src = "images/vegeta0.png";
}

// call this function when "blue-man" is clicked!
b.addEventListener("click", changePicture);
function changePicture(){
	v.src = "images/vegeta1.png";
	g.classList.remove("fly-forward");
}