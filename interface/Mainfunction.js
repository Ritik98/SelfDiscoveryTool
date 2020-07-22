function popupMsg(){
        if(level==1)
        $('#modalmsg').text("Select as many words as you resonate with");
        else if(configuration.levels+1==level)
        $('#modalmsg').text("Use drag and drop to arrange these baselines in the order of importance they hold for you" );
        else
        $('#modalmsg').text('Select '+ configuration.levelDetails[level-1].rule + ' '+ configuration.levelDetails[level-1].count + ' Baselines');           

        $("#myModal").modal('show');
}
popupMsg();
//-------------------------------------------------------------------------------------------
function submitInitial(){
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
        sumbitOrdering();
        }
 
    }
 }
 //-----------------------------------------------------------------------------------------
 function submitFinal()
 {
    document.getElementById("titleHead").textContent="Congratulations!!!, This is who you are";
    var x = orderElement;
    x.style.display = "none";
    var m = finalTableElement;
    m.style.display = "block";
    var n = submitFinalElement;
    n.style.display = "none";
    var idsInOrder = $("#sortable_quality").sortable("toArray");
    for(i=0;i<idsInOrder.length;i++)
    $("#addquality").append('<tr><th>'+baseLines[idsInOrder[i]].Quality+'</th><th>'+baseLines[idsInOrder[i]].Meaning+'</th></tr>');

}
