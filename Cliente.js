export class Cliente {

    nome;
    #cpf;
    #rg;

    constructor(nome, cpf, rg) {
        this.nome = nome;
        this.#cpf = cpf;
        this.#rg = rg;
    }

    verDadosCliente() {
        return `\n Nome ::: ${this.nome} \n CPF ::: ${this.#cpf} \n RG ::: ${this.#rg}`;
    }

    get cpf() {
        return this.#cpf;
    }

    get rg() {
        return this.#rg;
    }

}