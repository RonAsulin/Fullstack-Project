let time = 1000;
function Nachman()
{
    document.getElementById("res").innerHTML="נ";
    setTimeout(Nachman2,time);
}
function Nachman2()
{
    document.getElementById("res").innerHTML+=" ";
    setTimeout(Nachman3,time);
}

function Nachman3()
{
    document.getElementById("res").innerHTML+="נ";
    setTimeout(Nachman4,time);
}

function Nachman4(){
    document.getElementById("res").innerHTML+="ח";
    setTimeout(Nachman5,time);
}

function Nachman5(){
    document.getElementById("res").innerHTML+=" ";
    setTimeout(Nachman6,time);
}


function Nachman6(){
    document.getElementById("res").innerHTML+="נ";
    setTimeout(Nachman7,time);
}

function Nachman7(){
    document.getElementById("res").innerHTML+="ח";
    setTimeout(Nachman8,time);
}

function Nachman8(){
    document.getElementById("res").innerHTML+="מ";
    setTimeout(Nachman9,time);
}

function Nachman9(){
    document.getElementById("res").innerHTML+=" ";
    setTimeout(Nachman10,time);
}

function Nachman10(){
    document.getElementById("res").innerHTML+="נ";
    setTimeout(Nachman11,time);
}

function Nachman11(){
    document.getElementById("res").innerHTML+="ח";
    setTimeout(Nachman12,time);
}

function Nachman12(){
    document.getElementById("res").innerHTML+="מ";
    setTimeout(Nachman13,time);
}

function Nachman13(){
    document.getElementById("res").innerHTML+="ן";
    setTimeout(Nachman14,time);
}

function Nachman14(){
    document.getElementById("res").innerHTML+=" ";
    setTimeout(Nachman15,time);
}

function Nachman15(){
    document.getElementById("res").innerHTML+="מ";
    setTimeout(Nachman16,time);
}

function Nachman16(){
    document.getElementById("res").innerHTML+="א";
    setTimeout(Nachman17,time);
}

function Nachman17(){
    document.getElementById("res").innerHTML+="ו";
    setTimeout(Nachman18,time);
}
function Nachman18(){
    document.getElementById("res").innerHTML+="מ";
    setTimeout(Nachman19,time);

}
function Nachman19(){
    document.getElementById("res").innerHTML+="ן";
    setTimeout(Nachman,time);
 
}