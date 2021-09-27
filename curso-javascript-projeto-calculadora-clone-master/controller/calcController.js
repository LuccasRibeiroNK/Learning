class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");



        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + ((currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes());



        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = datetime;

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this.displayCalc = valor;
    }

    get dataAtual() {
        return this._currentDate;
    }

    set displayCalc(valor) {
        this._currentDate = valor;
    }

}