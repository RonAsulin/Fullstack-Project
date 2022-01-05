

function Start(){
   let ans=0;
   if(document.getElementById("myRadio11").checked)
   {
      ans=ans+20;
   }
   if(document.getElementById("myRadio23").checked)
   {
      ans=ans+20;
   }
   if(document.getElementById("myRadio34").checked)
   {
      ans=ans+20;
   }
   if(document.getElementById("myRadio41").checked)
   {
      ans=ans+20;
   }
   if(document.getElementById("myRadio52").checked)
   {
      ans=ans+20;
   }
  
   document.getElementById("result").innerHTML=ans;
   document.getElementById("test").src="test/pic/"+ans+".jpg";
}
