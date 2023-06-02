import Palya from "./palya.js";
import InfoPanel from "./infoPanel.js";
import Babu from "./babu.js";
import Bastya from "./bastya.js";
import Lo from "./lo.js";
import Futo from "./futo.js";
import Kiralyno from "./Kiralyno.js";
import Kiraly from "./kiraly.js";
import Paraszt from "./paraszt.js";
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
                const bastya=new Bastya("fekete")
                cella.append(bastya.kod())
              }else if(index == 2 || index == 7){
                const lo=new Lo("fekete")
                cella.append(lo.kod())
              }else if(index == 3 || index == 6){
                const futo=new Futo("fekete")
                cella.append(futo.kod())
              }else if(index == 4){
                const kiralyno=new Kiralyno("fekete")
                cella.append(kiralyno.kod())
              }else if(index == 5){
                const kiraly=new Kiraly("fekete")
                cella.append(kiraly.kod())
              }else if(index > 8 && index < 17){
                const paraszt=new Paraszt("fekete")
                cella.append(paraszt.kod())
              }else if(index == 57 || index == 64){
                const bastya=new Bastya("feher")
                cella.append(bastya.kod()).css("color", "white")
              }else if(index == 58 || index == 63){
                const lo=new Lo("feher")
                cella.append(lo.kod()).css("color", "white")
              }else if(index == 59 || index == 62){
                const futo=new Futo("feher")
                cella.append(futo.kod()).css("color", "white")
              }else if(index == 60){
                const kiralyno=new Kiralyno("feher")
                cella.append(kiralyno.kod()).css("color", "white")
              }else if(index == 61){
                const kiraly=new Kiraly("feher")
                cella.append(kiraly.kod()).css("color", "white")
              }else if(index > 48 && index < 57){
                const paraszt=new Paraszt("feher")
                cella.append(paraszt.kod()).css("color", "white")
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
