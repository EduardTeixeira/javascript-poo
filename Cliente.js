export class Cliente {

    nome;
    #cpf;
    #rg;
    #senha;

    constructor(nome, cpf, rg, senha) {
        this.nome = nome;
        this.#cpf = cpf;
        this.#rg = rg;
        this.#senha = senha;
    }

    verDadosCliente() {
        return `\n Nome ::: ${this.nome} \n CPF ::: ${this.#cpf} \n RG ::: ${this.#rg}`;
    }

    get senha() {
        return this.#senha;
    }

    get cpf() {
        return this.#cpf;
    }

    get rg() {
        return this.#rg;
    }

}