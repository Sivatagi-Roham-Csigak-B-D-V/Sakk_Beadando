class Kiraly{
    constructor(){
        
    }
    lepesek(index){
        let tomb=[]
        tomb.push(lepesek1(index))
        tomb.push(lepesek2(index))
        tomb.push(lepesek3(index))
        tomb.push(lepesek4(index))
        tomb.push(lepesek5(index))
        tomb.push(lepesek6(index))
        tomb.push(lepesek7(index))
        tomb.push(lepesek8(index))
        return tomb
    }
    Lepesek1(index){
        let szam=index+7
        if (lehet(szam,index+8)){
            return szam
        }
    }
    lepesek2(index){
        let szam=index+8
        if (lehet(szam,index+8)){
            return szam
        }
    }
    lepesek3(index){
        let szam=index+9
        if (lehet(szam,index+8)){
            return szam
        }
    }
    Lepesek4(index){
        let szam=index+1
        if (lehet(szam,index)){
            return szam
        }
    }
    lepesek5(index){
        let szam=index-1
        if (lehet(szam,index)){
            return szam
        }
    }
    lepesek6(index){
        let szam=index-7
        if (lehet(szam,index-8)){
            return szam
        }
    }
    Lepesek7(index){
        let szam=index-8
        if (lehet(szam,index-8)){
            return szam
        }
    }
    lepesek8(index){
        let szam=index-9
        if (lehet(szam,index-8)){
            return szam
        }
    }

    lehet(szam,index){
        let hatar2=szam<65
        if (hatar2){
            let sor=sorok(index+8)
            let hat=sorok(szam)
            return sor==hat
        }
    }
    lehet1(szam,index){
        let hatar1=szam>0
        if (hatar1){
            let sor=sorok(index-8)
            let hat=sorok(szam)
            return sor==hat
        }
    }
    lehet2(szam,index){
            let sor=sorok(index)
            let hat=sorok(szam)
            return sor==hat
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