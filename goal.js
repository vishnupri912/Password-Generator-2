let genBtn=document.getElementById("btn");
let inputValue=document.getElementById("input");
let inputRange=document.getElementById("inputRange");
let slider=document.getElementById("spanId");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let number=document.getElementById("number");
let symbol=document.getElementById("symbol");
let copyId=document.getElementById("copyId");
let copyMsg = document.getElementById("copyMsg");

slider.textContent=inputRange.value;
inputRange.addEventListener("input",()=>{
    slider.textContent=inputRange.value;
})


genBtn.addEventListener("click",function(){
    inputValue.value=generatePass();
    
})

window.addEventListener("load",()=>{
    inputValue.value="";
})

let lowerWord="abcdefghijklmnopqrstuvwxyz";
let upperWord="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num="1234567890";
let sym="~!@#$%^&*()_-+=}{[]|\/,;";




function generatePass(){
    let genPass="";
    let allItem="";

    allItem+=lowercase.checked?lowerWord:"";
    allItem+=uppercase.checked?upperWord:"";
    allItem+=number.checked?num:"";
    allItem+=symbol.checked?sym:"";

    if(allItem===""||allItem.length===0){
        return genPass;
    }
   let i=1; 
   while(i<inputRange.value){
      genPass+=allItem.charAt(Math.floor(Math.random()*allItem.length));
      i++;
   }

    return genPass;
    
}

copyId.addEventListener("click",function(){
    if(inputValue.value!=="" && inputValue.value.length>=0){
         navigator.clipboard.writeText(inputValue.value).then(function(){
         copyId.classList.remove("fa-regular","fa-copy");
         copyId.classList.add("fa-solid","fa-check");
         copyMsg.style.display="inline";

          setTimeout(function() {
                copyId.classList.add("fa-solid","fa-copy");
                copyId.classList.remove("fa-regular","fa-check"); // your original icon
                copyMsg.style.display="none";
            }, 2000);
         })
    }
    
})
