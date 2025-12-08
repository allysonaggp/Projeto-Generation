import read = require("readline-sync")
import { colors } from "../util/colors"

export class Conta {
    private _numero: number
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    // Método Constructor, que vai permitir instancial essa classe em outros locais do projeto 
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }
    // Cria Métodos Get e Set

    // Número
    public get numero() {
        return this._numero
    }
    public set numero(numero: number) {
        this._numero = numero
    }
    // Agencia
    public get agencia() {
        return this._agencia
    }
    public set agencia(agencia: number) {
        this._agencia = agencia
    }

    // Titular
    public get titular() {
        return this._titular
    }
    public set titular(titular: string) {
        this._titular = titular
    }

    // Saldo
    public get saldo() {
        return this._saldo
    }
    public set saldo(saldo: number) {
        this._saldo = saldo
    }

    // Métodos

    // Sacar
    public sacar(valor: number): boolean {
        if (this.saldo < valor) {
            console.log(`\n${colors.fg.red}Saldo Insuficiente!${colors.reset}`)
            return false
        }
        this.saldo = this.saldo - valor
        return true
    }

    // Depositar
    public depositar(valor: number): void {
        this._saldo = this._saldo + valor
    }

    // Visualizar
    public visualizar(): void {
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)
        console.log(colors.fg.green, `    *      ${colors.fg.yellow} *      ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}  *   ${colors.fg.green}     *    `)
        console.log(colors.fg.green, ` *     * ${colors.fg.yellow}  *    ${colors.fg.blue}* ${colors.fg.white}BANCO DO BRAZIL COM Z${colors.fg.blue} *   ${colors.fg.yellow} *   ${colors.fg.green} *     * `)
        console.log(colors.fg.green, `    *      ${colors.fg.yellow} *      ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}  *   ${colors.fg.green}     *    `)
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}\n`)
        let tipo: string = read.question(`Digite o tipo de Conta:

${colors.fg.yellow}[${colors.reset} 1 ${colors.fg.yellow}]${colors.fg.blue} -${colors.reset} Conta Corrente
${colors.fg.yellow}[${colors.reset} 2 ${colors.fg.yellow}]${colors.fg.blue} -${colors.reset} Conta Poupança


${colors.fg.green}=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}
Opção escolhida: `)
        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente"
                break
            case 2:
                tipo = "Conta poupança"
                break
            default:
                console.log("Digite uma opção valida!")
                break
        }
        console.log(`\n${colors.fg.green}=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)
        console.log(`                    Dados da conta                       `)
        console.log(`${colors.fg.green}=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)
        console.log(`Numero da Conta${this._numero}`)
        console.log(`Agência: ${this._agencia}`)
        console.log(`Tipo da Conta: ${this._tipo}`)
        console.log(`Titular: ${this._titular}`)
        console.log(`Saldo: ${this._saldo.toFixed(2)}`)
    }

}


