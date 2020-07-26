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
    updateSelection(i);
}
