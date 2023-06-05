class Kiraly{
    constructor(){
        
    }
    lepes(index){
        let tomb=[]
        tomb.push(this.Lepesek1(index))
        tomb.push(this.Lepesek2(index))
        tomb.push(this.Lepesek3(index))
        tomb.push(this.Lepesek4(index))
        tomb.push(this.Lepesek5(index))
        tomb.push(this.Lepesek6(index))
        tomb.push(this.Lepesek7(index))
        tomb.push(this.Lepesek8(index))
        return tomb
    }
    Lepesek1(index){
        let szam=index+7
        if (this.hatar(szam/8)==this.hatar((index+8)/8)&&szam<65){
            return szam
        }
    }
    Lepesek2(index){
        let szam=index+8
        if (this.hatar(szam/8)==this.hatar((index+8)/8)&&szam<65){
            return szam
        }
    }
    Lepesek3(index){
        let szam=index+9
        if (this.hatar(szam/8)==this.hatar((index+8)/8)&&szam<65){
            return szam
        }
    }
    Lepesek4(index){
        let szam=index+1
        if (this.hatar(szam/8)==this.hatar(index/8)){
            return szam
        }
    }
    Lepesek5(index){
        let szam=index-1
        if (this.hatar(szam/8)==this.hatar(index/8)){
            return szam
        }
    }
    Lepesek6(index){
        let szam=index-7
        if (this.hatar(szam/8)==this.hatar((index-8)/8)&&szam>0){
            return szam
        }
    }
    Lepesek7(index){
        let szam=index-8
        if (this.hatar(szam/8)==this.hatar((index-8)/8)&&szam>0){
            return szam
        }
    }
    Lepesek8(index){
        let szam=index-9
        if (this.hatar(szam/8)==this.hatar((index-8)/8)&&szam>0){
            return szam
        }
    }
    hatar(index){
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
export default Kiraly