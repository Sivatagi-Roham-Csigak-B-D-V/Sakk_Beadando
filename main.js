import Palya from "./palya.js";

$(function() {
    const szuloElem = $("section");
    let szamlalo = 0;
  
    for (let index = 1; index < 65; index++) {
      const palya = new Palya(index, szuloElem);
      szamlalo++;
      if (szamlalo === 16) {
        szamlalo = 0;
      }
    }
  });