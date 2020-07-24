var baseLines,baseLinesLength,i,selected=0,level=1;
var configuration = {
	branding: {"name" : "XYZ cmpany" , "title" : "select you codes"},
	levels : 3,
	levelDetails: [{count:24 ,rule: "minimum" }, 
				   {count:24, rule: "exact"},
                   {count:6, rule: "exact"}]
}
//------------------------------------------------------------------------------------------
//constant elements
const orderElement= document.getElementById("orderit");
const finalTableElement= document.getElementById("FinalTable");
const submitFinalElement= document.getElementById("Submit_Final");
const submitInitialElement = document.getElementById("Submit_Initial");
const createElement = document.createElement("UL");
//-------------------------------------------------------------------------------------------
//Calling API and creating all the baseLines buttons with values
$(document).ready(function() {
    $.ajax({
        url: "https://cn80zv9qg7.execute-api.ap-south-1.amazonaws.com/dev"
    }).then(function(data) {
        data.sort(dynamicSort("Quality"));
        baseLines=data;
        baseLinesLength=baseLines.length;
        for (i = 0; i<baseLinesLength; i++) {
            $("#btn_grp").append('<div class="btn-group col-sm-2"><button type="button" class="Qual  btn " id="qual_'+i+'" onclick="baseLine('+i+')">'+baseLines[i].Quality+'</button><button type="button" class="QualMeaning btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" id="qualmeaning_'+i+'"><span class="caret"></span></button><div class="dropdown-menu" id="dropdown">'+baseLines[i].Meaning+'</div></div>');
            $("#currentCount").text(selected+  "/" + baseLinesLength);

        }
    });
});
