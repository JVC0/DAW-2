class e{constructor(e){this.name=e.name,this.title=e.title,this.blurb=e.blurb,this.id=e.id}}var t=[];async function n(){let n=await fetch("https://ddragon.leagueoflegends.com/cdn/14.20.1/data/es_ES/champion.json").then(async e=>(await e.json()).data);for(let i in n)t.push(new e(n[i]));await s()}document.querySelector("button").addEventListener("click",()=>{document.querySelector("#button").style.visibility="hidden",document.querySelector("#championss").style.visibility="visible",n()}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("championss").addEventListener("click",function(e){var t;document.querySelectorAll(".card-inner"),(t=e.target.closest(".card-inner"))&&t.classList.toggle("is-flipped")})});const i=async e=>{let t=[],n=0,i=!0;for(;i;)try{let i=await a(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e.id}_${n}.jpg`);t.push(i),n++}catch(e){i=!1}return t},a=e=>new Promise((t,n)=>{let i=new Image;i.src=e,i.onload=()=>t(i),i.onerror=()=>n(Error("Image not found"))}),s=async()=>{let e=document.getElementById("championss");for(let n of t){let t=document.createElement("div");t.className="champion_name",t.innerHTML=`<div class="name"><h2>${n.name}</h2></div>
                                    <div class="card">
                                      <div class="card-inner">
                                        <div class="card-front">
                                          <div class="loader"></div>
                                          <img class="Front_img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${n.id}_0.jpg">
                                        </div>
                                        <div class="card-back">
                                          <p class="blurb">${n.blurb}</p>
                                        </div>
                                      </div>
                                    </div>
                                  `,e.appendChild(t);let a=t.querySelector("h2"),s=t.querySelector(".Front_img"),c=0,d=[];a.addEventListener("click",async()=>{if(0===d.length){let e=t.querySelector(".loader");e.style.visibility="visible",d=await i(n),e.style.visibility="hidden"}c=(c+1)%d.length,s.src=d[c].src})}};
//# sourceMappingURL=index.1633c162.js.map
