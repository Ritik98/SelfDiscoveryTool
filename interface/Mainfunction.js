function popupMsg(){
    popup();
       
}
popupMsg();

 
//-------------------------------------------------------------------------------------------
function submitNextLevel(){
    if( levelCheck()=="true")
    {
        removeBaseLines();
        updateStatusLevel();
        popupMsg();
        if(configuration.levels>=level)
        {
        rebootAdd();
        displayCount();
        }
        else
        {
        submitOrdering();
        }
 
    }
 }
 //-----------------------------------------------------------------------------------------
 function displayOutcome()
 {
    document.getElementById("titleHead").textContent="Congratulations!!!, This is who you are";
    displayTable();
    updateTable();
}
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
