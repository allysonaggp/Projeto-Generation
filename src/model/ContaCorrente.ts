import { Conta } from "./Conta";
import { colors } from "../util/colors";
export class ContaCorrent extends Conta {
    private _limite: number

    constructor(conta: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(conta, agencia, tipo, titular, saldo)
        this._limite = limite
    }

    public get limite(): number {
        return this._limite
    }
    public set limite(limite: number) {
        this._limite = limite
    }

    public sacar(valor: number): boolean {
        if ((this.saldo + this._limite) > valor) {
            console.log(`\n${colors.fg.red}Saldo Insuficiente!${colors.reset}`)
            return false
        }
        this.saldo = this.saldo - valor
        return true
    }
    public visualisar(): void {
        super.visualizar()
        console.log(`Limite: ${this._limite.toFixed(2)}`)
    }
}
