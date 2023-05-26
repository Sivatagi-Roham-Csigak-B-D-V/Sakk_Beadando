import Palya from "./palya.js";
class Jatekter {
  #lepes;

  constructor() {
    $(function () {
      this.#lepes = 0;
      const asideElem = $("aside");

      const infoPanel = new InfoPanel(asideElem);

      const playerPTag = $(asideElem).find("p").first();
      const jatekfolyamat = $(asideElem).find("p").last();
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
      $(window).on("elemKivalasztas", (event) => {
        if (this.#lepes % 2 === 0) {
          event.detail.setElem("X");
          playerPTag.text("Játékos: O");
        } else {
          event.detail.setElem("O");
          playerPTag.text("Játékos: X");
        }
        this.#lepes++;
        infoPanel.updateLepes(this.#lepes);
        if (this.#lepes < 9) {
          jatekfolyamat.text("A játék folyamatban");
        } else {
          jatekfolyamat.text("A játék vége!");
        }
      });
    });
  }
}

export default Jatekter;
