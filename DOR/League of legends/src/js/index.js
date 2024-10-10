import Champion from './champions';
var champions = [];
const button = document.querySelector("button");
button.addEventListener("click", () => {
  document.querySelector('#button').style.visibility = 'hidden';
  document.querySelector('#championss').style.visibility = 'visible';
  startChampions();
});

document.addEventListener('DOMContentLoaded', function() {
  const card = document.getElementById('championss');
  card.addEventListener('click', function(event) {
    flip(event);
  });
});

function flip(event) {
  var cards = document.querySelectorAll('.card-inner');
  var cardInner = event.target.closest('.card-inner');
  if (cardInner) {
    cardInner.classList.toggle("is-flipped");
  }
}



async function startChampions (){
        let data = await fetch("https://ddragon.leagueoflegends.com/cdn/14.20.1/data/es_ES/champion.json")
       .then(async(response)=>{return(await response.json()).data    })
            for(const key in data){
                champions.push(new Champion(data[key]));
                
            }
            await showchampions();
    };



    const showchampions = async () => {
        const championss = document.getElementById("championss");
        for (let champion of champions) {
          championss.innerHTML += `<div class="champion_name"><h2>${champion.name}</h2>
                                    <div class="card">
                                      <div class="card-inner">
                                        <div class="card-front">
                                          <img class="Front_img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg">
                                          
                                        </div>
                                        <div class="card-back">
                                          <p class="blurb">${champion.blurb}</p>
                                          
                                        </div>
                                      </div>
                                      
                                    </div></div>`
        }
      }