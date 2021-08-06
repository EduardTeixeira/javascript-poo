import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const client1 = new Cliente('Nome 1', 12345678900, 1234567);
const conta1 = new ContaCorrente(1234, client1);

const client2 = new Cliente('Nome 2', 12345678955, null);
const conta2 = new ContaCorrente(4567, client2);

conta1.depositar(1000.33);

conta1.transferir(250, conta2);

console.log('Número de Contas ::: ' + ContaCorrente.numeroDeContas);

console.log('\nDados da conta 1\n', conta1, conta1.verSaldo(), conta1.cliente, conta1.cliente.cpf, conta1.cliente.rg);

console.log('\nDados da conta 2\n', conta2, conta2.verSaldo(), conta2.cliente, conta2.cliente.cpf, conta2.cliente.rg);
