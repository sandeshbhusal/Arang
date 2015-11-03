$("document").ready(function(){
    $("#redirect").fadeIn(5000);
    init();
    var username = user.name;
    if(!username){
        $("#redirect").attr("href", 'setup.html');
    }
});