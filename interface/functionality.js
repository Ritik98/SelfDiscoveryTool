//-------------------------All secondary function-------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
function removeElementView(x)
{
    x.style.display = "none";
}
//-------------------------------------------------------------------------------------------
function addElementView(x)
{
    x.style.display = "block";

}
//-------------------------------------------------------------------------------------------
function displayTable()
{
    removeElementView(orderElement);
    addElementView(finalTableElement);
    removeElementView(submitFinalElement);
}
//-------------------------------------------------------------------------------------------
function displayCount()
{
    $("#currentCount").text(selected+levelCount());
}
//------------------------------popping up the message , giving instuction to user--------------------------------------------------------------
function popup()
 {
    if(level==1)
    $('#modalmsg').text("Select as many words as you resonate with" + "\n\n" + "Note : Select minimum 24 Baselines");
    else if(configuration.levels+1==level)
    $('#modalmsg').text("Use drag and drop to arrange these baselines in the order of importance they hold for you" );
    else
    $('#modalmsg').text('Select '+ configuration.levelDetails[level-1].rule + ' '+ configuration.levelDetails[level-1].count + ' Baselines');           
    $("#myModal").modal('show');
 }
//--------------------------------------------------------------------------------------------
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
function levelCount(){
    if (configuration.levelDetails[level-1].rule=="minimum")
    return "/"+baseLinesLength;
    return "/"+configuration.levelDetails[level-1].count;
}
//-----------------------------sorting the data lexicographically comming from api------------------------------------------------------
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
//-----------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------
function rebootAdd(){
    for (i = 0; i<baseLinesLength; i++) {
        if(baseLines[i].Level==level)
        $("#btn_grp").append('<div class="btn-group col-sm-2"><button type="button" class="Qual  btn " id="qual_'+i+'" onclick="baseLine('+i+')">'+baseLines[i].Object+'</button><button type="button" class="QualMeaning btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" id="qualmeaning_'+i+'"><span class="caret"></span></button><div class="dropdown-menu">'+baseLines[i].Meaning+'</div></div>');
    }
   

}
//------------------------------------------------------------------------------------------------------
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
function submitOrdering(){
    document.getElementById("titleHead").textContent="Order your qualities ";
    removeElementView(submitInitialElement);
    addElementView(submitFinalElement);
    addElementView(orderElement);
    var m = createElement ;
    for(i=0;i<baseLinesLength;i++)
    {
        if(baseLines[i].Level==level)
        {
            $("#sortable_quality").append('<li id="'+i+'">'+baseLines[i].Object+'</li>');
        }
    }
}
//--------------------------------------------------------------------------------------------
$(function() {
    $( "#sortable_quality" ).sortable();
 });
 //------------------------------------------------------------------------------------
 function updateTable()
{
    var idsInOrder = $("#sortable_quality").sortable("toArray");
    for(i=0;i<idsInOrder.length;i++)
    $("#addquality").append('<tr><th>'+baseLines[idsInOrder[i]].Object+'</th><th>'+baseLines[idsInOrder[i]].Meaning+'</th></tr>');

}