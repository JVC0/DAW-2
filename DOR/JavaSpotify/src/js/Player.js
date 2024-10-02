import Song,{play_song} from './Song.js';

export default class Player{
    constructor(map){
        Object.entries(map);
        let aux = 1;
        for (var[key,value] of Object.entries(map)){
            const cover = `.cv${aux}`
            const song = new Song(key,value,cover);
            play_song(song);
            
            aux++;
        }

        
    }
}