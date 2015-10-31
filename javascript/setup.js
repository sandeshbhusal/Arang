var page = 1;
$("#nextBtn").click(function(){
    if(page == 1){
        $("#identityOL").addClass("animated zoomOut");
        $("#userOL").fadeIn();
        $("#nextBtn").text("Done!");
        page += 1;
    }
    else{
        $("#userOL").addClass("animated zoomOut");
        $(".modalContainer").fadeIn();
        page += 1;        
    }
});