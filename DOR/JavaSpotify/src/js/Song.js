export default class Song {
    constructor(k_song,v_song,c_song){
        this.element = document.querySelector(k_song);
        this.audio = new Audio(v_song);
        this.album = document.querySelector(c_song);
        this.vinyl = this.element.querySelector(".vinyl");
    }
}
export function play_song(song){
    song.element.onclick = () => {
        if (song.audio.paused) {
            song.audio.play();
            song.vinyl.style.transform="translate(200px)";


        }else{
            song.vinyl.style.transform="translate(0px)";
            song.audio.pause();
        }
    }
}

