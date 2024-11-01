import Pokemon from './Pokemon.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth,onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {  getFirestore, doc, getDoc, updateDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

var pokemons = [];
var desirelist = [];
var selectedPokemons = [];
var carrito=[];
let totalCost = 0;


function setVisibility(selector, visibility) {
  document.querySelectorAll(selector).forEach((e) => {
    e.style.visibility = visibility;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setVisibility("#filtrotipo", "visible");
  setVisibility("#filtropeso", "visible");
  setVisibility("#filtropoder", "visible");
  setVisibility("#btn_lista_deseo", "visible");
  setVisibility("#btn_alista_deseo", "visible");
  setVisibility("#loginButton", "visible");
  setVisibility("#btn_anadir_carrito", "visible");
  setVisibility("#btn_ver_compra", "visible");
  let Lista_Pokemon = document.querySelector(".Lista_Pokemon");
  Lista_Pokemon.style.visibility = "visible";

  document.querySelector('#pokedex').style.visibility = 'visible';

  startPokedex();
});



const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});



const startPokedex = async () => {
  for (var i = 1; i <= 151; i++) {
    await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        const data = result;
        const pokemon = new Pokemon(data);
        pushPokemon(pokemon);
      });
  }

  await showPokedex(pokemons);
  
  const filterInputP = document.getElementById('filtropoder');
  const filterInput = document.getElementById('filtrotipo');
  const filterInputPeso = document.getElementById('filtropeso')
  

  filterInputP.addEventListener('input', filterPokemons);
  filterInput.addEventListener('input', filterPokemons);
  filterInputPeso.addEventListener('input', filterPokemons);
};

// filtrar pokemons
function filterPokemons() {
  const poderFilterValue = document.getElementById('filtropoder').value.toLowerCase();
  const tipoFilterValue = document.getElementById('filtrotipo').value.toLowerCase();
  const pesoFilterValue = document.getElementById('filtropeso').value.toLowerCase();
  const pokemonCards = document.getElementById("pokedex").children;

  for (let i = 0; i < pokemonCards.length; i++) {
    const pokemonCard = pokemonCards[i];
    let showPokemon = true; // Asumimos que se debe mostrar el Pokémon

    // Filtrado por poder
    if (poderFilterValue) {
      const pokemonPoder = pokemonCard.querySelectorAll('.attack');
      let poderMatch = false;
      for (let j = 0; j < pokemonPoder.length; j++) {
        const pokemonPoderText = pokemonPoder[j].textContent.toLowerCase();
        if (pokemonPoderText.includes(poderFilterValue)) {
          poderMatch = true;
          break;
        }
      }
      if (!poderMatch) {
        showPokemon = false;
      }
    }

    // Filtrado por tipo
    if (tipoFilterValue) {
      const pokemonTypes = pokemonCard.querySelectorAll('.type');
      let tipoMatch = false;
      for (let j = 0; j < pokemonTypes.length; j++) {
        const pokemonType = pokemonTypes[j].textContent.toLowerCase();
        if (pokemonType.includes(tipoFilterValue)) {
          tipoMatch = true;
          break;
        }
      }
      if (!tipoMatch) {
        showPokemon = false; 
      }
    }

   // Filtrado por peso
if (pesoFilterValue) {
  const pokemonPeso = pokemonCard.querySelector('.weight').textContent.toLowerCase();
  const weightValue = parseFloat(pesoFilterValue); 
  const pokemonWeight = parseFloat(pokemonPeso.match(/weight:\s*(\d+\.?\d*)/)[1]); 


  if (pokemonWeight !== weightValue) {
    showPokemon = false; 
  }
} else {

  showPokemon = true; 
}

    if (showPokemon) {
      pokemonCard.style.display = 'block';
    } else {
      pokemonCard.style.display = 'none';
    }
  }
}


function pushPokemon(pokemon) {
  pokemons.push(pokemon);
}

const showPokedex = async (pokemons) => {
  const pokedex = document.getElementById("pokedex");

  for (let i = 0; i < pokemons.length; i++) {
    let tipo1 = "";
    let tipo2 = "";

    for (let aux = 0; aux < pokemons[i].pkm_type.length; aux++) {
      if (aux == 0) {
        tipo1 = pokemons[i].pkm_type[aux].type.name;
      } else if (aux == 1) {
        tipo2 = pokemons[i].pkm_type[aux].type.name;
      }
    }

    const tipo1Color = getColorByType(tipo1);
    const tipo2Color = tipo2 ? getColorByType(tipo2) : "";
    pokemons.pkm_price = ((5 + pokemons[i].pkm_attack * (20 - 5)) / 100).toFixed(2)
    const singleTypeClass = !tipo2 ? "single-type" : "";

    pokedex.innerHTML += `
      <div class="card" id="${pokemons[i].id}">
        <div class="idname">
          ${pokemons[i].id}. ${pokemons[i].name} 
        </div>
        <div class="type">${pokemons.pkm_price}€</div>
        <br>
        <div class="attack">Attack ${pokemons[i].pkm_attack}</div>
        <br>
        <img src="${pokemons[i].pkm_back}">
        <img src="${pokemons[i].pkm_sback}">
        <img class="front" src="${pokemons[i].pkm_front}">
        <img class="front" src="${pokemons[i].pkm_sfront}">
        <br>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo1Color};">
          ${tipo1}
        </div>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo2Color}; opacity: ${NoEmptyTypes(tipo2)};">
          ${tipo2}
        </div>
        <div class="phy">
          <div class="size">
             height: ${pokemons[i].pkm_height}
            <div class="weight">weight: ${pokemons[i].pkm_weight}</div>
          </div>
        </div>
      </div>
    `;
  }
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => togglePokemonSelection(card)); });
};

//funcion para selecionar pokemon
function togglePokemonSelection(card) {
  const pokemonId = card.id;
  const index = selectedPokemons.indexOf(pokemonId);

  if (index === -1) {
   
    selectedPokemons.push(pokemonId);
    card.classList.add('selected');
  } else {
   
    selectedPokemons.splice(index, 1);
    card.classList.remove('selected');
  }

}
// Función para obtener el color por tipo
function getColorByType(type) {
    const colors = {
        fire: "#ff4422",
        water: "#3399ff",
        electric: "#ffcc33",
        grass: "#77cc55",
        ice: "#66ccff",
        fighting: "#bb5544",
        poison: "#aa5599",
        ground: "#ddbb55",
        flying: "#8899ff",
        psychic: "#ff5599",
        bug: "#aabb22",
        rock: "#bbaa66",
        ghost: "#6666bb",
        dragon: "#7766ee",
        dark: "#775544",
        steel: "#aaaabb",
        fairy: "#ee99ee",
        default: "#aaaa99"
    };
    return colors[type] || colors.default;
}

function NoEmptyTypes(tipo) {
    return tipo === "" ? "0" : "1";
}


//Añadir a la lista de deso
const confirmButton = document.getElementById('btn_alista_deseo');

confirmButton.addEventListener('click', async () => {
    const userId = auth.currentUser  ? auth.currentUser .uid : null; 
    if (!userId) {
        alert("Please log in to add Pokémon to your desire list.");
        return; 
    }

    if (selectedPokemons.length === 0) {
        alert("No Pokémon selected. Please select at least one Pokémon.");
        return;
    }

    const confirmMessage = `Are you sure you want to add ${selectedPokemons.length} Pokémon to your desire list?`;
    
    if (confirm(confirmMessage)) {
        const userDoc = await getDoc(doc(db, 'users', userId)); 

        if (userDoc.exists()) {
            const userData = userDoc.data();
            const existingWishlist = userData.desirelist || [];

            selectedPokemons.forEach(pokemonId => {
                const pokemon = pokemons.find(p => p.id.toString() === pokemonId);
                if (pokemon && !existingWishlist.some(p => p.id === pokemon.id)) {
                    existingWishlist.push({
                        id: pokemon.id,
                        name: pokemon.name,
                        attack: pokemon.pkm_attack,
                        weight: pokemon.pkm_weight,
                        price: pokemon.pkm_price,
                       
                    });
                }
               
                const card = document.getElementById(pokemonId);
                if (card) {
                    card.classList.remove('selected');
                }
            });

            
            await updateDoc(doc(db, 'users', userId), {
                desirelist: existingWishlist
            });

            selectedPokemons = []; 
            alert("Pokémon added to your wishlist successfully!");
        } else {
            console.error("No se encontró el documento del usuario.");
        }
    }
});
const anadir = document.getElementById('btn_anadir_carrito');

// Add to cart
anadir.addEventListener('click', () => {
    const userId = auth.currentUser  ? auth.currentUser .uid : null;
    if (!userId) {
        alert("Please log in to add Pokémon to your cart.");
        return;
    }

    if (selectedPokemons.length === 0) {
        alert("No Pokémon selected. Please select at least one Pokémon.");
        return;
    }

    const confirmMessage = `Are you sure you want to add ${selectedPokemons.length} Pokémon to your cart?`;
    
    if (confirm(confirmMessage)) {
        selectedPokemons.forEach(pokemonId => {
            const pokemon = pokemons.find(p => p.id.toString() === pokemonId);
            if (pokemon && !carrito.includes(pokemon)) {
                carrito.push(pokemon);
                if (!pokemon.pkm_price) {
                    pokemon.pkm_price = ((5 + pokemon.pkm_attack * (20 - 5)) / 100).toFixed(2);
                }
                totalCost += parseFloat(pokemon.pkm_price);
            }
            const card = document.getElementById(pokemonId);
            if (card) {
                card.classList.remove('selected');
            }
        });
        selectedPokemons = [];
    }
});


const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', () => {
  location.reload(); 
});


const firebaseConfig = {
  apiKey: "AIzaSyABHv6OInLQBhOyYZ-z8To7crHTeVmjABE",
  authDomain: "pokemon-4d764.firebaseapp.com",
  projectId: "pokemon-4d764",
  storageBucket: "pokemon-4d764.appspot.com",
  messagingSenderId: "30698383276",
  appId: "1:30698383276:web:ecf690eae6c11f0484bc09",
  measurementId: "G-VG7CLGD0B6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  const userInfo = document.getElementById('userInfo');
  const userName = document.getElementById('userName');
  const userMoney = document.getElementById('userMoney');
  const logoutButton = document.getElementById('logoutButton');
  const loginButton = document.getElementById('loginButton');

  if (user) {
  
    const userId = user.uid;
    userName.textContent = `Welcome, ${user.email}!`;

   
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const balance = userData.balance; // Get the balance
      userMoney.textContent = `Your Credit: ${parseFloat(balance).toFixed(2)}€`;
    }


    userInfo.style.display = 'block';
    logoutButton.style.display = 'block';
    loginButton.style.display = 'none';
  } else {

    userInfo.style.display = 'none';
    logoutButton.style.display = 'none';
    loginButton.style.display = 'block';
  }
});

const showButton = document.getElementById('btn_lista_deseo');

showButton.addEventListener('click', async () => {
  const userId = auth.currentUser  ? auth.currentUser .uid : null; 
  if (!userId) {
    alert("Please log in to view your desire list.");
    return;
  }

  document.getElementById("pokedex").style.display = 'none';

  const userDoc = await getDoc(doc(db, 'users', userId)); 

  if (userDoc.exists()) {
    const userData = userDoc.data();
    const desireList = userData.desirelist || [];

    const desireListContainer = document.getElementById("desireListContainer");
    desireListContainer.innerHTML = "";
    desireListContainer.style.display = "grid"; 

    
    for (const pokemon of desireList) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        const pokemonData = await response.json();

       
        pokemonData.pkm_price = ((5 + pokemonData.stats[1].base_stat * (20 - 5)) / 100).toFixed(2);

       
        const tipo1 = pokemonData.types[0].type.name;
        const tipo2 = pokemonData.types[1] ? pokemonData.types[1].type.name : null;

        const tipo1Color = getColorByType(tipo1);
        const tipo2Color = tipo2 ? getColorByType(tipo2) : "";

        const singleTypeClass = !tipo2 ? "single-type" : "dual-type"; 

        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.innerHTML = `
        <div class="card2" id="${pokemon.id}">
        <div class="idname">
          ${pokemonData.id}. ${pokemonData.name}
        </div>
        <div class="type">${pokemonData.pkm_price}€</div>
        <br>
        <div class="attack">Attack: ${pokemonData.stats[1].base_stat}</div>
        <br>
        <img class="front" src="${pokemonData.sprites.front_default}" alt="Front sprite"> <!-- Front sprite -->
        <img class="front" src="${pokemonData.sprites.front_shiny}" alt="Shiny Front sprite"> <!-- Shiny Front sprite -->
        <img class="back" src="${pokemonData.sprites.back_default}" alt="Back sprite"> <!-- Back sprite -->
        <img class="shiny-back" src="${pokemonData.sprites.back_shiny}" alt="Shiny Back sprite"> <!-- Shiny Back sprite -->
        <br>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo1Color};">
          ${tipo1}
        </div>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo2Color}; opacity: ${tipo2 ? 1 : 0};">
          ${tipo2 || ''}
        </div>
        <div class="phy">
          <div class="size">
            height: ${pokemonData.height}
            <div class="weight">weight: ${pokemonData.weight}</div>
          </div>
        </div>
      </div>
        `;
        desireListContainer.appendChild(pokemonCard);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }
  } else {
    console.error("User  document not found.");
  }
});
// Logout function
logoutButton.addEventListener('click', () => {
  signOut(auth).then(() => {
   
    alert('You have logged out.');
  }).catch((error) => {
    console.error('Logout error:', error);
  });
});
const carritoButton = document.getElementById('btn_ver_compra');
carritoButton.addEventListener('click', () => {

  onAuthStateChanged(auth, (user) => {
    if (user) {

      document.getElementById("pokedex").style.display = 'none'; 
      showCart();
    } else {
     
      alert("Please log in to view your cart.");
      window.location.href = 'login.html'; 
    }
  });
});

function showCart() {
  const cartContainer = document.getElementById("cart");
  
  if (!cartContainer) {
    console.error("Cart container not found!");
    return;
  }

  cartContainer.innerHTML = ""; 

  // Show Pokémon in the cart
  carrito.forEach(pokemon => {
    
    let tipo1 = "";
    let tipo2 = "";

    for (let aux = 0; aux < pokemon.pkm_type.length; aux++) {
        if (aux === 0) {
            tipo1 = pokemon.pkm_type[aux].type.name;
        } else if (aux === 1) {
            tipo2 = pokemon.pkm_type[aux].type.name;
        }
    }

    const tipo1Color = getColorByType(tipo1);
    const tipo2Color = tipo2 ? getColorByType(tipo2) : "";
    pokemon.pkm_price = ((5 + pokemon.pkm_attack * (20 - 5)) / 100).toFixed(2);
    const singleTypeClass = !tipo2 ? "single-type" : "dual-type"; 

    cartContainer.innerHTML += `
      <div class="card2" id="${pokemon.id}">
        <div class="idname">
          ${pokemon.id}. ${pokemon.name} 
        </div>
        <div class="type">${pokemon.pkm_price}€</div>
        <br>
        <div class="attack">Attack ${pokemon.pkm_attack}</div>
        <br>
        <img src="${pokemon.pkm_back}">
        <img class="front" src="${pokemon.pkm_front}">
        <br>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo1Color};">
          ${tipo1}
        </div>
        <div class="type ${singleTypeClass}" style="background-color: ${tipo2Color}; opacity: ${tipo2 ? 1 : 0};">
          ${tipo2 || ''}
        </div>
        <div class="phy">
          <div class="size">
            height: ${pokemon.pkm_weight}
            <div class="weight">weight: ${pokemon.pkm_height}</div>
          </div>
        </div>
      </div>
    `;
});

  // Show total price
  const totalContainer = document.createElement('div');
  totalContainer.innerHTML = `<h3>Total: ${totalCost.toFixed(2)}€</h3>`;
  cartContainer.appendChild(totalContainer);

  // Add buy button
  const buyButton = document.createElement('button');
  buyButton.textContent = "Comprar";
  buyButton.addEventListener('click', () => {
    alert("Compra realizada con éxito!");
    
  });
  cartContainer.appendChild(buyButton);

  cartContainer.style.display = 'block';


  buyButton.addEventListener('click', async () => {
    const userId = auth.currentUser .uid; 
    const userDoc = await getDoc(doc(db, 'users', userId)); 

    if (userDoc.exists()) {
        const userData = userDoc.data();
        const balance = userData.balance;

        if (balance >= totalCost) {
          
            const newBalance = balance - totalCost;

           
            await updateDoc(doc(db, 'users', userId), {
                balance: newBalance,
                purchasedPokemons: (userData.purchasedPokemons || []).concat(carrito.map(pokemon => ({
                    id: pokemon.id,
                    name: pokemon.name,
                    price: pokemon.pkm_price,
                    attack: pokemon.pkm_attack,
                    weight: pokemon.pkm_weight,
                    purchaseDate: new Date()
                })))
            });

            alert("Compra realizada con éxito!");
           
            carrito = []; 
            totalCost = 0;
            showCart();
            location.reload(); 
        } else {
            alert("No tienes suficiente crédito para realizar esta compra.");
        }
    } else {
        console.error("No se encontró el documento del usuario.");
    }
});
}
