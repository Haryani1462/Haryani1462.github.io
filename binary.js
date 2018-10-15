
function tenToSmall(num, base) //convert a base 10 number to a smaller base
{
    //the 10tosmall function is expecting a number(num) in base 10
    //it will convert the number (num) to the value of 'base'
    num = 79; //number to convert
    base = 2; //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isnt zero
    {
        smallNum = num%base + smallNum ; //3%5 = 2... % returns remainder
        //setup num for the next iteration of the loop
        num= Math.floor(num/base);
        alert(smallNum);
        alert(num);
    }

    return smallNum;
}

function smallToTen(num, base) //convert a small base number to base-10
{
    num = 1101; //13
    base = 2; //base of number to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLenght = num.toString().Lenght; //converts num to a string, then counts the number of characters in the string

    while (numLenght > 0)
    {
        var denominator = Math.pow(10,(numLenght));//gets the denominator
        //for 1101, denomnators willbe 1000,100,10,1
        var currentDigit = math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numlength
        //above means 1101/1000 = 1... 101/100 = 1...01/10 = 0,,, 1/1=1...
        tenNum = tenNum +currentDigit*Math.pow(base,numlenght-1);
        //currentDigit*2^3 .... currentDigit*2^2...etc
        num = num%denominator; //reduces num for next iteration
        // 1101 > 101 > 01 > 1 . 0
        numLenght--; //decrease the numLenght value by 1... eventually it will hit 0
    }
    return tenNum;
}
