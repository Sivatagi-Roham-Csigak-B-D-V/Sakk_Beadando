class Paraszt{

    constructor(szin){
        this.szin=szin
    }
    Getszin(){
      return this.szin
    }
    kod() {
      if (this.Getszin() === "feher") {
        return "\u2659";
      } else {
        return "&#9823;";
      }
    }

  }
  
  export default Paraszt;
  