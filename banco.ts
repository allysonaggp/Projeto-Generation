// Declaração das Bibliotecas
import read = require("readline-sync")
import { Menu } from "./src/util/menu"
import { Conta } from "./src/model/Conta"
import { sobre } from "./src/util/sobre"
// Declaracao das Constantes e Variaveis
let opcao: number, menu = new Menu

// Objeto da Classe Conta (Teste)
const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000)
//  conta.visualizar()
//  conta.sacar(10500)
//  conta.visualizar()
//  conta.depositar(5000)
//  conta.visualizar()

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
            console.log("Cepositar")
            break
        case 8:
            console.log("Transferir Valores entre Contas")
            break
        case 9:
            break
        default:
            console.log("Digite uma opção Valida!")
            break
    }

} while (opcao !== 9)
sobre()
console.log("\nSaindo do Sistema!")

