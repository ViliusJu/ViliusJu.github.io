
  const coin = document.querySelector(".coin");
  const button = document.querySelector("#myBtn");
  
button.addEventListener("click", function(){

    const random = Math.random();

    if(random < .5){
        coin.setAttribute("class", "coin animated-head");
    } else {
        coin.setAttribute("class", "coin animated-tail");
    }
    
 

})

    



