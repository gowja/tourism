function signup(){
    window.open("signup.html","_self");
}
function dist(){
    // window.open("dist.html","_self");
    let uname=document.getElementById("uname");
    let pw=document.getElementById("pw");
    if(uname.value.trim()=="" || pw.value.trim()==""){
        // alert("fields are not filled");
        // return false;
        if(uname.value==""){
            alert("Username is not filled");
            document.getElementById("uname").style.border="3px solid red";
            uname.focus();
            return false;
        }
        if(pw.value==""){
                    alert("Password is not filled");
                    document.getElementById("pw").style.border="3px solid red";
                    pw.focus();
                    return false;
                }
       
    }
    else{
        // alert(pw.value.length);
        if(pw.value.length<8){
            alert("password must contain atlest 8 characters");
            document.getElementById("pw").style.border="3px solid red";
            pw.focus();
            return false;
        }
        else{
            return true;
        }
    }
}