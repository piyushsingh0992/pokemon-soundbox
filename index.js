var keys=document.querySelectorAll('.key');



function clickHandler(event){
    console.log(event.id);
}

keys.forEach(key=>{
    key.addEventListener('click',clickHandler);
})