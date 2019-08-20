export class Ocupacao {
    constructor(
        public id:number,
        public idvaga:number,
        public numplaca: string,
        public entrada : Date,
        public hora: Date
    ){}
}