import Champion from './champions';
var champions = [];



startChampions();


async function startChampions (){
        let data = await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
       .then(async(response)=>{return(await response.json()).data    })
            for(const key in data){
                champions.push(new Champion(data[key]));
                
            }
            await showchampions();
    };



const showchampions = async () => {
    const championss = document.getElementById("championss");
    for (let champion of champions) {
        championss.innerHTML += `<div class="card">
                                    <img class="Front_img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg">
                                    <div class= "blurb">
                                        ${champion.blurb}
                                    </div>
                                    <h2>${champion.name}</h2>
                                </div>`
    }
}