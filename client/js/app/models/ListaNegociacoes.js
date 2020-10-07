class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getNegocicao() {

        return [].concat(this._negociacoes);
    }
}