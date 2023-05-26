class Palya {
    constructor(index, szuloElem, id) {
      this.index = index;
      this.id = id;
      this.divElem = $("<div class='cella'></div>");
      this.divElem.attr("id", this.id);
      szuloElem.append(this.divElem);
      
      this.applyBackground();
    }
  
    applyBackground() {
      if (this.index <= 8 || (this.index > 16 && this.index <= 24) || (this.index > 32 && this.index <= 40) || (this.index > 48 && this.index <= 56)) {
        if (this.index % 2 === 0) {
          this.divElem.css("background-color", "#A20D0D");
        } else {
          this.divElem.css("background-color", "#BAB4B4");
        }
      } else {
        if (this.index % 2 === 0) {
          this.divElem.css("background-color", "#BAB4B4");
        } else {
          this.divElem.css("background-color", "#A20D0D");
        }
      }
    }
  }
export default Palya