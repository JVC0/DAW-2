export default class Champion {
    constructor(data) {
        this.name = data.name;                                           
        this.splash_art = data.image;
        this.title = data.title 
        this.blurb = data.blurb
        this.id = data.id
    }
}