class Kiraly{
    constructor(){
        
    }
    lepesek(hely){
        let egy=[]
        if (typeof(this.Lepesek1(hely))!=="undefined"){
            egy.push(this.Lepesek1(hely))
            }
        if (typeof(this.lepesek2(hely))!=="undefined"){
            egy.push(this.lepesek2(hely))
        }
        if (typeof(this.lepesek3(hely))!=="undefined"){
            egy.push(this.lepesek3(hely))
        }
        if (typeof(this.Lepesek4(hely))!=="undefined"){
            egy.push(this.Lepesek4(hely))
        }
        if (typeof(this.lepesek5(hely))!=="undefined"){
            egy.push(this.lepesek5(hely))
        }
        if (typeof(this.lepesek6(hely))!=="undefined"){
            egy.push(this.lepesek6(hely))
        }
        if (typeof(this.Lepesek7(hely))!=="undefined"){
            egy.push(this.Lepesek7(hely))
            }
        if (typeof(this.lepesek8(hely))!=="undefined"){
            egy.push(this.lepesek8(hely))
            }
        return egy
    }
    Lepesek1(index){
        let szam=index+7
        if (this.lehet(szam,index+8)){
            return szam
        }
    }
    lepesek2(index){
        let szam=index+8
        if (this.lehet(szam,index+8)){
            return szam
        }
    }
    lepesek3(index){
        let szam=index+9
        if (this.lehet(szam,index+8)){
            return szam
        }
    }
    Lepesek4(index){
        let szam=index+1
        if (this.lehet(szam,index)){
            return szam
        }
    }
    lepesek5(index){
        let szam=index-1
        if (this.lehet(szam,index)){
            return szam
        }
    }
    lepesek6(index){
        let szam=index-7
        if (this.lehet(szam,index-8)){
            return szam
        }
    }
    Lepesek7(index){
        let szam=index-8
        if (this.lehet(szam,index-8)){
            return szam
        }
    }
    lepesek8(index){
        let szam=index-9
        if (this.lehet(szam,index-8)){
            return szam
        }
    }

    lehet(szam,index){
        let hatar2=szam<65
        if (hatar2){
            let sor=this.sorok(index+8)
            let hat=this.sorok(szam)
            return sor==hat
        }
    }
    lehet1(szam,index){
        let hatar1=szam>0
        if (hatar1){
            let sor=this.sorok(index-8)
            let hat=this.sorok(szam)
            return sor==hat
        }
    }
    lehet2(szam,index){
            let sor=this.sorok(index)
            let hat=this.sorok(szam)
            return sor==hat
    }
    sorok(index){
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