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
    $("#container_general").animate({"bottom":"50%"}, 250);
});

$("#destination").focusout(function(){
    $(".halfScreen").slideToggle();
    $("#container_general").animate({"bottom":"20px"}, 250);
});
$("#username").click(function(){
    location.assign('settings.html');
});
$(".avatar").click(function(){
    location.assign('settings.html');
});
$("#settingsBtn").click(function(){
    location.assign('settings.html');
});