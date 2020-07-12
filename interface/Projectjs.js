var next=1,selected=0,i,current=0,Level=1,element;
//----------------------------------------------------------------------------------------------------


function levelCount(){
    return Level==1?"/24+":Level==2?"/24":"/6";
}
$("#currentCount").text(selected+levelCount());


//------------------------------------------------------------------------------------------

function updateNext() {
    for(i=next;i<baseLinesLength;i++)
    {
        if(baseLines[i].Level==(Level+''))
        {
            if(baseLines[i].Status=="1")
            next++;
            else
            break;
        }
        else
        next++;
    }
}

//------------------------------------------------------------------------------------------

function printNext() {
    $("#quality").text(baseLines[next].Quality);
    $("#Quality_desc").text(baseLines[next].Meaning);
}

//-------------------------------------------------------------------------------------------

function updateNextCurrent(){
    current=next;
    if(next!=baseLinesLength)
    next++;
}

//-------------------------------------------------------------------------------------------

$("#nextButton").click(function(){
    updateNext();
    printNext();
    updateNextCurrent();         
});

//--------------------------------------------------------------------------------------------


$("#Yes").click(function(){
    if(!((Level==2 && selected==24) || (Level==3 && selected==6))){
        updateNext();
        printNext();
            if(next==baseLinesLength)
            {
                if(current!=next)
                {
                    $("#Second_Row").append("<button type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+baseLines[current].Quality+"</button>")
                    baseLines[current][2]='1';
                    selected++;
                    document.getElementById("currentCount").textContent=selected+levelCount();
                }
                current=next;
            }   
            else
            {
                $("#Second_Row").append("<button type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+baseLines[current].Quality+"</button>")
                baseLines[current].Status='1';
                current=next;
                next++;
                selected++;
                document.getElementById("currentCount").textContent=selected+levelCount();
            }
        }
    });
$(document).ready(function(){
    $("#prev").click(function(){
        next=current-1;
        for (i=next;i>=0; i--) 
        {
            if(baseLines[i].Level==(Level+''))
            {
                if(baseLines[i].Status=='1')
                next--;
                else
                break;
            }
            else
            next--;
        }
        if(next==-1)
        {
        ;
        next=current+1;
        }
        else
        {
            $("#quality").text(baseLines[next].Quality)
            $("#Quality_desc").text(baseLines[next].Meaning)
            current=next;
            next=current+1;
        }
    });
});
function labelfunc(num)
{
    element = document.getElementById('qual_'+num);
    element.parentNode.removeChild(element);
    baseLines[num].Status='0';
    selected--;
    document.getElementById("currentCount").textContent=selected+levelCount();
}
$(document).ready(function(){
    $("#Sub").click(function(){
        if(Level==1)
        {
            if(selected<24)
            ;
            else if(selected==24)
            {
                selected=0;
                Level=Level+2;
                document.getElementById("currentCount").textContent=selected+levelCount();
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Status=='1')
                    {
                        baseLines[i].Level='3';
                        baseLines[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Level==(Level+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(baseLines[next].Quality)
                $("#Quality_desc").text(baseLines[next].Meaning)
                current=next;
                next++;
            }
            else
            {
                selected=0;
                Level++;
                document.getElementById("currentCount").textContent=selected+levelCount();
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Status=='1')
                    {
                        baseLines[i].Level='2';
                        baseLines[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Level==(Level+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(baseLines[next].Quality)
                $("#Quality_desc").text(baseLines[next].Meaning)
                current=next;
                next++;
            }
        }
        else if(Level==2)
        {
            if(selected==24)
            {
                selected=0;
                Level++;
                document.getElementById("currentCount").textContent=selected+levelCount();
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Status=='1')
                    {
                        baseLines[i].Level='3';
                        baseLines[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Level==(Level+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(baseLines[next].Quality)
                $("#Quality_desc").text(baseLines[next].Meaning)
                current=next;
                next++;
            }
        }
        else if(Level==3)
        {
            if(selected==6)
            {
                Level++;
                document.getElementById("Selection_count1").textContent="Order your qualities ";
                document.getElementById("Selection_count1").style.height="25%";
                document.getElementById("Selection_count1").style.textAlign="center";
                document.getElementById("Selection_count1").style.padding="5px";
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Status=='1')
                    {
                        baseLines[i].Level='4';
                        baseLines[i].Status='0';
                    }
                }
                var x = document.getElementById("selectquality");
                x.style.display = "none";
                var n = document.getElementById("orderit");
                n.style.display = "block";
                var x = document.createElement("UL");
                for(i=0;i<baseLinesLength;i++)
                {
                    if(baseLines[i].Level=='4')
                    {
                        $("#sortable_quality").append('<li id="'+i+'">'+baseLines[i].Quality+'</li>');
                    }
                }
            }
        }
    });
});
$(document).ready(function(){
    $("#Sub2").click(function(){
        if(Level==4)
        {
            
            document.getElementById("Selection_count1").textContent="Congratulations!!!, This is who you are";
            var x = document.getElementById("orderit");
            x.style.display = "none";
            var m = document.getElementById("FinalTable");
            m.style.display = "block";
            var n = document.getElementById("Sub2");
            n.style.display = "none";
            var idsInOrder = $("#sortable_quality").sortable("toArray");
            for(i=0;i<6;i++)
            $("#addquality").append('<tr><th>'+baseLines[idsInOrder[i]].Quality+'</th><th>'+baseLines[idsInOrder[i]].Meaning+'</th></tr>');
        }
    });
});
$(function() {
    $( "#sortable_quality" ).sortable();
 });