const email = document.getElementById("email");
const btn = document.getElementById("button");
const msg = document.querySelector(".error-msg");
btn.addEventListener("click",function(){
    validation(email);
})

function validation(){
    const email_value = email.value.trim();
    if(email_value === "")
    {
        msg.className = "error-msg error"
        msg.innerHTML = "<i class=\"fas fa-exclamation-circle\"></i>" + " Email cannot be empty!";
    }
    else if(!isvalid_email(email_value))
    {
        msg.classList = "error-msg error"
        msg.innerHTML = "<i class=\"fas fa-exclamation-circle\"></i>"  + "Invalid Email";
    }
    else{
        msg.className = "error-msg pass"
        msg.innerHTML = "<i class=\"fas fa-check-circle\"></i>"  + "Valid Email. Sign Up Now!";
    }

    email.addEventListener("click",function(){
        msg.className = "error-msg";
    })

    
}

function isvalid_email(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}