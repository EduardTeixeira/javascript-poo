export class ContaPoupanca {

    #saldo;
    #cliente;
    #agencia;

    constructor(saldoInicial, cliente, agencia) {
        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
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