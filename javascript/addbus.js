function appendor(childname){
    $("#selector").append("<option>"+childname+"</option>");
}
function crescendor(){
    $("#selector").children().remove();    
}

function populate(type){
    crescendor();
    var i = 0;
    if(type=='public'){
        for(i=0; i<SPpb.length; i++){
            appendor(SPpb[i]);
        }
    }
    else{
        if(type=='college'){
            for(i=0; i<SPcoll.length; i++){
                appendor(SPcoll[i]);
            }            
        }
        else{
            for(i=0; i<SPsc.length; i++){
                appendor(SPsc[i]);
            }
        }
    }
}

// All Ajax Sxripts Below this!

var providerType = '';
var providerName = '';

var SPcoll = new Array();
SPcoll.push("Trinity International College");
SPcoll.push("Kathmandu Model College");
SPcoll.push("Princeton academy");
SPcoll.push("Everest Florida HSS");
SPcoll.push("Nepal Mega College");

var SPsc = new Array();
SPsc.push("Rosebud Shuttle Service");
SPsc.push("VS Niketan");
SPsc.push("GyanKunja HSS");

var SPpb = new Array();
SPpb.push("Nepal Yatayat");
SPpb.push("Madhya Upatyaka Yatayat");
SPpb.push("Madhyapur Yatayat");
SPpb.push("Lalitpur Yatayat");

$("#selector").change(function(){
    if(!providerType && !providerName){
        var selected = $("#selector :selected").val();
        populate(selected);
        providerType = selected;
        $("#spt .mediumFonts").text(selected);
    }
    else{
        var selected = $("#selector :selected").val();
        $("#sp .mediumFonts").text(selected);
    }
});