var create=document.getElementById('create')
var Login=document.getElementById('Login')
var signup=document.getElementById('signup')
var regist=document.getElementById('regist')


var logout=document.getElementById('logout')
var welcome=document.getElementById('welcome')


var nameSign=document.getElementById('nameSign')
var emailSign=document.getElementById('emailSign')
var passSign=document.getElementById('passSign')



var emailLogin=document.getElementById('emailLogin')
var passLogin=document.getElementById('passLogin')









var dataList= JSON.parse(localStorage.getItem("data")) || []






create.addEventListener('click', function(e){
    e.preventDefault()
    regist.classList.add('d-none')
    signup.classList.remove('d-none')

})

function Empty(){
    if(nameSign.value=='' || emailSign.value=='' || passSign.value=='' ){

        return false
    }
    else{
        return true
    }
}





function signUp(){
    var data={
        
        name:nameSign.value,
        email:emailSign.value,
        pass:passSign.value
    }
    if(Empty()==false){
        document.getElementById('required').innerHTML='<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    if(emailTaken()==false){
        document.getElementById('required').innerHTML='<span class="text-danger m-3">This email is already taken</span>'
        
    }

    else{
        dataList.push(data)
        localStorage.setItem("data", JSON.stringify(dataList))
        document.getElementById('required').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }

}


function emailTaken(){
    for(var i=0;i<dataList.length;i++){

        if(dataList[i].email==emailSign.value){
            return false
        }
        }
}


function LoginEmpty(){
    if(emailLogin.value=='' || passLogin.value=='' ){

        return false
    }
    else{
        return true
    }
}
function login(){
    
    if(LoginEmpty()==false){
        document.getElementById('requiredd').innerHTML='<span class="text-danger m-3">All inputs is required</span>'
        return false   
    }
    else{
        var password = passLogin.value
        var email = emailLogin.value
        
        for (var i = 0; i < dataList.length; i++) {
            if (dataList[i].email == email && dataList[i].pass == password) {
                
                localStorage.setItem('sessionUsername', dataList[i].name)
                
                document.getElementById('username').innerHTML = `welcome ${localStorage.getItem('sessionUsername')}`
                regist.classList.add('d-none')
                welcome.classList.remove('d-none')
                logout.classList.remove('d-none')
                
            }else{
                document.getElementById('requiredd').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
            }
        }
    }


    }



logout.addEventListener('click',function(e){
    requiredd=''
    regist.classList.remove('d-none')
    welcome.classList.add('d-none')
    logout.classList.add('d-none')
    
})

