// Exportamos por defecto la clase Pokemon
export default class Pokemon {
    // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
    constructor(data) {
        this.name = data.name;                          // Nombre del pokemon
        this.id = data.id;                              // Id del pokemon
        this.pkm_front = data.sprites.front_default;    // Pokemon de frente
        this.pkm_back = data.sprites.back_default;      // Pokemon de espaldas
        this.pkm_type = data.types;                     // Tipo del pokemon (Devuelve un array)
        this.pkm_weight= data.weight;
        this.pkm_height= data.height;
        this.pkm_price=0
        this.pkm_attack = data.stats[1].base_stat;
        this.pkm_sfront= data.sprites.front_shiny
        this.pkm_sback= data.sprites.back_shiny
    }
}