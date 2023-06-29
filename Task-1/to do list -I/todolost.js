 
//create a close button and append it to each
var myNodelist=document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodelist.length;i++){
    var span=document.createElement("SPAN");
    var txt= document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className="close";
    myNodelist[i].appendChild(span);
}

// to make close button work
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
       var div=this.parentElement;
       div.style.display="none";
    }
}
// add check symbol when clicking on a list
 var list=document.querySelector("ul")                     // query selector is used to selected multiple query
 list.addEventListener("click",function(ev){
        if(ev.target.tagName=='LI')
            ev.target.classList.toggle('checked')
 },false)


//  create a new list item when clicked on add button
function newElement(){
    var li=document.createElement("li");
    var inputValue=document.getElementById("myInput").value;
    var t=document.createTextNode(inputValue)
    li.appendChild(t);
    if(inputValue === ""){
        alert("you must enter something")
    }else{
        document.getElementById("MyUL").appendChild(li);
    }
    document.getElementById("myInput").value ="";

  
    var span=document.createElement("SPAN");
    var txt= document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className="close";
    li.appendChild(span);
    for(var i=0; i<close.length ;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}