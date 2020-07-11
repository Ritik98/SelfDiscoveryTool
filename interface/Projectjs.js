var next=1,count=0,i,current=0,Sub=1;
var element;
$("#Selection_count").text(count+fcount());
function fcount(){
    var msg=""
    if(Sub==1)
    msg="/24+";
    else if(Sub==2)
    msg="/24";
    else if(Sub==3)
    msg="/6";
    return msg;
}
$(document).ready(function(){
    $("#next").click(function(){
        for(i=next;i<(file_source.length-1);i++)
        {
            if(file_source[i].Level==(Sub+''))
            {
                if(file_source[i].Status=="1")
                next++;
                else
                break;
            }
            else
            next++;
        }
        $("#quality").text(file_source[next].Quality)
        $("#Quality_desc").text(file_source[next].Meaning)
        current=next;
        if(next==(file_source.length-1))
        ;    
        else
        next++; 
    });
});
$(document).ready(function(){
    $("#Yes").click(function(){
        if (Sub==2 && count==24)
        ;
        else if (Sub==3 && count==6)
        ;
        else
        {
            for(i=next;i<(file_source.length-1);i++)
            {
                if(file_source[i].Level==(Sub+''))
                {
                    if(file_source[i].Status=="1")
                    next++;
                    else
                    break;
                }
                else
                next++;
            }    
            $("#quality").text(file_source[next].Quality)
            $("#Quality_desc").text(file_source[next].Meaning)
            if(next==(file_source.length-1))
            {
                if(current!=next)
                {
                    $("#Second_Row").append("<button type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+file_source[current].Quality+"</button>")
                    file_source[current][2]='1';
                    count++;
                    document.getElementById("Selection_count").textContent=count+fcount();
                }
                current=next;
            }   
            else
            {
                $("#Second_Row").append("<button type='button' class='Qual' id='qual_"+current+"' onclick='labelfunc("+current+")'>"+file_source[current].Quality+"</button>")
                file_source[current].Status='1';
                current=next;
                next++;
                count++;
                document.getElementById("Selection_count").textContent=count+fcount();
            }
        }
    });
});
$(document).ready(function(){
    $("#prev").click(function(){
        next=current-1;
        for (i=next;i>=0; i--) 
        {
            if(file_source[i].Level==(Sub+''))
            {
                if(file_source[i].Status=='1')
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
            $("#quality").text(file_source[next].Quality)
            $("#Quality_desc").text(file_source[next].Meaning)
            current=next;
            next=current+1;
        }
    });
});
function labelfunc(num)
{
    element = document.getElementById('qual_'+num);
    element.parentNode.removeChild(element);
    file_source[num].Status='0';
    count--;
    document.getElementById("Selection_count").textContent=count+fcount();
}
$(document).ready(function(){
    $("#Sub").click(function(){
        if(Sub==1)
        {
            if(count<24)
            ;
            else if(count==24)
            {
                count=0;
                Sub=Sub+2;
                document.getElementById("Selection_count").textContent=count+fcount();
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Status=='1')
                    {
                        file_source[i].Level='3';
                        file_source[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Level==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source[next].Quality)
                $("#Quality_desc").text(file_source[next].Meaning)
                current=next;
                next++;
            }
            else
            {
                count=0;
                Sub++;
                document.getElementById("Selection_count").textContent=count+fcount();
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Status=='1')
                    {
                        file_source[i].Level='2';
                        file_source[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Level==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source[next].Quality)
                $("#Quality_desc").text(file_source[next].Meaning)
                current=next;
                next++;
            }
        }
        else if(Sub==2)
        {
            if(count==24)
            {
                count=0;
                Sub++;
                document.getElementById("Selection_count").textContent=count+fcount();
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Status=='1')
                    {
                        file_source[i].Level='3';
                        file_source[i].Status='0';
                        element = document.getElementById('qual_'+i);
                        element.parentNode.removeChild(element);
                    }
                }
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Level==(Sub+''))
                    {
                        next=i;
                        break;
                    }
                }
                $("#quality").text(file_source[next].Quality)
                $("#Quality_desc").text(file_source[next].Meaning)
                current=next;
                next++;
            }
        }
        else if(Sub==3)
        {
            if(count==6)
            {
                Sub++;
                document.getElementById("Selection_count1").textContent="Order your qualities ";
                document.getElementById("Selection_count1").style.height="25%";
                document.getElementById("Selection_count1").style.textAlign="center";
                document.getElementById("Selection_count1").style.padding="5px";
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Status=='1')
                    {
                        file_source[i].Level='4';
                        file_source[i].Status='0';
                    }
                }
                var x = document.getElementById("selectquality");
                x.style.display = "none";
                var n = document.getElementById("orderit");
                n.style.display = "block";
                var x = document.createElement("UL");
                for(i=0;i<(file_source.length-1);i++)
                {
                    if(file_source[i].Level=='4')
                    {
                        $("#sortable_quality").append('<li id="'+i+'">'+file_source[i].Quality+'</li>');
                    }
                }
            }
        }
    });
});
$(document).ready(function(){
    $("#Sub2").click(function(){
        if(Sub==4)
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
            $("#addquality").append('<tr><th>'+file_source[idsInOrder[i]].Quality+'</th><th>'+file_source[idsInOrder[i]].Meaning+'</th></tr>');
        }
    });
});
$(function() {
    $( "#sortable_quality" ).sortable();
 });