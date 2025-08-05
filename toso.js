
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let input=document.querySelector("input");
    let ul=document.querySelector("ul");
    let li=document.createElement("li");
    li.innerText=input.value;
    ul.appendChild(li);
    input.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delet");
    li.appendChild(delbtn);
  
})
 let ul=document.querySelector("ul");
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();

    }
    
    
})




