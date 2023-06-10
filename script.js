//Display rate slider Value
function updateRate(){
    var rateval=parseInt(document.getElementById("rate").value);
    document.getElementById("rate_val").innerHTML=rateval
}
//Compute button fucntionality
function compute(){
   var principal_input =document.getElementById("principal");
   var principal=parseInt(principal_input.value);
   if(isNaN(principal) || principal <=0){
    alert("Please!Enter a positive number");
    principal_input.focus();
    return;
   }
   var rate=parseFloat(document.getElementById("rate").value);
   var years=parseInt(document.getElementById("years").value);
   var interest=(principal*years*rate)/100;
   var amount=principal + interest;
   var currentYear=new Date().getFullYear();
   var futureYear=currentYear + years;
   document.getElementById("result").innerHTML= `If you deposit <mark>${principal}</mark>, at an interest rate
   of <mark>${rate}%</mark>.You will receive an amount of <mark>${amount}</mark>, in the year <mark>${futureYear}</mark>`
}