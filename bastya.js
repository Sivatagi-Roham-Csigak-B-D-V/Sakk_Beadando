class Bastya{
    constructor(szin){
        this.szin=szin
    }
    kod(){
        if (this.szin=="feher"){
         return "&#9814;"
        }
        else{
        return "&#9820;"
        }
     }
    Lepesekf(index){
        let szamok=[]
        let szamlalo=index
        while (szamlalo<64) {
            szamok.push(szamlalo)
            szamlalo=szamlalo+8
        }
        return szamok
    }
    lepesj(index){
        let szamok=[]
        let szamlalo=index
        while (szamlalo>0) {
            szamok.push(szamlalo)
            szamlalo=szamlalo-8
        }
        return szamok
    }
    lepesb(index){
        let szamok=[]
        let szamlalo=index
        while(Lepes_Lehetoseg(index,szamlalo)){
            szamok.push(szamlalo)
            szamlalo=szamlalo+1
         }
         return szamok
    }
    lepesl(index){
        let szamok=[]
        let szamlalo=index
        while(szamlalo>-4 && Lepes_Lehetoseg(index,szamlalo)){
            szamok.push(szamlalo)
            szamlalo=szamlalo-1
        }
        return szamok
    }
        
    Lepes_Lehetoseg(index){
        let sor=index/8
        let viszintes=index/8==sor && index>sor*8
        return viszintes
    }
    Lepes_Lehetoseg(index,szamlalo){
        let sor=index/8
        sor=szam(sor)
        szamlalo=szamlalo/8
        let viszintes=sor<=szamlalo
        let viszintes2=sor+1>=szamlalo
        return viszintes&& viszintes2
    }
    szam(index){
        if (index>7){
            return 7
        }
        if (index>6){
            return 6
        }
        if (index>5){
            return 5
        }
        if (index>4){
            return 4
        }
        if (index>3){
            return 3
        }
        if (index>2){
            return 2
        }
        if (index>1){
            return 1
        }
        if (index>0){
            return 0
        }
    }
}
export default Bastya