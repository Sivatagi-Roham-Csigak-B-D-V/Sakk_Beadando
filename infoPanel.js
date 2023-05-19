class Infopanel {

    #gyozelem
    init(){
        const asideElem = document.createElement('aside')
        asideElem.append(`<p class="lepes"></p>`);
        asideElem.append(`<p class="jatekos"></p>`);
        asideElem.append(`<p class="gyozelem"></p>`);
    
        this.lepes = $(".lepes");
        this.jatekos = $(".jatekos");
        this.#gyozelem = $(".gyozelem");
      }
    
      setLepes(lepes) {
        this.lepes.html(lepes).append(". lépés");
      }
      setJatekos(jatekos) {
        this.jatekos.html(jatekos);
      }
      setVege(gyozelem) {
        this.gyozelem.html(gyozelem);
      }
    }
 
  export default Infopanel;