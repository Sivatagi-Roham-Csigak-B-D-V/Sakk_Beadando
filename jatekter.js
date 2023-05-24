import Palya from "./palya.js";
class Jatekter {
    constructor(){
        $(function() {
            const szuloElem = $("section");
            let szamlalo = 0;
          
            for (let index = 1; index < 65; index++) {
              const id = index; // Generate a unique ID for each instance
              const palya = new Palya(index, szuloElem, id);
              szamlalo++;
              if (szamlalo === 16) {
                szamlalo = 0;
              }
            }
          });
          
    }
    
}


export default Jatekter