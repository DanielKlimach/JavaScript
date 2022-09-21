class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
            }
    }
    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }
}

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = "1001";

contaCorrenteRicardo.depositar(100);

contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo);

