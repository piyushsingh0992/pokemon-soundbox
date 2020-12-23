
// defining variables
var keys=document.querySelectorAll('.key');
var allAudioTags=document.querySelectorAll("audio");
var background=document.querySelector('body');


// defining functions
function clickHandler(event){
    var audioClass=event.target.className;
    
    event.target.classList.add("playing");
    
    allAudioTags.forEach(eachtag=>{
        eachtag.pause();
    })

    var x=document.querySelector(`audio[class=${audioClass}]`);

    x.currentTime=0;
    x.play();

    setTimeout(function(){
        event.target.classList.remove("playing");
    }, 1300)
    // background.style.backgroundImage = `url('resources/${audioClass}.jpg')`;


}

//adding eventlistner's
keys.forEach(key=>{
    key.addEventListener('click',clickHandler);
})
