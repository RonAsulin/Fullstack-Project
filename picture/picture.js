let gv=4;
let pc=1;
function onepiece(){
    let r,g,b,i;
    gv++;
    if(gv>15)
    {
         gv=5;
    }
    
    if(pc>4) 
    {
         pc=1;
    }   
    r=Math.round(Math.random()*255); 
    g=Math.round(Math.random()*255); 
    b=Math.round(Math.random()*255); 
    document.getElementById("pic").src="picture/pic/"+pc+".jpg";
    pc++;
    document.getElementById("pic").style.border=gv+"px solid yellow";
    document.getElementById("pic").style.borderBottomColor="rgb("+r+","+g+","+b+")";
    document.getElementById("pic").style.borderLeftColor="rgb("+b+","+g+","+b+")";
    document.getElementById("pic").style.borderRightColor="rgb("+r+","+g+","+g+")";
    document.getElementById("pic").style.borderTopColor="rgb("+r+","+r+","+b+")";
}
