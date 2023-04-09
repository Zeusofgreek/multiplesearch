document.getElementById("lb1").onclick=function(){
    let value=document.getElementById("input").value;
    window.open("https://www.google.com/search?q=".concat(value,"&oq=",value,"&aqs=chrome.0.69i59j69i57.550j0j7&sourceid=chrome&ie=UTF-8"))
}
document.getElementById("lb2").onclick=function(){
    let value=document.getElementById("input").value;
    window.open("https://www.youtube.com/results?search_query=".concat(value))
}
document.getElementById("rb1").onclick=function(){
    let value=document.getElementById("input").value;
    window.open("https://www.instagram.com/".concat(value))
}
document.getElementById("rb2").onclick=function(){
    let value=document.getElementById("input").value;
    window.open("https://twitter.com/search?q=".concat(value,"&src=typed_query"))
}

