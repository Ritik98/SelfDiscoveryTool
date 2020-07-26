//-------------------------All secondary function-------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------
function popup()
 {
    if(level==1)
        $('#modalmsg').text("Select as many words as you resonate with (minimum " + configuration.levelDetails[level-1].count + ")");
    else if(configuration.levels+1==level)
    $('#modalmsg').text("Use drag and drop to arrange these "+ configuration.category + " in the order of importance they hold for you" );
    else
    $('#modalmsg').text('Select '+ configuration.levelDetails[level-1].rule + ' '+ configuration.levelDetails[level-1].count + ' ' +configuration.category);           
    $("#myModal").modal('show');
 }
//------------------------------------------------------------------------------------
function levelCheck()
{
    
    if(configuration.levelDetails[level-1].rule=="minimum")
    {
        if(configuration.levelDetails[level-1].count<=selected)
         return "true";
    }
     else if(configuration.levelDetails[level-1].rule=="exact")
    {
        if(configuration.levelDetails[level-1].count==selected)
        return "true";
    }
    else
    return "false";
    
}
//-----------------------------------------------------------------------------------
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
}
//----------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------
function rebootAdd(){
    for (i = 0; i<baseLinesLength; i++) {
        if(baseLines[i].Level==level)
        $("#btn_grp").append('<div class="btn-group col-sm-2"><button type="button" class="Qual  btn " id="qual_'+i+'" onclick="baseLine('+i+')">'+baseLines[i].Property+'</button><button type="button" class="QualMeaning btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" id="qualmeaning_'+i+'"><span class="caret"></span></button><div class="dropdown-menu">'+baseLines[i].Meaning+'</div></div>');
    }
   

}
//-------------------------------------------------------------------------------
function displayCount()
{
    $("#currentCount").text(selected+levelCount());
}
//--------------------------------------------------------------------------------
function submitOrdering(){
    document.getElementById("titleHead").textContent="Arrange Your " + configuration.title;
    removeElementView(submitInitialElement);
    addElementView(submitFinalElement);
    addElementView(orderElement);
    var m = createElement ;
    for(i=0;i<baseLinesLength;i++)
    {
        if(baseLines[i].Level==level)
        {
            $("#sortable_quality").append('<li id="'+i+'">'+baseLines[i].Property+'</li>');
        }
    }
}
//-----------------------------------------------
function displayTable()
{
    removeElementView(orderElement);
    addElementView(finalTableElement);
    removeElementView(submitFinalElement);
}
//---------------------------------------------------------------------------
function updateTable()
{
    var idsInOrder = $("#sortable_quality").sortable("toArray");
    for(i=0;i<idsInOrder.length;i++)
    $("#addquality").append('<tr><th>'+baseLines[idsInOrder[i]].Property+'</th><th>'+baseLines[idsInOrder[i]].Meaning+'</th></tr>');

}
//-----------------------------------------------------------------------
function updateSelection(i) {
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
//------------------------------------------------------------------------------------------
function removeElementView(x)
{
    x.style.display = "none";
}
//-------------------------------------------------------------------------------------------
function addElementView(x)
{
    x.style.display = "block";
}

function levelCount(){
    if (configuration.levelDetails[level-1].rule=="minimum")
    return "/"+baseLinesLength;
    return "/"+configuration.levelDetails[level-1].count;
}
//--------------------------------------------------------------------------------------------
$(function() {
    $( "#sortable_quality" ).sortable();
 });
 //------------------------------------------------------------------------------------
