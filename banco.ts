// Declaração das Bibliotecas
import read = require("readline-sync")
import {Menu} from "./src/util/menu"
import { colors } from "./src/util/colors"
// Declaracao das Constantes e Variaveis
let opcao: number, menu = new Menu

// Loop
do {
    // instancia do menu
    menu.mostrarOpcoes()

    opcao = read.questionInt(`Entre com a Opção desejada: `)
    switch (opcao) {
        case 1:
            console.log("case 1:")
            break
        case 2:
            console.log("case 2:")
            break
        case 3:
            console.log("case 3:")
            break
        case 4:
            console.log("case 4:")
            break
        case 5:
            console.log("case 5:")
            break
        case 6:
            console.log("case 6:")
            break
        case 7:
            console.log("case 7:")
            break
        case 8:
            console.log("case 8:")
            break
        default:
            console.log("Digite uma opção Valida!")
            break
    }

} while (opcao !== 9)
console.log("Saindo do Sistema!")