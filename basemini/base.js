function base(){
    let num;
    num=parseInt(document.getElementById("base2").value);
    document.getElementById("result").innerHTML=num.toString(2);
}
function base1(){
    num=parseInt(document.getElementById("base8").value);
    document.getElementById("result1").innerHTML=num.toString(8);
}
function base2(){
    num=parseInt(document.getElementById("base16").value);
    document.getElementById("result2").innerHTML=num.toString(16);
}


