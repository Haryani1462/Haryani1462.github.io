function assignGrade()
{
    //capture a score from html
    var score = Number(document.project3.number.value);
    if(score >= 90)//thats an A
    {
        return 'A';
    }
    else if (score >= 80)
    {
        return 'B';
    }
    else if (score >= 70)
    {
        return 'C';

    }
    else if (score >= 60)
    {
        return 'D';

    }
    else if (score <= 59)
    {
        return 'F';

    }
}

function temperaturebug() {
    var num = Number(document.project5.input1.value);

    if (num >= 27000000)
    {
        document.getElementById('weather').src = "Images/Sun.JPG";
        return "Super hot! Sun weather!"
    }
    else if (num >= 78)
    {
        document.getElementById('weather').src = "Images/summer.jpg";
        return "SUMMER!"
    }
    else if (num >= 70)
    {
        document.getElementById('weather').src = "Images/Spring.JPG";
        return "SPRING!"
    }
    else if (num >= 40)
    {
        document.getElementById('weather').src = "Images/Fall.JPG";
        return "FALL!"
    }
    else if (num >= -10)
    {
        document.getElementById('weather').src = "Images/Winter.JPG";
        return "WINTER!"
    }

}


/**
 * @return {number}
 */
function Calorie()
{
    var activity = document.getElementById('workList').value;
    var num1 = Number(document.getElementById('input2').value);

    if (activity === 'walking')
    {
        document.getElementById('calorie').src="Images/walking.JPG";
        return num1 * 3;
    }
    else if (activity === 'running')
    {
        document.getElementById('calorie').src="Images/running.JPG";
        return num1 * 13.2;
    }
    else if (activity === 'swimming')
    {
        document.getElementById('calorie').src="Images/swimming.JPG";
        return num1 * 10;
    }
    else if (activity === 'video game')
    {
        document.getElementById('calorie').src="Images/gaming.JPG";
        return num1 * 2.5;
    }
}



/**
 * @return {number}
 */
function Calorie()
{
    var activity = document.getElementById('workList').value;
    var num1 = Number(document.getElementById('input2').value);

    if (activity === 'walking')
    {
        document.getElementById('calorie').src="Images/walking.JPG";
        return num1 * 3;
    }
    else if (activity === 'running')
    {
        document.getElementById('calorie').src="Images/running.JPG";
        return num1 * 13.2;
    }
    else if (activity === 'swimming')
    {
        document.getElementById('calorie').src="Images/swimming.JPG";
        return num1 * 10;
    }
    else if (activity === 'video game')
    {
        document.getElementById('calorie').src="Images/gaming.JPG";
        return num1 * 2.5;
    }
}


