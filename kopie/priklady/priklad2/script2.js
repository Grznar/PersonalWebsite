var tlacitko = document.getElementById("button");
tlacitko.addEventListener("click",pocitani);
function pocitani()
{
var cislo1= parseFloat(document.getElementById("number1").value);
var cislo2 = parseFloat(document.getElementById("number2").value);
var znamenko = document.getElementById("operation").value;
document.getElementById("vysledek").innerText = "";



switch(znamenko)
{
case "+":
    {
    vysledek=cislo1+cislo2;
    break;
    }
    case "*":
    {
    vysledek=cislo1*cislo2;
    break;
    }
    case "/":
    {
        if(cislo2==0)
        {
        document.getElementById("vysledek").innerText = "Dělení nulou";
        return;
        }
        vysledek=cislo1/cislo2;
        break;
        
    
    }
    case "-":
    {
    vysledek=cislo1-    cislo2;
    break;
    }
    
}
document.getElementById("vysledek").innerText=vysledek;
}