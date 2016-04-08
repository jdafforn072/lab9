$(function(){

$.getJSON("https://www.reddit.com/r/aww.json",function(data){
    var children=data.data.children;
    $.each(children, function(index,value){
        $("body").append("<p>" + value.data.title + " " + "<img src=" + value.data.url + "/>" + "</p>");

    });


})

});
