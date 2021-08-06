import { Cliente } from './Cliente.js';

import { Conta } from './Conta/Conta.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Nome Diretor', 10000, 12345678900);
diretor.cadastrarSenha('12345678');
const diretorLogado = SistemaAutenticacao.login(diretor, '12345678');
console.log(diretorLogado);

const gerente = new Gerente('Nome Gerente', 5000, 12345678955);
gerente.cadastrarSenha('1234');
const gerenteLogado = SistemaAutenticacao.login(gerente, '12345678');
console.log(gerenteLogado);

const cliente = new Cliente('Nome Cliente', 11122233344, 1234567, '123456');
const clienteLogado = SistemaAutenticacao.login(cliente, '123456');
console.log(clienteLogado);

/* EXEMPLO DAS CONTAS

const cliente1 = new Cliente('Nome 1', 12345678900, 1234567);

const contaCorrente = new ContaCorrente(cliente1, 1234);
contaCorrente.depositar(1000.33);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1234);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log('Número de Contas ::: ' + ContaCorrente.numeroDeContas);

console.log('\nConta Corrente', contaCorrente.verDadosConta(), contaCorrente.cliente.verDadosCliente());

console.log('\nConta Poupanca', contaPoupanca.verDadosConta(), contaPoupanca.cliente.verDadosCliente());

console.log('\nConta Salário', contaSalario.verDadosConta(), contaSalario.cliente.verDadosCliente());
*/