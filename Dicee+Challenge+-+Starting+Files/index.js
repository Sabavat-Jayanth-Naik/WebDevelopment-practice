

        var num1=Math.floor(Math.random()*6)+1;
         var num2=Math.floor(Math.random()*6)+1;
        var image1= document.querySelectorAll("img")[0];
        var src1="images/"+"dice"+num1+".png";
        image1.setAttribute("src",src1);
        var image2=document.querySelectorAll("img")[1];
        var src2="images/"+"dice"+num2+".png";
        image2.setAttribute("src",src2);
         
         if(num1>num2)
         {
             document.querySelector("h1").innerHTML="Player 1 Won !";
             
 
         }
        else  if(num1<num2)
         {
             document.querySelector("h1").innerHTML="Player 2 Won!";
             
 
         } 
         else{
             document.querySelector("h1").innerHTML="Draw ...!";
         }
       