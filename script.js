console.log("dog");

let count;

let clickcount=(".clickcount");
clickcount=0


let storyImage=document.querySelector(".storyImage");

let button=document.querySelector(".button");

button.addEventListener("click", function() {
// {clickCounter+1};
// result.innerHTML="You have taken this quiz " + clickcount + " time(s).";
// }


let one=document.querySelector(".one").value;
console.log(one);
let two=document.querySelector(".two").value;
console.log(two);
let x = document.querySelector(".x");
console.log(x);


if (one <=18 && two === "Short") {
x.innerHTML ="You match the charateristics of Squidward 🐙";
storyImage.src="squidward.jpg";}

else if(one <=18 && two==="High")
{x.innerHTML="You  match the charateristics of Spongebob 🧽";
storyImage.src="spongebob.webp";}

else if (one>18 && two==="Short") 
{x.innerHTML="You match the charateristics of Mr. Krabs 🦀";
storyImage.src="krabs.jpg";}

else if (one>18 && two==="High") 
{x.innerHTML="You match the charateristics of Mrs. Puff 🐡";
storyImage.src="puff.jpg";}



else 
{x.innerHTML="Looks like we've encountered an error, please try again ";
storyImage.src="error.png";
result.innerHTML="You have unsuccessfully taken this quiz 1 time(s).";
}



});




function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (clickcount) {
     clickcount = Number(clickcount)+1;
    } else  {
    clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have taken this quiz " + clickcount + " time(s).";
  } else  {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";  }
}

