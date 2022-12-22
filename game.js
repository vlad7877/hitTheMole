let character = document.querySelector(".character")
let scor = document.querySelector(".score")
let bomb = document.querySelector(".bomb")
let score = 0

character.onclick = () =>{
	let num = Math.random()


	if(num < 0.5){
		bomb.style.display = "block"
		character.style.display = "none"
		bomb.style.top = Math.random()*500+"px";
		bomb.style.left = Math.random()*1000+"px"
		bomb.style.borderRadius = Math.random() * (50) + "%";
		bomb.style.width = Math.random() * 200 + "px";
		bomb.style.height = Math.random() * 200 + "px";
			
	}else{
		character.style.display = "block"
		bomb.style.display = "none"
		character.style.top = Math.random()*500+"px";
		character.style.left = Math.random()*1000+"px"
		character.style.borderRadius = Math.random() * (50) + "%";
		character.style.backgroundColor = "rgb("+Math.random() * 255 + "," +Math.random() * 255 + "," +Math.random() * 255 + ")";
		character.style.width = Math.random() * 200 + "px";
		character.style.height = Math.random() * 200 + "px";
	}
	score += 1
	scor.innerHTML = "score: " + score


}

bomb.onclick = () => {
		let num = Math.random()


	if(num < 0.5){
		bomb.style.display = "block"
		character.style.display = "none"
		bomb.style.top = Math.random()*500+"px";
		bomb.style.left = Math.random()*1000+"px"
		bomb.style.borderRadius = Math.random() * (50) + "%";
		bomb.style.width = Math.random() * 200 + "px";
		bomb.style.height = Math.random() * 200 + "px";
			
	}else{
		character.style.display = "block"
		bomb.style.display = "none"
		character.style.top = Math.random()*500+"px";
		character.style.left = Math.random()*1000+"px"
		character.style.borderRadius = Math.random() * (50) + "%";
		character.style.backgroundColor = "rgb("+Math.random() * 255 + "," +Math.random() * 255 + "," +Math.random() * 255 + ")";
		character.style.width = Math.random() * 200 + "px";
		character.style.height = Math.random() * 200 + "px";
	}
	score -= 10
	scor.innerHTML = "score: " + score
}

setInterval(function(){
	if(bomb.style.display == "block"){
		setTimeout(function(){
		character.style.display = "block"
		bomb.style.display = "none"

		},3000 )
	}
},30)






// setInterval(function(){
// 	character.style.top = Math.random()*500+"px";
// 	character.style.left = Math.random()*1000+"px";
// 	character.style.borderRadius = Math.random() * (50) + "%";
// 	character.style.backgroundColor = "rgb("+Math.random() * 255 + "," +Math.random() * 255 + "," +Math.random() * 255 + ")";
// 	character.style.width = Math.random() * 200 + "px";
// 	character.style.height = Math.random() * 200 + "px";



// }, 3000)
