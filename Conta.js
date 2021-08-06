export class Conta {

    #saldo;
    #cliente;
    #agencia;

    constructor(saldoInicial, cliente, agencia) {
        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
    }

    set saldo(novoValor) {
        this.#saldo = novoValor;
    }

    get saldo() {
        return this.#saldo;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    verDadosConta() {
        return `\n Saldo ::: ${this.#saldo} \n Agencia ::: ${this.#agencia}`;
    }

    sacar(valor) {
        const taxa = 1;
        return this.#sacarPrivado(valor, taxa);
    }

    #sacarPrivado(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    getSacarPrivado(valor, taxa) {
        return this.#sacarPrivado(valor, taxa);
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this.#saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste() {
        console.log("chamou na classe Conta")
    }

}