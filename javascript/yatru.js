$("#hoina").click(function(){
    $(".modalContainer").fadeIn();
});
$(".modalButtonStandalone").click(function(){
    $(".modalContainer").fadeOut();
});
$(".selector span").click(function(){
    if($("#recorded").hasClass("selected")){
        $("#container_general").animate({"top":"100%", "opacity":"0"}, 500);
        $("#container_recorded").animate({"top":"270px", "opacity":"1"}, 500);
    }
    else{
        $("#container_general").animate({"top":"270px", "opacity":"1"}, 500);
        $("#container_recorded").animate({"top":"100%", "opacity":"0" }, 500);
    }
    $("#newTravel").toggleClass("selected");
    $("#recorded").toggleClass("selected");
});
$("#destination").focusin(function(){
    $(".halfScreen").slideToggle();
    $("#container_general").animate({"top":"5%"}, 250);
});

$("#destination").focusout(function(){
    $(".halfScreen").slideToggle();
    $("#container_general").animate({"top":"270px"}, 250);
});
$("#settingsBtn").click(function(){
    location.assign('settings.html');
});
$("#addvehicle").click(function(){
    $("#modalContainerIframe").fadeIn();
    $("iframe").animate({"left":"0%"}, 250); 
});
var x = window.innerHeight - 250;
var u = x + "px";
$(".buses").css({"height":u});