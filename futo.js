class Futo{
    constructor(szin){
        this.szin=szin
    }
    Getszin(){
        return this.szin
    }
    kod(){
        if (this.Getszin()=="feher"){
         return "&#9815;"
        }
        else{
        return "&#9821;"
        }
    }
    lepes_tomb(index){
        let tomb=[]
        tomb.push(this.Lepesekbf(index))
        tomb.push(this.lepesekjf(index))
        tomb.push(this.Lepesekjl(index))
        tomb.push(this.Lepesekbl(index))
        return tomb
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
    hatarr(index){
        if (index>7){
            return 8
        }
        if (index>6){
            return 7
        }
        if (index>5){
            return 6
        }
        if (index>4){
            return 5
        }
        if (index>3){
            return 4
        }
        if (index>2){
            return 3
        }
        if (index>1){
            return 2
        }
        if (index>0){
            return 1
        }
    }
    hatarf(index){
        if (index==7){
            return 7
        }
        if (index==6){
            return 5
        }
        if (index==5){
            return 4
        }
        if (index==4){
            return 3
        }
        if (index==3){
            return 2
        }
        if (index==2){
            return 1
        }
        if (index==1){
            return 0
        }
        if (index==0){
            return 8
        }
    }
}
export default Futo