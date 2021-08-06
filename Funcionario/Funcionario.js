export class Funcionario {

    #nome;
    #salario;
    #cpf;
    #senha;

    constructor(nome, salario, cpf) {
        this.#nome = nome;
        this.#salario = salario;
        this.#cpf = cpf;
    }

    autenticar(senha) {
        return this.#senha === senha;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }

}