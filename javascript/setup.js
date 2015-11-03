var page = 1;
$("#nextBtn").click(function(){
    if(page == 1){
        $("#identityOL").addClass("animated zoomOut");
        $("#userOL").fadeIn();
        $("#nextBtn").text("Done!");
        page += 1;
    }
    else{
        if($("#username").val() && $("#password").val()){
            $("#userOL").addClass("animated zoomOut");
            $(".modalContainer").fadeIn();
            doCheck();
        }
        else{
            if(!$("#username").val()){
                $("#username").addClass("animated shake");
                setTimeout(function(){
                    $("#username").removeClass("animated shake");
                }, 1000);
            }
            if(!$("#password").val()){
                $("#password").addClass("animated shake");
                setTimeout(function(){
                    $("#password").removeClass("animated shake");
                }, 1000);
            }
        }
    }
});

$("#p").click(function(){
    if($("#d").hasClass("selected")){
        $("#d").removeClass('selected');
        $("#p").addClass('selected');
    }
    else{
        $("#d").addClass('selected');
        $("#p").removeClass('selected');        
    }
});
$("#d").click(function(){
    if($("#p").hasClass("selected")){
        $("#p").removeClass('selected');
        $("#d").addClass('selected');
    }
    else{
        $("#p").addClass('selected');
        $("#d").removeClass('selected');        
    }
});

function doCheck(){
    var x = $.post("https://www.sandeshbhusal.com.np/arang/checkUser.php");
    if(x){
        $("#status").addClass("animated zoomOut");
        $("#status").attr("src", "imgs/Done.png");
        $("#status").attr("width", "32");
        setTimeout(function(){
            $("#status").removeClass("zoomOut");
            $("#status").addClass("bounceIn");
        }, 1000);
    }
    else{
        $("#status").addClass("animated zoomOut");
        $("#status").attr("src", "imgs/check.png");
        $("#status").attr("width", "32");
        setTimeout(function(){
            $("#status").removeClass("zoomOut");
            $("#status").addClass("bounceIn");
        }, 250);        
    }
}