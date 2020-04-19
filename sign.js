// function home(){
//     window.open("signin.html");
// }
let name=document.getElementById("name");
let mb=document.getElementById("mb");
let mail=document.getElementById("mail");
let pw=document.getElementById("pw");
let rpw=document.getElementById("rpw");
let cty=document.getElementById("cntry");
let uname=document.getElementById("uname");
let rm=document.getElementById("rm");
let rf=document.getElementById("rf");
let ro=document.getElementById("ro");
let ind=document.getElementById("ind");
let nind=document.getElementById("nind");

function toupp(){
    name.value=name.value.toUpperCase();
    cntry.value=cntry.value.toUpperCase();
}

function pvalid(psw){
    var arr=new Array;
    arr.push("[a-z]");
    arr.push("[A-Z]");
    arr.push("[0-9]");
    arr.push("[@#$%^&*.-_]");
    var str=0;
    for(var i=0;i<arr.length;i++){
        if(new RegExp(arr[i]).test(psw)){
            str++;
        }
    }
    // alert("len:"+psw.length);
    //   alert(str);
      
    if(psw.length<8){
        document.getElementById("msg").innerHTML="poor";
                document.getElementById("msg").style.color="red";
    }
    else{
        switch(str){
            case 0:
            case 1:
                document.getElementById("msg").innerHTML="poor";
                document.getElementById("msg").style.color="red";
                break;
            case 2:
                document.getElementById("msg").innerHTML="good";
                document.getElementById("msg").style.color="black";
                break;
            case 3:
                document.getElementById("msg").innerHTML="strong";
                document.getElementById("msg").style.color="blue";
                break;
            case 4:
                document.getElementById("msg").innerHTML="very strong";
                document.getElementById("msg").style.color="green";
                break;
    
        }
    }
}

function validate(){
    if(name.value.trim()==""){
        alert("name is not entered!!");
        document.getElementById("name").style.border="3px solid red";
        name.focus();
        return false;
    }
    else{
        // alert(name.value);
        let n=/^[A-Za-z ]+$/
        if(n.test(name.value)){
            
        }
        else{
            alert("Name : Special characters not allowed");
            name.focus();
            return false;
        }
    }

    if(rm.checked==false&&rf.checked==false&&ro.checked==false){
        alert("gender not selected");
        return false;
    }

    if(ind.checked==false&&nind.checked==false){
        alert("mention indian or not");
        return false;
    }

    if(cty.value.trim()==""){
        alert("country not entered!!");
        document.getElementById("cntry").style.border="3px solid red";
        cntry.focus();
        return false;
    }
    else{
        // alert(name.value);
        let n=/^[A-Za-z ]+$/
        if(n.test(cty.value)){
            
        }
        else{
            alert("Country: Special characters not allowed");
            cntry.focus();
            return false;
        }
    }

   


    if(mb.value.trim()==""){
        alert("Mobile number not entered");
        document.getElementById("mb").style.border="3px solid red";
        mb.focus();
        return false;
    }
    else{
        // alert(mb.value);
        let m=/^[6-9]{3}[-. ][0-9]{3}[-. ][0-9]{4}$/
        if(m.test(mb.value)){
            // return true;
        }
        else{
            alert("invalid mobile no entry : format should be xxx-xxx-xxxx or xxx.xxx.xxxx or xxx xxx xxxx");
            mb.focus();
            return false;
        }
    }

    if(mail.value.trim()==""){
        alert("e-mail not entered!!");
        document.getElementById("mail").style.border="3px solid red";
        mail.focus();
        return false;
    }
    else{
        // alert(mail.value);
        let ml=/^[A-Za-z0-9\.-]+@[A-Za-z0-9\-]+.([a-z]{2,3})(.[a-z]{2,3})?$/
        if(ml.test(mail.value)){
            // return true;
        }
        else{
            alert("invalid mail id");
            mail.focus();
            return false;
        }
    }

   
        if(uname.value.trim()==""){
            alert("username is not entered!!");
            document.getElementById("uname").style.border="3px solid red";
            uname.focus();
            return false;
        }
        else{
            pw.focus();
        }
       
    
    if(pw.value.trim()==""){
        alert("password should be entered");
        document.getElementById("pw").style.border="3px solid red";
        pw.focus();
        return false;
    }
    else{
       
    }

    if(rpw.value!=pw.value){
        alert("re entered password doesnt match");
        rpw.focus();
        return false;
    }
    else{
        return true;
    }
}