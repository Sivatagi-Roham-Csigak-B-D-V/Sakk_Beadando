import { lista } from "./Babuklista.js"
import { kulcslista } from "./Babuklista.js"
import Bastya from "./bastya.js";
import Futo from "./futo.js";
import Paraszt from "./paraszt.js";
import Kiraly from "./kiraly.js";
import Kiralyno from "./Kiralyno.js";
import Lo from "./lo.js";

class Babu{
    constructor(){
    this.id_hely=setId_hely
    this.Nev=this.Nev
    }
    setId_hely(){
        this.setId_hely
    }
    getId_hely(){
        return this.getId_hely
    }
    getNev(){
        return this.getNev
    }
    osszealit(lista,kulcslista)


 letrehoz(Nev){
    switch(Nev){
        case "fekete_Paraszt":
            new Paraszt("")
            break;
        case "fekete_Bastya":
            new Bastya("")
            break;
        case "fekete_Futo":
            new Futo("");
            break;
        case "fekete_Ló":
            new Lo("")
            break;
        case "fekete_királynő":
            new Kiralyno("")
            break;
        case "fekete_király":
            new Kiraly("")
            break;
        case "feher_Paraszt":
            new Paraszt("feher")
            break;
        case "feher_Bastya":
            new Bastya("feher")
            break;
        case "feher_Futo":
            new Futo("feher");
            break;
        case "feher_Ló":
            new Lo("feher")
            break;
        case "feher_királynő":
            new Kiralyno("feher")
            break;
        case "feher_király":
            new Kiraly("feher")
            break;
    }
    }
}
