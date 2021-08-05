class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const client1 = new Cliente();
client1.nome = 'Nome 1';
client1.cpf = 12345678900;
client1.agencia = 1234;
client1.saldo = 100.50;
client1.rg = 1234567;

const client2 = new Cliente();
client2.nome = 'Nome 2';
client2.cpf = 12345678955;
client2.agencia = 4567;
client2.saldo = 23506.57;

console.log(client1, client2);