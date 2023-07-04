// random color generator

$("button").click(function(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var randomColor = "rgb"+"(" + r + "," + g + "," + b +")";
    $("body").css("background-color",randomColor);
})