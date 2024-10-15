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



    const preloadImages = async (champion) => {
      const images = [];
      let i = 0;
      let skinmax = true;
    
      while (skinmax) {
        try {
          const img = await loadImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${i}.jpg`);
          images.push(img); 
          i++; 
        } catch (error) {
          skinmax = false; 
        }
      }
    
      return images;
    };
    
    
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Image not found'));
      });
    };
    
    
    const showchampions = async () => {
      const championss = document.getElementById("championss");
      for (let champion of champions) {
        const championElement = document.createElement('div');
        championElement.className = 'champion_name';
        championElement.innerHTML = `<div class="name"><h2>${champion.name}</h2></div>
                                    <div class="card">
                                      <div class="card-inner">
                                        <div class="card-front">
                                          <div class="loader"></div>
                                          <img class="Front_img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg">
                                        </div>
                                        <div class="card-back">
                                          <p class="blurb">${champion.blurb}</p>
                                        </div>
                                      </div>
                                    </div>
                                  `;
        championss.appendChild(championElement);
  
        const championNameElement = championElement.querySelector('h2');
        const frontImgElement = championElement.querySelector('.Front_img');
        let currentSkinIndex = 0;
        let preloadedImages = []; 
    
        championNameElement.addEventListener('click', async () => {
          if (preloadedImages.length === 0) { 
              const loader = championElement.querySelector('.loader');
              const img = championElement.querySelector('.Front_img');
              img.style.filter = 'blur(5px)';  
              loader.style.visibility = 'visible';
              img.classList.add('fade-out');
              preloadedImages = await preloadImages(champion);
              loader.style.visibility = 'hidden';
              img.style.filter = 'none';  
              
              setTimeout(() => {
                img.classList.remove('fade-out');
                img.classList.add('fade-in'); 
              }, 100);

          }
          currentSkinIndex = (currentSkinIndex + 1) % preloadedImages.length;
          frontImgElement.src = preloadedImages[currentSkinIndex].src; 
        });
      }
    };