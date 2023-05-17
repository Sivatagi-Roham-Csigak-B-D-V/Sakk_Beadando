class Palya{
    constructor(index, szuloElem){
        this.index = index;
        szuloElem.append(`<div class="negyzet"><p>Sakk</p></div>`)

        this.divElem = $("article div:last-child");

        this.pElem= this.divElem.children("TESZT")
        this.divElem = $("article div:last-child");
        };
        

    }


export default Palya