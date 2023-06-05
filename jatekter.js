import Palya from "./palya.js";
import InfoPanel from "./infoPanel.js";
import Babu from "./babu.js";
import Bastya from "./bastya.js";
import Lo from "./lo.js";
import Futo from "./futo.js";
import Kiralyno from "./Kiralyno.js";
import Kiraly from "./kiraly.js";
import Paraszt from "./paraszt.js";
import { lista } from "./Babuklista.js";
class Jatekter {
  #lepes;
  constructor() {
    this.#lepes = 0;
    const szuloElem = $("section");
    let szamlalo = 0;
    const asideElem = $("aside");
    const infoPanel = new InfoPanel(asideElem);
    const playerPTag = $(asideElem).find("p").first();
    const jatekfolyamat = $(asideElem).find("p").last();
    const bastya = new Bastya();
    const lo = new Lo();
    const futo = new Futo()
    const kiralyno = new Kiralyno();
    const kiraly = new Kiraly();
    const paraszt = new Paraszt();
    for (let index = 1; index < 65; index++) {
      const id = index; // Generate a unique ID for each instance
      const palya = new Palya(index, szuloElem, id);
      szamlalo++;
      const cella = $(`#${index}`);
      const obj = lista[index - 1];
      if (obj && obj.szimbolumkod) {
        cella.html(obj.szimbolumkod); // Set the HTML content of the cell to the szimbolumkod
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
      const hely=event.detail.id
      const valasztott=(lista[hely-1].szimbolumkod)
      console.log(valasztott)
      if (valasztott=="&#9814;" || valasztott=="&#9820;"){
        let lepes=bastya.lepes_tomb(hely)
        for (let index = 0; index < lepes.length; index++) {
          console.log("van")
          for (let szamlalo = 0; szamlalo < lepes[index].length; szamlalo++) {
            console.log(lepes[index][szamlalo])
            }
          }
        }
      if (valasztott=="&#9821;" || valasztott=="&#9815;"){
        let lepes=futo.lepes_tomb(hely)
        for (let index = 0; index < lepes.length; index++) {
          console.log("van")
          for (let szamlalo = 0; szamlalo < lepes[index].length; szamlalo++) {
            console.log(lepes[index][szamlalo])
            }
          }
        }
      if (valasztott=="&#9816;" || valasztott=="&#9822;"){
        let lepes=lo.lepes(hely)
        for (let index = 0; index < lepes.length; index++) {
        }
      }
      if (valasztott=="&#9818;" || valasztott=="&#9812;"){
          let lepes=kiraly.lepes(hely)
          for (let index = 0; index < lepes.length; index++) {
          }
        }
      if (valasztott=="&#9813;" || valasztott=="&#9819;"){
        let lepes=kiralyno.lepes_tomb(hely)
        for (let index = 0; index < lepes.length; index++) {
          console.log("van")
          for (let szamlalo = 0; szamlalo < lepes[index].length; szamlalo++) {
            console.log(lepes[index][szamlalo])
            }
          }
        }
        if (valasztott=="&#9823;" || valasztott=="&#9817;"){
        let lepes=bastya.lepes_tomb(hely)
        for (let index = 0; index < lepes.length; index++) {
          console.log("van")
          for (let szamlalo = 0; szamlalo < lepes[index].length; szamlalo++) {
            console.log(lepes[index][szamlalo])
            }
          }
        }
      this.#lepes++;
      infoPanel.updateLepes(this.#lepes);
      if (this.#lepes < 1000) {
        jatekfolyamat.text(`A játék folyamatbanss`);
      } else {
        jatekfolyamat.text("A játék vége!");
      }
    });
  }
}

export default Jatekter;
