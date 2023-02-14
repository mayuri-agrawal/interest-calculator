function simcal(){
  var x=parseInt(forms.amount.value);
  var y=forms.rate.value;
  var z=document.getElementById("duration").value;
  
  var temp=parseInt((x*y*z)/100);
 
  var total =temp+x;

 document.getElementById("demo").innerHTML="If you deposit "+x+",<br>at an interest rate of "+y+"%, for "+z+"year,<br>You will recieve <br><br> Interest : "

 
   +temp+" Rs. <br> Principal Amount : "+x+" Rs.<br> Total Value : "+total+" Rs." ;
}

function comcal(){

     var x=parseInt(forms.amount.value);
  var y=forms.rate.value;
  var z=document.getElementById("duration").value;

const princi=x;
   

   ci = x*(Math.pow((1+y/100),z));
    var interest_rate=ci-princi;
  
  document.getElementById("demo").innerHTML="If you deposit "+princi+",<br>at an interest rate of "+y+"%, for "+z+"year,<br>You will recieve <br><br>  Interest: "

 
   +interest_rate +" Rs. <br> Principal amount : " + princi + " Rs.<br> Total Value : " + ci+ "Rs.";


}
