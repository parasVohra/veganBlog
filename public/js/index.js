$(document).ready(function() {
    




    
});

function showNavBar(){
    $(".secondBar").toggleClass("pRotate");
        $(".thirdBar").toggleClass("nRotate");
        $(".firstBar").toggleClass("hide");
        $(".fourthBar").toggleClass("hide");
        $('.mobileMenu').toggleClass('displayBlock');
  }

var count = 0;
var index = 0 ;
var myVar;
var para = "\"Veganism is a type of vegetarian diet that excludes meat, eggs, dairy products and all other animal-derived ingredients.\"";
function  text(){
    myNextChar = para.charAt(index);

    $( ".homeText" ).append(myNextChar);
    count++;
    index++;

    if(index === para.length){
        clearTimeout(myVar);
    }
    myVar = setTimeout(text,50);
        
}


function goToBlog(){
    window.open("blog");
}







