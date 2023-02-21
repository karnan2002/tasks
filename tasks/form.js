document.getElementById("err_name").style.display="none";
document.getElementById("err_no").style.display="none";
document.getElementById("err_sex").style.display="none";


function validate(){
    if(document.getElementById("student").value=="")
    {
        document.getElementById("err_name").style.display="block";
        document.getElementById("err_no").style.display="none";
        document.getElementById("err_sex").style.display="none";
        document.getElementById("student").focus();
        return false;
    }
    if(document.getElementById("number").value=="")
    {
        document.getElementById("err_name").style.display="none";
        document.getElementById("err_no").style.display="block";
        document.getElementById("err_sex").style.display="none";    
       document.getElementById("number").focus();
       return false;
        
    }
    if(document.getElementById("sex").value=="")

{
    document.getElementById("err_name").style.display="none";
    document.getElementById("err_no").style.display="none";
    document.getElementById("err_sex").style.display="block";
    document.getElementById("sex").focus();
    return false
    
}
};

let id = document.getElementById("hidden id").value;
text=document.getElementById("student").value;
text1=document.getElementById("number").value;
text2=document.getElementById("sex").value;