$("#hoina").click(function(){
    $(".modalContainer").fadeIn();
});
$(".modalButtonStandalone").click(function(){
    $(".modalContainer").fadeOut();
});
$(".selector span").click(function(){
    $("#container_general").slideToggle();
    $("#newTravel").toggleClass("selected");
    $("#recorded").toggleClass("selected");
    $("#container_recorded").slideToggle();
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
    $("iframe").animate({"top":"2.5%"}, 250); 
});