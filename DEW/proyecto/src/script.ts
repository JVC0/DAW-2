

        // Ejercicio D1S1.1.1
        let mensaje:string  = 'hola mundo'
        $('#output1').text(mensaje);
        // Ejercicio D1S1.1.2
        interface Freddy {
                nombre: string;
                edad: number;
                pesadilla: string;
            }
            
            const freddy: Freddy = {
                nombre: "Freddy Krueger",
                edad: 45,
                pesadilla: "Los sueños de los demás."
            };
            
        document.getElementById("output2")!.innerText = JSON.stringify(freddy);
        // Ejercicio D1S2.1.1
        function atacar(arma: string) {
                document.getElementById("output3")!.innerText = `Freddy ataca con ${arma}`;
            }
            
            
        // Ejercicio D1S2.1.2
        function saltar(metros: number = 1) { // parámetro opcional
                document.getElementById("output4")!.innerText = `Freddy salta ${metros} metros`;
            }
            
        // Ejercicio D1S2.2.1
        class Pesadilla {
                private nombre: string;
            
                constructor() {
                    this.nombre = "Pesadilla";
                }
                
                gritar(nombre: string) {
                    document.getElementById("output5")!.innerText = `¡${nombre.toUpperCase()} está aquí!`;
                }
            }
        // Ejercicio D1S2.2.1
            class PesadillaConArrow {
                private nombre: string;
            
                constructor() {
                    this.nombre = "Pesadilla";
                }
                
                gritar = (nombre: string) => {
                    document.getElementById("output6")!.innerText = `¡${nombre.toUpperCase()} está aquí!`;
                }
            }
            atacar("cuchillo");
            saltar(5);
            
            const pesadilla = new Pesadilla();
            pesadilla.gritar("Juan");
            
            const pesadillaConArrow = new PesadillaConArrow();
            pesadillaConArrow.gritar("Ana");