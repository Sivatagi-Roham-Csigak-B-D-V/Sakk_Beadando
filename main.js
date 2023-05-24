<<<<<<< HEAD
import Palya from "./palya.js";
import Babu from "./babu.js";

$(function() {
    const szuloElem = $("section");
    let szamlalo = 0;
  
    for (let index = 1; index < 65; index++) {
      const palya = new Palya(index, szuloElem);
      const babu = new Babu(index)
      szamlalo++;
      if (szamlalo === 16) {
        szamlalo = 0;
      }
    }
  });
=======
import Jatekter from "./jatekter.js";

$(function (){
  new Jatekter()
})
>>>>>>> 1207a19027a457110831d1b7a65eff6d4e3f02ea
