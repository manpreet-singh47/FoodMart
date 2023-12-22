let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");
body.addEventListener("mousemove",function(details){
    cursor.style.top=details.y+"px"
    cursor.style.left=details.x+"px"
})

let RightAccount = document.querySelector(".RightAccount")
let Login= document.querySelector("#Login")
let Register = document.querySelector(".Register")

Register.addEventListener("click",()=>{
    RightAccount.classList.add('active');
})
Login.addEventListener("click",()=>{
    RightAccount.classList.remove("active");
})
