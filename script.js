var randomnumber1=Math.floor(Math.random()*6)+1;

var randomimage1="./images/dice"+randomnumber1+".png"

var dice1 =document.querySelectorAll("img")[0]

dice1.setAttribute("src",randomimage1)


var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimage2="./images/dice"+randomnumber2+".png"
var dice2 =document.querySelectorAll("img")[1]

dice2.setAttribute("src",randomimage2)



if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="Player 1 wins"
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent="Player 2 wins"
}
else{
    document.querySelector("h1").textContent="Draw"
}