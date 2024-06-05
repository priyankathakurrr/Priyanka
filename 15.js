const input= require("readline-sync")
let a = input.questionInt("enter the a: ")
let b = input.questionInt("enter the b:")
let c = input.questionInt("enter the c: ")
let d = input.questionInt("enter the d: ")
if(a>b)
{
    if(b>c)
    {
        if(c>d)
        {
            console.log(d);
        }
        else
        {
            console.log(c);
        }
    }
    else if(b>c)
    {
        console.log(d);
    }
    else
    {
        console.log(b);
    }
}
else if(a>c)
{
    if(c>d)
    {

        console.log(d);
    }
    else
    {
        console.log(c);
    }
    
}
else if(a>d)
{
console.log(a);
}
else
{
    console.log(d);
}