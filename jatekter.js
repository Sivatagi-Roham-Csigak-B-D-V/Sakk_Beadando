import Palya from "./palya.js";
import InfoPanel from "./infoPanel.js";
import Babu from "./babu.js";
class Jatekter {
    #lepes;
  
    constructor(){
      this.#lepes = 0;
            const szuloElem = $("section");
            let szamlalo = 0;
            const asideElem = $("aside");
            const infoPanel = new InfoPanel(asideElem);
            const playerPTag = $(asideElem).find("p").first();
            const jatekfolyamat = $(asideElem).find("p").last();
            for (let index = 1; index < 65; index++) {
              const id = index; // Generate a unique ID for each instance
              const palya = new Palya(index, szuloElem, id);
              szamlalo++;
              const cella = $(`#${index}`)
              if (index == 1 || index == 8){
                const babu=new Babu("fekete_Bastya")
                cella.append(babu.getNev())
              }else if(index == 2 || index == 7){
                const babu=new Babu("fekete_Ló")
                cella.append(babu.getNev())
              }else if(index == 3 || index == 6){
                const babu=new Babu("fekete_Futo")
                cella.append(babu.getNev())
              }else if(index == 4){
                const babu=new Babu("fekete_királynő")
                cella.append(babu.getNev())
              }else if(index == 5){
                const babu=new Babu("fekete_király")
                cella.append(babu.getNev())
              }else if(index > 8 && index < 17){
                const babu=new Babu("fekete_Paraszt")
                cella.append(babu.getNev())
              }else if(index == 57 || index == 64){
                const babu=new Babu("feher_Bastya")
                cella.append(babu.getNev()).css("color", "white")
              }else if(index == 58 || index == 63){
                const babu=new Babu("feher_Ló")
                cella.append(babu.getNev()).css("color", "white")
              }else if(index == 59 || index == 62){
                const babu=new Babu("feher_Futo")
                cella.append(babu.getNev()).css("color", "white")
              }else if(index == 60){
                const babu=new Babu("feher_királynő")
                cella.append(babu.getNev()).css("color", "white")
              }else if(index == 61){
                const babu=new Babu("feher_király")
                cella.append(babu.getNev()).css("color", "white")
              }else if(index > 48 && index < 57){
                const babu=new Babu("feher_Paraszt")
                cella.append(babu.getNev()).css("color", "white")
              }
              if (szamlalo === 16) {
                szamlalo = 0;
              }
            }

          $(window).on("elemKivalasztas", (event) => {
            if (this.#lepes % 2 === 0) {
           
              playerPTag.text("jelenlegi Játékos: feher");
            } else {
              playerPTag.text("jelenlegi Játékos: fekete");
            }
            this.#lepes++;
            infoPanel.updateLepes(this.#lepes);
            if (this.#lepes < 1000){
                jatekfolyamat.text(`A játék folyamatbanss`)
            }else{
                jatekfolyamat.text("A játék vége!")
            }
          });
          
    }
    
}

export default Jatekter;
