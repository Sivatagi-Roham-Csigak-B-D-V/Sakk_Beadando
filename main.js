import Palya from "./palya.js";

$(function (){
    const szuloElem = $("section");
    let szamlalo = 0
      for (let index = 0; index < 8; index++) {
        this.divElem = $("section div:last-child");
        for (let index_kett = 0; index_kett < 8; index++) {
            if (szamlalo == 0){
                const palya = new Palya(index_kett, szuloElem);
                if (index_kett % 2 == 0){
                    this.divElem.css("background-color", "brown")
                }else{
                    this.divElem.css("background-color", "white");
        
                }
            }
        }
      }

 })