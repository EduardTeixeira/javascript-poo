class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    #saldo = 1000;
    // https://github.com/tc39/proposal-class-fields#private-fields

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
}

const client1 = new Cliente();
client1.nome = 'Nome 1';
client1.cpf = 12345678900;
client1.rg = 1234567;

const conta1 = new ContaCorrente();
conta1.agencia = 1234;
// conta1.sacar(500);
// conta1.depositar(500);

const valorSaque = conta1.sacar(100);
console.log('Valor saque ::: ' + valorSaque)

console.log(client1, conta1);

const client2 = new Cliente();
client2.nome = 'Nome 2';
client2.cpf = 12345678955;

const conta2 = new ContaCorrente();
conta2.agencia = 4567;

console.log(client2, conta2);
