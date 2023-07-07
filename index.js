let userName = prompt ("enter your username")
validateUsername(userName)

let password =prompt("Enter your password")
console.log(validatePassword(password))


Function=validateUsername(userName) {
    if (userName == null){
        return false
    } else {
        return true
    }
    }
    function validatePassword(){
        if(password == null){
            return false
        }

        if (password.length<6){
            return false
        }else{
            return true
        }
    }

}