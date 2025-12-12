// Declaração das Bibliotecas
import read = require("readline-sync")
import { Menu } from "./src/util/menu"
import { ContaCorrente } from "./src/model/ContaCorrente"
import { ContaPoupanca } from "./src/model/ContaPoupanca"
import { sobre } from "./src/util/sobre"
import { ContaController } from "./src/controller/ContaController"
import { colors } from "./src/util/colors"

// Declaracao das Constantes e Variaveis
let opcao, numero, agencia, tipo, saldo, limite, aniversario: number
let titular: string, menu = new Menu
const tipoContas = [' Conta Corrente', 'Conta Poupança']

// Testes -------------------------------------------------------

// Teste Objeto Conta Corrente
const contaCorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "mariana", 15000, 1000)
contaCorrente.visualizar()
contaCorrente.sacar(2000)
contaCorrente.visualizar()
contaCorrente.depositar(1000)
contaCorrente.visualizar()

// Teste Objeto Conta Poupança
const contaPoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10)
contaCorrente.visualizar()
contaCorrente.sacar(200)
contaCorrente.visualizar()
contaCorrente.depositar(1000)
contaCorrente.visualizar()

console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();

export function main() {
    // Imstancia da Classe ContCointroller
    let contas: ContaController = new ContaController()

    // Loop
    do {
        // instância do menu
        menu.menuPrincipal()
        opcao = read.questionInt(`Entre com a Opção desejada: `)
        switch (opcao) {
            case 1:
                console.log(`${colors.fg.green}        =-=-${colors.fg.yellow}=-=${colors.fg.blue}-=-${colors.reset}     Ciar Conta     ${colors.fg.blue}-=-${colors.fg.yellow}=-=${colors.fg.green}-=-= ${colors.reset}\n                       `)

                
                agencia = read.questionInt("Digite o número da agencia: ")

                titular = read.question("\nDigite o nome do Titular da Conta: ")

                console.log("\nDigite o número do tipo da Conta: ")
                tipo = read.keyInSelect(tipoContas, "", { cancel: false }) + 1

          
                saldo = read.questionFloat("\nDigite o Saldo da Conta (R$): ")
                switch (tipo) {
                    case 1:
                        // console.log("Digite o limite da Conta (R$): ")
                        limite = read.questionFloat("Digite o limite da Conta (R$): ")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break
                    case 2:
                        // console.log("Digite oo Dia do aniversario da COnta Poupança: ")
                        aniversario = read.questionInt("Digite oo Dia do aniversario da COnta Poupança: ")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        break
                    // keyPress()---------------------------------------VERIFICAR ERROR
                }
                break
            case 2:
                console.log("Listar todas as Contas")
                contas.listarTodas()
                // keyPress()---------------------------------------VERIFICAR ERROR
                break
            case 3:
                console.log("Buscar Contas por Número")
                break
            case 4:
                console.log("Atualizar Dados da Conta")
                break
            case 5:
                console.log("Apagar Conta")
                break
            case 6:
                console.log("Sacar")
                break
            case 7:
                console.log("Depositar")
                break
            case 8:
                console.log("Transferir Valores entre Contas")
                break
            case 9:
                sobre()
                console.log("\nSaindo do Sistema!")
                break
            default:
                console.log("Digite uma opção Valida!")
                break
        }

    } while (opcao !== 9)
}
main()