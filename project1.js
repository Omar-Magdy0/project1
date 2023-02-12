var counter=0;
var musicvideo =  document.getElementById("musicvideo")
var musicaudio =  document.getElementById("musicaudio")



function toggle(){counter=counter+1;
if (counter>2){counter=0;};

if(counter==1){ musicvideo.style.display="initial"}else{musicvideo.style.display="none"};
if(counter==2){ musicaudio.style.display="initial"}else{musicaudio.style.display="none"}


    


}






