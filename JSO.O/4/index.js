import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = "1001";
contaCorrenteCliente1.cliente = cliente1;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "88822233309";

const contaCorrenteCliente2 = new ContaCorrente();
contaCorrenteCliente2.cliente = cliente2


contaCorrenteCliente1.depositar(100);
console.log(contaCorrenteCliente1, contaCorrenteCliente2);

contaCorrenteCliente1.transferir(50, contaCorrenteCliente2);
console.log(contaCorrenteCliente1, contaCorrenteCliente2);


