$(document).ready(function() {
    $.ajax({
        url: "https://cn80zv9qg7.execute-api.ap-south-1.amazonaws.com/dev"
    }).then(function(data) {
        console.log(data);
        file_source=data;
        $("#quality").text(file_source[0].Quality);
        $("#Quality_desc").text(file_source[0].Meaning);
    });
});