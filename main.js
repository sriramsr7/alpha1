let counterDiv = document.getElementById("counter");
if (localStorage.getItem("count") == null){
    localStorage.setItem("count",191);
}
var seperator = (value)=>{
    let val = parseInt(value);
    let htmltext = "";
    let temp = 0;
    while(val>0){
        temp = val%10;
        console.log(temp);
        
        htmltext = "<div class = 'digit'>"+temp+"</div>"+htmltext;
        val = parseInt(val/10)
    }
    console.log(htmltext);
    
    counterDiv.innerHTML = htmltext;
}

var counter = ()=>{
    let value = localStorage.getItem("count");
    let val = parseInt(value);
    val +=1;
    localStorage.setItem("count",val);
    seperator(val);
}
var allLetter = (inputtxt)=>{
   var letters = /^[A-Za-z]+$/;
   
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
  }
  var validateEmail = (inputText) =>{
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.match(mailformat))
  {
  return true;
  }
  else
  {
  return false;
  }
  }
var validate = ()=>{
    let texterror = document.querySelector(".texterror");
    let emailerror = document.querySelector(".emailerror");
    texterror.innerHTML  = '';
    emailerror.innerHTML = '';
    let fname = document.getElementById("firstname");
    let lname = document.getElementById("lastname");
    let email = document.getElementById("emailaddress");
    if(fname.value == undefined || lname.value == undefined){
        texterror.innerHTML = "ERROR: Invalid Name";
    } 
    else if(email.value == undefined){
        emailerror.innerHTML = "ERROR: Invalid Email";
    }
    else if(allLetter(fname.value+lname.value) == false){
        texterror.innerHTML = "ERROR: Invalid Name";
    }
    else if(validateEmail(email.value) == false){
        emailerror.innerHTML = "ERROR: Invalid Email";
    }
    else{
        counter()
        fname.value = '';
        lname.value = '';
        email.value = '';
        
    }

}
let value = localStorage.getItem("count");
seperator(value);
console.log(counterDiv);
