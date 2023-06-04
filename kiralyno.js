class Kiralyno{
    constructor(){
    }

    lepes_tomb(index){
        let tomb=[]
        tomb.push(this.Lepesekbf(index))
        tomb.push(this.Lepesekjf(index))
        tomb.push(this.Lepesekjl(index))
        tomb.push(this.Lepesekbl(index))
        tomb.push(this.Lepesf(index))
        tomb.push(this.Lepesj(index))
        tomb.push(this.Lepesb(index))
        tomb.push(this.Lepesl(index))
        return tomb
    }
    Lepesf(index){
        let szamok=[]
        let szamlalo=index
        while (szamlalo<64) {
            szamok.push(szamlalo)
            szamlalo=szamlalo+8
        }
        return szamok
    }
    Lepesj(index){
        let szamok=[]
        let szamlalo=index
        while (szamlalo>0) {
            szamok.push(szamlalo)
            szamlalo=szamlalo-8
        }
        return szamok
    }
    Lepesb(index){
        let szamok=[]
        let szamlalo=index
        while(this.Lepes_Lehetoseg(index,szamlalo)){
            szamok.push(szamlalo)
            szamlalo=szamlalo+1
         }
         return szamok
    }
    Lepesl(index){
        let szamok=[]
        let szamlalo=index
        while(szamlalo>-4 && this.Lepes_Lehetoseg(index,szamlalo)){
            szamok.push(szamlalo)
            szamlalo=szamlalo-1
        }
        return szamok
    }
    
    Lepes_Lehetoseg(index,szamlalo){
        let sor=index/8
        sor=this.hatarr(sor)
        szamlalo=szamlalo/8
        let viszintes=sor<=szamlalo
        let viszintes2=sor+1>=szamlalo
        return viszintes&& viszintes2
    }
    Lepesekjf(index){
        let szamok=[]
        let szam=index
        while (this.hatarr((szam+8)/8)==this.hatarr((szam+9)/8) && szam+9<=64) {
            szam=szam+9
            szamok.push(szam)
        }
        return szamok

    }
    Lepesekbf(index){
        let szam=index
        let szamok=[]
        while (this.hatarr((szam+8)/8)==this.hatarr((szam+7)/8) && szam+7<64) {
            szam=szam+7
            szamok.push(szam)
        }
        return szamok
    }
    Lepesekjl(index){
        let szam=index
        let szamok=[]
        while (this.hatarr((szam-8)/8)==this.hatarr((szam-9)/8) && szam-9>0) {
            szam=szam-9
            szamok.push(szam)
        }
        return szamok
    }   
    Lepesekbl(index){
        let szam=index
        let szamok=[]
        while (this.hatarr((szam-8)/8)==this.hatarr((szam-7)/8) && szam-7>0) {
            szam=szam-7
            szamok.push(szam)
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