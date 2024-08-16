//Array of dice images
let images1=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
let images2=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
//Generate Random Numbers
let randomNum1=Math.floor(Math.random()*images1.length);
let randomNum2=Math.floor(Math.random()*images2.length);
//Get image elements by class name
let img1=document.getElementsByClassName("img1")[0];
let img2=document.getElementsByClassName("img2")[0];
//Set the image source
img1.src=images1[randomNum1];
img2.src=images2[randomNum2];
let h=document.querySelector("h1");
if(randomNum1>randomNum2){
    h.innerHTML="🚩Player 1 wins";
}
else if(randomNum1<randomNum2){
    h.innerHTML="Player 2 wins🚩";
}
else{
    h.innerHTML="Draw!";
}