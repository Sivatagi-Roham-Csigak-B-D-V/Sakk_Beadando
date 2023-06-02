class Kiraly{
    constructor(szin){
        this.szin=szin
    }
    Getszin(){
        return this.szin
    }
    kod(){
        if (this.Getszin()=="feher"){
         return "&#9812;"
        }
        else{
        return "&#9818;"
        }
     }
    Lepesek(){

    }
    Lepes_Lehetoseg(){
        
    }
}
export default Kiraly