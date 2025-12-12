import { ContaRepository } from "../repository/ContaRepository";
import { Conta } from "../model/Conta";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>
    numero: number = 0

    // CRUD da COnta
    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero)
        if (buscarConta != null) {
            buscarConta.visualizar()
        } else
            console.log(`A Conta numero: ${numero} não fopi encontrada!`)
    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar()
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta)
        console.log(`Conta número: ${conta.numero} foi cadastrada com Sucesso!`)
    }
    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero)
        if (buscarConta != null) {
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta
            console.log(`Conta número ${conta.numero} foi atualizada com sucesso!`)
        } else {
            console.log(`A Conta número ${conta.numero} não foi encontrada`)
        }
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(`\nA Conta número: ${numero} foi apagada com sucesso!`);
        } else {
            console.log(`\nA Conta número: ${numero} não foi encontrada!`);
        }
    }


    // Métodos Bancários
    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            if (conta.sacar(valor) == true)
                console.log(`\nO Saque na Conta número: ${numero} foi efetuado com sucesso!`);
        } else {
            console.log(`\nA Conta número: ${numero} não foi encontrada!`);
        }
    }
    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(`\nO Depósito na Conta número: ${numero} foi efetuado com sucesso!`);
        } else {
            console.log(`\nA Conta número: ${numero} não foi encontrada!`);
        }
    }
    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(`\nA Transferência da Conta número: ${numeroOrigem} para a Conta número: ${numeroDestino} foi efetuada com sucesso!`);
            }
        } else {
            console.log(`\nA Conta número: ${numeroOrigem} e/ou a Conta número: ${numeroDestino}não foram encontradas!`);
        }
    }
    // Gerar número da Conta
    public gerarNumero(): number {
        return ++this.numero
    }

    //Checar se uma conta existe
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            return conta
        }
        return null
    }
}