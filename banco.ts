// Declaração das Bibliotecas
import read = require("readline-sync")
import { Menu } from "./src/util/menu"
import { Conta } from "./src/model/Conta"
import { sobre } from "./src/util/sobre"
import { ContaCorrent } from "./src/model/ContaCorrente"
import { ContaPoupanca } from "./src/model/ContaPoupanca"

// Declaracao das Constantes e Variaveis
let opcao: number, menu = new Menu

// Testes -------------------------------------------------------

// Teste Objeto conta
const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000)
conta.visualizar()
conta.sacar(10500)
conta.visualizar()
conta.depositar(5000)
conta.visualizar()

// Teste Objeto Conta Corrente
const contaCorrente: ContaCorrent = new ContaCorrent(2, 123, 1, "mariana", 15000, 1000)
contaCorrente.visualizar()
contaCorrente.sacar(2000)
contaCorrente.visualizar()
contaCorrente.depositar(1000)
contaCorrente.visualizar()

// Teste Objeto Conta Poupança
const contaPoupanca: ContaPoupanca = new ContaPoupanca(3,123,2,"Victor",1000,10)
contaCorrente.visualizar()
contaCorrente.sacar(200)
contaCorrente.visualizar()
contaCorrente.depositar(1000)
contaCorrente.visualizar()

// Loop
do {
    // instancia do menu
    menu.menuPrincipal()

    opcao = read.questionInt(`Entre com a Opção desejada: `)
    switch (opcao) {
        case 1:
            console.log("Criar Conta")
            break
        case 2:
            console.log("Listar todas as Contas")
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


