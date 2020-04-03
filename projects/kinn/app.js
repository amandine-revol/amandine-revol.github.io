//3 images, txt appear
$(".img_cont").hover(function(){
    //$(".img_txt").css("display", "block")
    $(this).find(".img_txt").fadeIn("slow","swing").css("display","block")
});

//3 block image cadre au hover
$(document).ready(function(){
    $(".img-container").hover(function(){
        $(this).css("box-shadow","0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)");
    },function(){
        $(this).css("box-shadow","none");
    });
});

//onglets
$(document).ready(function(){
    $(".tabs").each(function(){
        //recup onglet courant
        $(this).find("li:first").addClass("active");
        $(this).find("a").click(function(){
            var link = $(this).attr("href");
            //link = #p1 ou #p2...
            //regarde que la ou clic pas actif
            if($(this).parent().hasClass("active")){
                return false;
            }else{
                $(this).parent().siblings().removeClass("active");
                $(this).parent().addClass("active");
                $(link).show().siblings().hide();
            }
        });
    });
});

//slideshow
//https://www.youtube.com/watch?v=J2HLW4A40X8
$(document).ready(function(){
    $(".next").on("click", function(e){
        var currentImg = $(".activate");
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass("activate");
            nextImg.addClass("activate");
            e.stopPropagation();
        }
    });

    $(".prev").on("click", function(){
        var currentImg = $(".activate");
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass("activate");
            prevImg.addClass("activate");
        }
    });
});

// pop up login
//http://talkerscode.com/webtricks/create-a-login-form-on-popup-box-using-jquery.php
$(document).ready(function(){
    $(".loginform").css("display", "none");
    $(".login").click(function(e){
        e.preventDefault(); 
        showpopup();
    });
    $("#close_login").click(function(e){
        e.preventDefault();
        hidepopup();
    });
});

function showpopup(){
    $(".loginform").fadeIn();
    $(".loginform").css("display", "inline-block");
    $("#page-mask").css("display", "inline-block");

}
function hidepopup(){
    $(".loginform").fadeOut("slow");
    $(".loginform").css("display", "none");
    $("#page-mask").css("display", "none");
}

//nav
$(document).ready(function(){
    $("nav ul li").click(function(){
        if($(this).hasClass("active")){
            return false;
        }else{
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }
    });
});

$(document).ready(function(){
    $(".hamburger").click(function(){
        //add color red
        $(this).toggleClass("active2");
        if($(this).hasClass("active2")){
            $("nav ul li").css("display","inline-block");
        }
        else{
            $("nav ul li:not(.active)").css("display","none");
        }
    });
});

/*search*/
$(document).ready(function(){
    $(".s_img").click(function(){
        if($(".search").hasClass("white")){
            $(".search").animate({width:"40%"},350);
            $(".search").removeClass("white");
            $(".search").addClass("bg_grey"); 
            $(".input").replaceWith("<input class='put' type='text'>")
            $(".input").css("opacity","1"); 
        }else{
            $(".search").animate({width:"25%"},350);
            $(".search").removeClass("bg_grey");
            $(".search").addClass("white");
            $(".put").replaceWith("<span class='input'></span>");
            $(".input").css("opacity","0");
        }
    });
});
