class Palya {
    constructor(index, szuloElem) {
      this.index = index;
      this.divElem = $("<div class='cella'><p>Sakk</p></div>");
      szuloElem.append(this.divElem);
      this.applyBackground();
    }
  
    applyBackground() {
      if (this.index <= 8 || (this.index > 16 && this.index <= 24) || (this.index > 32 && this.index <= 40) || (this.index > 48 && this.index <= 56)) {
        if (this.index % 2 === 0) {
          this.divElem.css("background-color", "brown");
        } else {
          this.divElem.css("background-color", "white");
        }
      } else {
        if (this.index % 2 === 0) {
          this.divElem.css("background-color", "white");
        } else {
          this.divElem.css("background-color", "brown");
        }
      }
    }
  }
export default Palya