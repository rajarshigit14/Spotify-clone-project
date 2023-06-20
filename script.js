console.log("Welcome to Spotify");
let songIndex=0;
let audioElement= new Audio('HOF.mp3');
let masterplay=document.getElementById('masterplay');
let masterSongName=document.getElementById('masterSongName');
let Myprogressbar=document.getElementById('Myprogressbar');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname:"Hall of Fame",filePath:"D:\Spotify clone project\songs\1.mp3",coverPath:"D:\Spotify clone project\cv1.jfif"},
    {songname:"In-The-End",filePath:"D:\Spotify clone project\songs\2.mp3",coverPath:"D:\Spotify clone project\cv2.jfif"},
    {songname:"No Guidance",filePath:"D:\Spotify clone project\songs\3.mp3",coverPath:"D:\Spotify clone project\cv3.jfif"},
    {songname:"Tigini",filePath:"D:\Spotify clone project\songs\4.mp3",coverPath:"D:\Spotify clone project\cv4.jfif"},
    {songname:"Starboy",filePath:"D:\Spotify clone project\songs\5.mp3",coverPath:"D:\Spotify clone project\pic.jpg"},
    {songname:"In-The-End",filePath:"",coverPath:""},
    {songname:"In-The-End",filePath:"",coverPath:""},
]

songitem.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
    }
)
//audioElement.play();

audioElement.addEventListener('timeupdate', ()=>{
      
       progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
       console.log(progress);
       Myprogressbar.value=progress;
})

Myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(Myprogressbar.value*audioElement.duration)/100;
})

const makeallplays=()=>{


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');
    
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{  
    element.addEventListener("click",(e)=>{
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songname;
        audioElement.currentTime= 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=4)
    {
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
   
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})
document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})
