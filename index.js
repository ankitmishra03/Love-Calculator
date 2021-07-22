function find(){
    var x=Math.random();
x=x*100;
var input = document.getElementById("other").value;
if(input==="Bunty"||input==="Bunty Mishra"||input==="bunty"||input==="bunty Mishra"||input==="bunty mishra"||input==="Bunty mishra"||input==="Ankit"||input==="Ankit Mishra"||input==="ankit"||input==="ankit Mishra"||input==="ankit mishra"||input==="Ankit mishra")
{
    x=99;
}
document.getElementById("show").innerHTML="Your Love Percentage is "+(Math.floor(x)+1+"%");

if(x==100)
{
    document.getElementById("show1").innerHTML="O maa go turuu lobbhhh";
}
else if(x>=90 && x<100)
{
    document.getElementById("show1").innerHTML="sabka katega";
}
else if(x>=70 && x<90)
{
    document.getElementById("show1").innerHTML="Try krte reh";
}
else
{
    document.getElementById("show1").innerHTML="Koi aur dhund le ";
}


}