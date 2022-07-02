document.write("<h1>String and Conditional statements</h1>")
let kartik="good";

document.write("Value of kartik is  ",kartik);
document.write("<br>");

if(kartik=="good")
{
    document.write("kartik is my best friend");
}
else 
{
    document.write("Kartik is not my best friend");
}
let z=3;
let p=4;
let q=5;
let s=8;
document.write("<br>");
document.write("Numbers are: ",z,' ',p,' ',q,' ',s);
document.write("<br>");
document.write("Second largest among above numbers is: ");
// find the second largest no. in these no.
if(s>q && s>p && s>z)
{
    if(q>p && q>z)
    {
        document.write(q)
    }
}
document.write("<br>")

document.write("<h1>Arthmetic operater</h1>")
document.write("<br>") 

document.write("sum of z+p+q is ",z+p+q);
document.write("<br>")

document.write("s-z-p is ",s-z-p)
document.write("<br>")

document.write("p^z is ",p**z)
document.write("<br>")

document.write("s*q is ",s*q)
document.write("<br>")

document.write("s/z is ",(s/z).toFixed(2))
document.write("<br>")

document.write("s%q is ",s%q)
document.write("<br>")

document.write("<h1>Assignment Operater</h1>")
document.write("<br>")

document.write("z++= ",z++)
document.write("<br>")

document.write("++z= ",++z)
document.write("<br>")

document.write("z--= ",z--)
document.write("<br>")

document.write("--z= ",--z)
document.write("<br>")

document.write("z+=q = ",z+=q)
document.write("<br>")

document.write("z-=q ",z-=q)
document.write("<br>")

document.write("z*=q = ",z*=q)
document.write("<br>")
