import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Nome 1', 12345678900, 1234567);

const contaCorrente = new ContaCorrente(cliente1, 1234);
contaCorrente.depositar(1000.33);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1234);
contaPoupanca.sacar(10);

console.log('Número de Contas ::: ' + ContaCorrente.numeroDeContas);

console.log('\nConta Corrente', contaCorrente.verDadosConta(), contaCorrente.cliente.verDadosCliente());

console.log('\nConta Poupanca', contaPoupanca.verDadosConta(), contaPoupanca.cliente.verDadosCliente());
