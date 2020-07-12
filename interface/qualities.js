var baseLines,baseLinesLength;
$(document).ready(function() {
    $.ajax({
        url: "https://cn80zv9qg7.execute-api.ap-south-1.amazonaws.com/dev"
    }).then(function(data) {
        console.log(data);
        baseLines=data;
        baseLinesLength=(baseLines.length-1);
        $("#quality").text(baseLines[0].Quality);
        $("#Quality_desc").text(baseLines[0].Meaning);
    });
});