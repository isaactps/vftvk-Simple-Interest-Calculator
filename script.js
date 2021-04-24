function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Check if username field is empty
    if(principal.value <= 0.0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    var interest = principal.value * (years * rate / 100);
    var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal.value+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var rateval_disp = rateval + "%"
    document.getElementById("rate_val").innerText=rateval_disp;
}
