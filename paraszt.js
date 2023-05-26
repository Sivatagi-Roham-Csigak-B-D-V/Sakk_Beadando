class Paraszt {
    constructor(szin, id) {
      this.szin = szin;
      this.id = id;
      this.elsolepes = true;
    }
  
    kod() {
      if (this.szin === "feher") {
        return "&#9817;";
      } else {
        return "&#9823;";
      }
    }
   
    getpoz(){
        return this.id;
    }
  
    Lepesek() {
      const lehetosegek = [];
      const irany = (this.szin === "feher") ? 1 : -1;
      const lepes1 = this.id + (8 * irany);
      const lepes2 = this.id + (16 * irany);
  
      if (this.Lepes_Lehetoseg(lepes1)) {
        lehetosegek.push(lepes1);
      }
  
      if (this.elsolepes && this.Lepes_Lehetoseg(lepes2)) {
        lehetosegek.push(lepes2);
      }
  
      return lehetosegek;
    }
  
    Lepes_Lehetoseg(cel) {
      return (cel >= 0 && cel <= 63);
    }
  
    Lepes(cel) {
      if (this.Lepes_Lehetoseg(cel)) {
        // Bábu kivétele a start helyről
        const startHely = this.id;
        // Bábu beillesztése a cél helyre
        this.id = cel;
  
        // Ellenőrzés vagy további műveletek a lépés után
  
        return true; // Sikeres lépés
      } else {
        return false; // Érvénytelen lépés
      }
    }
  }
  
  export default Paraszt;
  