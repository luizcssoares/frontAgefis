export class Movimento {
    constructor(
        public id:number,
        public idvaga: number,
        public numplaca: string,
        public entrada : Date,
        public hora : Date,
        public saida : Date,
        public valor : number
    ){}
}