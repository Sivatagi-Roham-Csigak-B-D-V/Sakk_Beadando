import { lista } from "./Babuklista.js"
import { kulcslista } from "./Babuklista.js"
import Bastya from "./bastya.js";
import Futo from "./futo.js";
import Paraszt from "./paraszt.js";
import Kiraly from "./kiraly.js";
import Kiralyno from "./Kiralyno.js";
import Lo from "./lo.js";

class Babu{
    constructor(nev){
    this.setNev(nev)
    }
    setId_hely(){
        this.setId_hely
    }
    getId_hely(){
        return this.getId_hely
    }
    getNev(){
        return this.nev
        
    }
    setNev(nev){
        switch(nev){
            case "fekete_Paraszt":
                new Paraszt("")
                Paraszt.kod()
                break;
            case "fekete_Bastya":
                new Bastya("")
                ParasBastyazt.kod()
                break;
            case "fekete_Futo":
                const futo=new Futo("");
                tFuto.kod()
                break;
            case "fekete_Ló":
                const lo=new Lo("")
                this.nev=Lo.kod()
                break;
            case "fekete_királynő":
                const kiralyno=new Kiralyno("")
                this.nev=Kiralyno.kod()
                break;
            case "fekete_király":
                const kiraly=new Kiraly("")
                this.nev=Kiraly.kod()
                break;
            case "feher_Paraszt":
                const paraszt=new Paraszt("feher")
                this.nev=paraszt.kod()
                break;
            case "feher_Bastya":
                new Bastya("feher")
                Bastya.kod()
                break;
            case "feher_Futo":
                new Futo("feher");
                Futo.kod()
                break;
            case "feher_Ló":
                new Lo("feher")
                Lo.kod()
                break;
            case "feher_királynő":
                new Kiralyno("feher")
                Kiralyno.kod()
                break;
            case "feher_király":
                new Kiraly("feher")
                Kiraly.kod()
                break;
        }
    }

}
export default Babu
