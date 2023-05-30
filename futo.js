class Futo{
    constructor(szin){
        this.szin=szin
    }
    kod(){
        if (this.szin=="feher"){
         return "&#9815;"
        }
        else{
        return "&#9821;"
        }
     }
    Lepesekjf(index){
        let szamok=[]
        let szamlalo=hatarr(index/8)
        if (szamlalo>hatarf(index%8)){
            szamlalo=hatarf(index%8)
        }
        while (szamlalo<8 && szam+9<=64) {
            szam=szam+9
            szamok.push(szam)
            szamlalo=szamlalo+1
        }
        return szamok

    }
    lepesekbf(index){
        szamlalo=hatarf(index%8)
        if (szamlalo>hatarr(index/8)){
            szamlalo=hatarr(index/8)
        }
        szam=index
        while (szamlalo>0 && szam+7<64) {
            szam=szam+7
            szamok.push(szam)
            szamlalo=szamlalo-1
        }
        return szamok
    }
    lepesekjl(index){
        szam=index
        szamlalo=hatarr(index/8)
        if (szamlalo>hatarf(index%8)){
            szamlalo=hatarf(index%8)

        }
        console.log(szamlalo)
        while (szamlalo<8 && szam-9>0) {
            szam=szam-9
            szamok.push(szam)
            szamlalo=szamlalo+1
        }
        return szamok
    }   
    lepesekbl(index){
        Szam=index
        szamlalo=hatarr(index/8)
        if (szamlalo<hatarf(index%8)){
            szamlalo=hatarf(index%8)

        }
        while (szamlalo<8 && szam-7<64) {
            szam=szam-7
            szamok.push(szam)
            szamlalo=szamlalo+1
        }
        return szamok
    }

}
export default Futo