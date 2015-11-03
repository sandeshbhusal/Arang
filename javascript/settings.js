document.addEventListener("readystatechange", check(), false);

$(".left").click(function(){
    $("body").fadeOut();
    setTimeout(location.assign("yatru.html"), 300);
});
$("#privacy").click(function(){
    $("#modalContainerPrivacy").fadeIn();
});
$(".modalButtonStandalone").click(function(){
    $(".modalContainer").fadeOut();
});
$("#userSettings").click(function(){
    $("#modalContainerUserClear").fadeIn();
});
$("#cancelSet").click(function(){
    $(".modal").slideUp();
    $("#modalContainerUserClear").fadeOut();    
})
$("#redSet").click(function(){
    location.assign("setup.html");
});
$("#versionId").html(app.version);
$("#userName").html(user.name);
$("#notification").html(app.notifications);