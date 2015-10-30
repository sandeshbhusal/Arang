document.addEventListener("readystatechange", check(), false);

$(".left").click(function(){
    $("body").fadeOut();
    setTimeout(location.assign("yatru.html"), 300);
});
$("#privacy").click(function(){
    $(".modalContainer").fadeIn();
});
$(".modalButtonStandalone").click(function(){
    $(".modalContainer").fadeOut();
});
$("#userSettings").click(function(){
    location.assign("setup.html");
});
$("#versionId").html(app.version);
$("#userName").html(user.name);
$("#notification").html(app.notifications);