console.log("dog");



let storyImage=document.querySelector(".storyImage");

let button=document.querySelector(".button");

button.addEventListener("click", function() {

let one=document.querySelector(".one").value;
console.log(one);
let two=document.querySelector(".two").value;
console.log(two);
let x = document.querySelector(".x");
console.log(x);




if (one <=30 && two === "Short") {
x.innerHTML ="You are Squidward";
storyImage.src="squidward.png";
} else if(){

    
}


// if (one==="30"&&two==="High")  
// {message.innerHTML="You are Spongebob";}
// storyImage.src="spongebob.webp";

// if (one==="40"&&two==="Short")  
// {message.innerHTML="You mk";}
// storyImage.src="krabs.png";

// if (one==="40"&&two==="High")  
// {message.innerHTML="You are ms puff";}
// storyImage.src="puff.jpg";
// }



});