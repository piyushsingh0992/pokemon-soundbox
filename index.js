
// defining variables
var keys=document.querySelectorAll('.key');
var allAudioTags=document.querySelectorAll("audio");
var background=document.querySelector('body');



// defining functions
function clickHandler(event){
    // taking class of the image on which user clicked
    var audioClass=event.target.className;

    // pausing all the previous audio so that only one audio will play at a time
    allAudioTags.forEach(eachtag=>{
        eachtag.pause();
    })

    //playing the desired audio for the button user clicked on
    var audiotag=document.querySelector(`audio[class=${audioClass}]`);
    audiotag.currentTime = 0;
    audiotag.play();

        

    // adding playing class to enlarge the image 
    event.target.classList.add("playing");

    //removing playing class after some time to bring image to normal size
    setTimeout(function(){
        event.target.classList.remove("playing");
    }, 1300)
}


//adding eventlistner's to all the key's
keys.forEach(key=>{
    key.addEventListener('click',clickHandler);
})
