var random = function() {
	var x = Math.random().toString(16).slice(2,8)
	console.log('#' + x);
	return '#' + x
}

let color = document.querySelector(".color");

color.addEventListener("keydown", function() {
      if(event.code === "Space") {
            color.style.background = random()
       }
})