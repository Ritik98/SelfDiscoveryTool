//--------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
function displayCount()
{
    $("#currentCount").text(selected+levelCount());
}

function updateStatusLevel()
{
    selected = 0 ;
    level++;
    for(i=0;i<baseLinesLength;i++)
        {
            if(baseLines[i].Status==1)
            {
                baseLines[i].Level++;
                baseLines[i].Status=0;
            }
        }
}

//----------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------

function baseLine(i){
    var property = document.getElementById('qual_'+i);
    if(configuration.levelDetails[level-1].rule=="exact" && baseLines[i].Status==0 && configuration.levelDetails[level-1].count==selected)
        return;
    if(baseLines[i].Status==0)
    {   property.style.backgroundColor="#00cc00"
        baseLines[i].Status=1;
        selected++;
        $("#currentCount").text(selected+levelCount());
    }
    else if(baseLines[i].Status==1)
    {
        property.style.backgroundColor="#0000FF"
        baseLines[i].Status=0;
    selected--;
    $("#currentCount").text(selected+levelCount());
    }
}

//-----------------------------functions used within another functions-----------------------

function levelCount(){
    if (configuration.levelDetails[level-1].rule=="minimum")
    return "/"+baseLinesLength;
    return "/"+configuration.levelDetails[level-1].count;
}

//--------------------------------------------------------------------------------------

function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

//------------------------------------------------------------------------------------------------------

function removeBaseLines(){
    var element;
    for(i = 0 ; i<baseLinesLength ; i++)
    {
        if(baseLines[i].Level==level)
    { 
        element = document.getElementById('qual_'+i);    
        element.parentNode.removeChild(element);
        element = document.getElementById('qualmeaning_'+i);
        element.parentNode.removeChild(element);
    }
}

//---------------------------------------------------------------------------------------------

}
function rebootAdd(){
    for (i = 0; i<baseLinesLength; i++) {
        if(baseLines[i].Level==level)
        $("#btn_grp").append('<div class="btn-group col-sm-2"><button type="button" class="Qual  btn " id="qual_'+i+'" onclick="baseLine('+i+')">'+baseLines[i].Quality+'</button><button type="button" class="QualMeaning btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" id="qualmeaning_'+i+'"><span class="caret"></span></button><div class="dropdown-menu">'+baseLines[i].Meaning+'</div></div>');
    }
   

}

//------------------------------------------------------------------------------------------

function levelCheck()
{
    
    if(configuration.levelDetails[level-1].rule=="minimum")
    {if(configuration.levelDetails[level-1].count<=selected)
    return "true";
    }
     else if(configuration.levelDetails[level-1].rule=="exact")
    {if(configuration.levelDetails[level-1].count==selected)
    return "true";
    }
    else
    return "false";
    
}

//------------------------------------------------------------------------------------------

function sumbitOrdering(){
    document.getElementById("titleHead").textContent="Order your qualities ";
    var x = document.getElementById("Submit_Initial");
    x.style.display = "none";
    var n = document.getElementById("Submit_Final");
    n.style.display = "block";
    var m = document.getElementById("orderit");
    m.style.display = "block";
    var m = document.createElement("UL");
    for(i=0;i<baseLinesLength;i++)
    {
        if(baseLines[i].Level==level)
        {
            $("#sortable_quality").append('<li id="'+i+'">'+baseLines[i].Quality+'</li>');
        }
    }
}
//--------------------------------------------------------------------------------------------
$(function() {
    $( "#sortable_quality" ).sortable();
 });