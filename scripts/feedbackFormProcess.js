//bmiFormProcess.js
//The "driver" function that handles, at the highest level,
//the form data validation and display of the the BMI value

function feedbackFormProcess()
{
    var feedbackFormObj = document.getElementById("feedbackForm");
    if (feedbackFormValidate(feedbackFormObj))
    {
        displayDetails(feedbackFormObj);
    }
}
