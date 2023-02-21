function validate(){
   var text1=document.getElementById("name");
   console.log("name"+text1.value );
    if(text1.value ==""){
        document.getElementById("p1").innerHTML=" *input   your   name";
        text1.focus();
        text1.style.border="2px solid red";
        return false;
    
    }
    var text2=document.getElementById("number");
    console.log("nmber"+text2.value );
    if(text2.value =="" || isNaN(text2.value)){
        document.getElementById("p2").innerHTML="*input   your   number";
        text2.focus();
        text2.style.border="2px solid red";
        return false;
    
    }
    var text3=document.getElementById("address");
    console.log("address="+text3.value );
    if(text3.value==""){
        document.getElementById("p3").innerHTML=" *input   your   address";
        text3.focus();
        text3.style.border="2px solid red";
        return false;
    }
console.log("submitted");

let id=document.getElementById("hiddenid").value;
console.log("id="+id);
let tex=text1.value;
let tex1=text2.value;
let tex2=text3.value;


if(id == "")
{
    
    newid = document.getElementById("count").value;
    newid++;
    document.getElementById("count").value=newid;
    
    let list = document.getElementById("records");
    let row =document.createElement('tr');

    content = '<td id="nam'+newid+'">'+tex+'</td>'
    content += '<td id="num'+newid+'">'+tex1+'</td>'
    
    content += '<td id="add'+newid+'">'+tex2+'</td>'
    content+= '<td>';
    content+= '<button  class="btn" onclick= "editfun(\''+newid+'\')">EDIT</button></td>';

    row.innerHTML=content;
    list.appendChild(row);
}
else{
    document.getElementById("nam"+id).innerHTML = tex;
    document.getElementById("num"+id).innerHTML = tex1;
    
};
return false;
}


