let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#sname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let confirmPass = document.querySelector("#confirmPass");

const errorElement = document.getElementById("error");
const input = document.querySelector("input")
const form = document.querySelector('form');

form.addEventListener("submit", (e)=>{
    let counter = 0;
    let messages = [];
    if(firstName.value === "" || firstName.value == null){
        messages.push("First name");
        firstName.style.border = "2px solid red";
        counter +=1;
    }
    if(lastName.value === "" || lastName.value == null){
        messages.push("Last name");
        lastName.style.border = "2px solid red";
        counter +=1;

    }
    if(email.value === "" || email.textContent == null){
        messages.push("Email");
        email.style.border = "2px solid red";
        counter +=1;
    }
    if(phone.value === "" || phone.value == null){
        messages.push("Phone number");
        phone.style.border = "2px solid red";
        counter +=1;
    }
    if(password.value === "" || password.value == null){
        messages.push("Password");
        password.style.border = "2px solid red";
        counter +=1;

    }
    if(confirmPass.value === "" || confirmPass.value == null){
        messages.push("Confirm password");
        confirmPass.style.border = "2px solid red";
        counter +=1;
    }
    
    if(confirmPass.value != ""){
        if(confirmPass.value != password.value){
            messages.push("Passwords do not match");
            counter +=1;
        }
    }
        
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = `Please complete these ${counter} fields: ` + messages.join(', ')
    }
})

phone.addEventListener("keyup", (e)=>{

    const key = e.key;

    if(phone.value.length == 3 && (phone.value.startsWith("(") != true)){
        phone.value = "(" + phone.value +")-";
    }
    if(phone.value.length == 4 && (phone.value.startsWith("(") == true)){
        phone.value = phone.value +")-";
    }

    if(phone.value.length == 9 && (phone.value.lastIndexOf("-")!= 9)){
        phone.value =  phone.value + "-";
    }
    if(key === "Backspace"){
        if (phone.value.lastIndexOf("-") == 5 && phone.value.endsWith("-") == true ){
            phone.value = phone.value.substring(0, 4);
        }

        if(phone.value.lastIndexOf("-") == 9 && phone.value.endsWith("-") == true ){
            phone.value = phone.value.substring(0, 9);
        }
        
        if(phone.value.lastIndexOf(")") == 4 && phone.value.endsWith(")") == true ){
            phone.value = phone.value.substring(0, 4);
        }
    }

})

input.addEventListener("keypress", () => {
    input.style.border = "none";
})
