export class Desocupacao {
    constructor(
        public id:number,
        public idvaga:number,
        public idconfig:number,
        public saida: Date,
        public hora : Date,
        public valor: number
    ){}
}