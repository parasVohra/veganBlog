// constructor for static comments

var staticComment = function(name , content, time, likes ){
    this.name = name;
    this.content = content;
    this.time = time;
    this.likes = likes;
}




// sending data to app js via post
function submitComment(){
    var comment = {
        name:  $('.name').val(),
        content:$('.commentText').val()
    }


    if (comment.name.length < 1 ){
        alertBox("Please Enter Your Name");
    }

    else if(comment.content.length < 1){
        alertBox("Please write something in comment box");
    }
    else{
        $.ajax({
            type: 'POST',
            url:'/blog',
            data: comment,
            success: function(res){
              //  console.log("sent ");
                var data = JSON.stringify(res);
                var oData = JSON.parse(data);
              // console.log(" result " + oData );
              //  console.log(" res " + data );

                
                alertBox("Comment Posted Successfully");
                setTimeout(function(){
                    location.reload();
                },2000)
    
            },
            error: function(){
                alertBox('error submitting comment, please try again')
            }
        });
    }

    
}

// menu bar animation 

function showNavBar(){
    $(".secondBar").toggleClass("pRotate");
        $(".thirdBar").toggleClass("nRotate");
        $(".firstBar").toggleClass("hide");
        $(".fourthBar").toggleClass("hide");
        $('.mobileMenu').toggleClass('displayBlock');
  }



  // home page text animation

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
    window.open("/blog","_self");
}
function goToBlog2(){
    window.open("/blog2","_self");
}
function goToBlog3(){
    window.open("/blog3","_self");
}

function alertBox(text){
    //console.log("aleart")
    $('.aleartBox').text(text)
    $('.aleartBox').css("display","block");

    setTimeout(function(){
        $('.aleartBox').css("display","none");
    },2000)

}







