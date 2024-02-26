window.addEventListener('keydown',function(e)
{
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    //returan ascll vallue 65,66 etc in KeyCode

    if(!audio)return;
    audio.currentTime=0;
    audio.play();

});