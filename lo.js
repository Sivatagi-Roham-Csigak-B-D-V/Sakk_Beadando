class Lo{
    constructor(){
    }

    lepes(){
    let egy=[]
    let hely=64
   console.log("van")
    egy.push(lepes1(hely))
    egy.push(lepes2(hely))
    egy.push(lepes3(hely))
    egy.push(lepes4(hely))
    egy.push(lepes5(hely))
    egy.push(lepes6(hely))
    egy.push(lepes7(hely))
    egy.push(lepes8(hely))
    return egy
    }
    
    lepes1(index){
        let szam=index+2*8+1
        console.log("van")
        if (lehet(szam,index)){
            return szam
        }
    }
    lepes2(index){
        let szam=index+2*8-1
        if (lehet(szam,index)){
            return szam
        }
    }
    lepes3(index){
        let szam=index+2*1+8
        if (lehet3(szam,index)){
            return szam
        }
    }
    lepes4(index){
        let szam=index+2*1-8
        if (lehet2(szam,index)){
            return szam
        } 
    }
    lepes5(index){
        let szam=index-2*8+1
        if (lehet1(szam,index)){
            return szam
        }
    }
    lepes6(index){
        let szam=index-2*8-1
        if (lehet1(szam,index)){
            return szam
        }
    }
    lepes7(index){
        let szam=index-2*1+8
        if (lehet3(szam,index)){
            return szam
        }
    }
    lepes8(index){
        let szam=index-2*1-8
        if (lehet2(szam,index)){
            return szam
        }
    }
    
    lehet(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1&&hatar2){
            let sor=sorok(index+8*2)
            let hat=sorok(szam)
            return sor==hat
        }
    }
    lehet1(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1&&hatar2){
            let sor=sorok(index-8*2)
            let hat=sorok(szam)
            return sor==hat
        }
    }
    lehet2(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1 &&hatar2){
            let sor=sorok(index-8)
            let hat=sorok(szam)
            return sor==hat
        }
    }
    lehet3(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1&&hatar2){
            let sor=sorok(index+8)
            let hat=sorok(szam)
            return sor==hat
        }
    }
    sorok(index){
        index=index/8
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
export default Lo