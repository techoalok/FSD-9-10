btn = document.getElementById('btn');
a1 = document.querySelector("#box1");
a2 = document.querySelector("#box2");
disp = document.querySelector("#disp");

btn.addEventListener('click', ()=>{
    disp.style.color = "red";
    if(a1.value==""){
        disp.innerText = "Box1 is required..."
        a1.style.border = "1px solid red"
        a1.title = "Box1 is required..."
    }else if(a2.value==""){
        disp.innerText = "Box2 is required..."
    }else{
        disp.innerHTML = "Box1 : "+a1.value+"<br>Box2 : "+a2.value;
        disp.style.color = "green";
    }
})

a1.addEventListener('keyup',()=>{
    a1.style.border = "2px solid green"
})
