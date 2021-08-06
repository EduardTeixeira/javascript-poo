import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Nome 1', 12345678900, 1234567);

const contaCorrente = new ContaCorrente(1234, cliente1);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1234);

contaCorrente.depositar(1000.33);

console.log('Número de Contas ::: ' + ContaCorrente.numeroDeContas);

console.log('\nDados da conta 1\n', contaCorrente, contaCorrente.verSaldo(), contaCorrente.cliente, contaCorrente.cliente.cpf, contaCorrente.cliente.rg);

console.log('\nConta Poupanca', contaPoupanca);
