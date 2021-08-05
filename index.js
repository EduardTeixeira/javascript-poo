import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const client1 = new Cliente();
client1.nome = 'Nome 1';
client1.cpf = 12345678900;
client1.rg = 1234567;

const conta1 = new ContaCorrente();
conta1.agencia = 1234;
conta1.cliente = client1;



const client2 = new Cliente();
client2.nome = 'Nome 2';
client2.cpf = 12345678955;

const conta2 = new ContaCorrente();
conta2.agencia = 4567;
conta2.cliente = client2;



conta1.depositar(1000.33);

conta1.transferir(250, conta2);

console.log(conta1, conta1.verSaldo());

console.log(conta2, conta2.verSaldo());
