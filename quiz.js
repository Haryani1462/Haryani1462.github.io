function checkAnswers() {
    //make an array to store feedback on every question
    var feedback = [];
    //keep score
    var score = 0;

    //check answer one
    //first collect the answer using an input box

    //question 1
    var q1answer = document.quizs.a1.value.toLowerCase();
    if (q1answer === 'libero') {
        score = score + 1;
        feedback.push("Question 1 is corrrrect!!");
    }
    else {
        feedback.push("WRONG! Answer is libero");
    }

    //question 2
    var q2answer = document.quizs.a2.value.toLowerCase();
    if (q2answer === '25') {
        score = score + 1;
        feedback.push("Question 2 is corrrrect!!");
    }
    else {
        feedback.push("WRONG! Answer is 25");
    }

    //question 3
    if (document.quizs.a3.value === 'Serve') {

        score = score + 1;
        feedback.push("Question 3 is correct!!!");
    }
    else {
        feedback.push("WRONG!! Answer is Serve");
    }

    //question 4
    if (document.quizs.a4.value === '3') {

        score = score + 1;
        feedback.push("Question 4 is correct!!!");
    }
    else {
        feedback.push("WRONG!! Answer is 3");
    }

    if (document.quizs.a5A.checked === true && document.quizs.a5C.checked === true && document.quizs.a5D.checked === false && document.quizs.a5E.checked === false && document.quizs.a5B.checked === false)
    {
        score++;
        feedback.push("Question 5 is correct!!!!");
    }
    else{
        feedback.push("WRONG! Question 5 was Outside/Right side");
    }

    if (document.quizs.a6A.checked === true && document.quizs.a6C.checked === true && document.quizs.a6E.checked === true && document.quizs.a6D.checked === false && document.quizs.a6B.checked === false)
    {
        score++;
        feedback.push("Question 6 is correct!!!!");
    }
    else{
        feedback.push("WRONG! Question 6 was Jump top spin, Jump float ,Standing float");
    }
return "You got a " + score + " out of 6! " + feedback + "";

}

//check answer 2
