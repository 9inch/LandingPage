let validMail = document.querySelector("#validMail")
let submit = document.querySelector("#submit")
let mail = document.querySelector("#mail")

submit.addEventListener("click",function(event){
    event.preventDefault()
    if(mail.value.includes("@" && (".cz")) && (mail.value.length > 8)){
        validMail.textContent = "Your email has been submited. Thank you!"
        mail.value = ""
    }else{
        validMail.textContent = "Please type a proper email. Thank you!"
        mail.value = ""
    }
})

