document.getElementById("btn").onclick = function(){

    document.getElementById("text").style.color = "orange";
}

let dark = true;
document.getElementById("mode").onclick = function(){

    if(dark){

        document.body.style.backgroundColor = "white";

        document.body.style.color = "black";

        document.querySelector("nav").style.backgroundColor = "white";

        document.querySelector(".about").style.backgroundColor = "white";

        document.querySelector(".skills").style.backgroundColor = "white";

        document.querySelector(".Projects").style.backgroundColor = "white";

        document.querySelector(".contact").style.backgroundColor = "white";

        dark = false;

    }
    else{

        document.body.style.backgroundColor = "#0f172a";

        document.body.style.color = "white";

        document.querySelector("nav").style.backgroundColor = "#111827"

        
        document.querySelector(".about").style.backgroundColor = "#111827"

        
        document.querySelector(".skills").style.backgroundColor = "#111827"

        
        document.querySelector(".Projects").style.backgroundColor = "#111827"

        
        document.querySelector(".contact").style.backgroundColor = "#111827"

        dark = true;

    }
}


let text = [
    "Frontend Developer",
    "Web Designer",
    "Responsive UI Creator"

];
let index = 0;

setInterval(function(){
    document.getElementById("typing").innerHTML = text[index];

    index++;

    if(index == text.length){
        index = 0;
    }
},2000);