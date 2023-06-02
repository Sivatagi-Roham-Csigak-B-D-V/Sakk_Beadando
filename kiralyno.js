class Kiralyno{
    constructor(){
    }

    lepes_tomb(index){
        let tomb=[]
        tomb.push(this.Lepesekbf(index))
        tomb.push(this.lepesekjf(index))
        tomb.push(this.Lepesekjl(index))
        tomb.push(this.Lepesekbl(index))
        tomb.push(this.Lepesf(index))
        tomb.push(this.lepesj(index))
        tomb.push(this.Lepesb(index))
        tomb.push(this.lepesl(index))
        return tomb
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
    
    Lepes_Lehetoseg(index,szamlalo){
        let sor=index/8
        sor=hatarr(sor)
        szamlalo=szamlalo/8
        let viszintes=sor<=szamlalo
        let viszintes2=sor+1>=szamlalo
        return viszintes&& viszintes2
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
export default Kiralyno