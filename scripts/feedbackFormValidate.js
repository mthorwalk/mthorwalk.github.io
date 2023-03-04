function feedbackFormValidate(feedbackFormObj)
{
    var email = feedbackFormObj.email.value;
    var emailOK;

    emailOK = emailValid(email);
    
    return emailOK;
}

function emailValid(address)
{
    var p = address.search(/.+@.+/);
    if (p == 0)
        return true;
    else
    {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

