const play=document.getElementById("play");
        const prev=document.getElementById("prev");
        const next=document.getElementById("next");
        const music=document.querySelector("audio");
        const img=document.querySelector('img');
        const artist=document.getElementById("artist");
        const title=document.getElementById("title");
        let song=document.getElementById("song");
        let  progress=document.getElementById("progress");
     
        const songs=[{
            name:"song1(aashique2)",
            title:"Aashique 2",
            artist:"arjit-singh"},
            {
            name:"song2(Badrang-Mein-Satranga)",
            title:"Badrang-Mein",
            artist:"arjit-singh",
            },
            {
            name:"song3(Hawayein)",
            title:"Hawayein",
            artist:"arjit singh",
            },
            {
                name:"song4(Ve-Kamleya)",
                title:"Ve kamleya",
                artist:"arjit Singh",
            },
            ];
        let isplay=false;
        // for play music
        const playmusic=()=>{
            music.play();
            isplay=true;
            play.classList.replace("fa-play", "fa-pause");
            img.classList.add("anime");
        };
        // for puase music
        const pausemusic=()=>{
            music.pause();
            isplay=false;
            play.classList.replace("fa-pause","fa-play" );
            img.classList.remove("anime");
        };

        play.addEventListener('click',()=>{
            if(isplay){
                pausemusic();
            }else{
                playmusic();
            }
        });

        if(song.play()){
            setInterval(()=>{
                progress.value=song.currentTime;
            },500);
        }
        progress.onchange=function(){
            song.play();
            song.currentTime=progress.value;
            ctrlplay.classList.add("fa-pause");
            ctrlplay.classList.remove("fa-play");
        }

        // changing music
        const loadSong=(songs)=>{
            title.textContent=songs.title;
            artist.textContent=songs.artist;
            music.src="music/"+songs.name+ ".mp3";
            img.src="images/"+songs.name+ ".jpg";
        };
        songIndex=0;
        // loadSong(songs[1]);
        const nextSong=()=>{
            songIndex = (songIndex+1)%songs.length;
            loadSong(songs[songIndex]);
            playmusic();
        };
        const prevSong=()=>{
            songIndex = (songIndex-1+songs.length)%songs.length;
            loadSong(songs[songIndex]);
            playmusic();
        };
        next.addEventListener('click',nextSong);
        prev.addEventListener('click',prevSong);