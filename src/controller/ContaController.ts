import { ContaRepository } from "../repository/ContaRepository";
import { Conta } from "../model/Conta";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>
    numero: number = 0

    // CRUD da COnta
    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.")
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
        throw new Error("Method not implemented.")
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.")
    }

    // Métodos Bancários
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.")
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.")
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.")
    }
    // Gerar número da Conta
    public gerarNumero(): number {
        return ++this.numero
    }
}