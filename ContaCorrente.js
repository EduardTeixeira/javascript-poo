import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    agencia;
    #cliente;
    #saldo = 0;
    // https://github.com/tc39/proposal-class-fields#private-fields

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    verSaldo() {
        return `\nSaldo atual ::: ${this.#saldo}`;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
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

}