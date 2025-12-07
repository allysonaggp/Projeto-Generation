import { colors } from "./colors";

export class Menu {
    mostrarOpcoes(): void {
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
        console.log(colors.fg.green, `    *      ${colors.fg.yellow} *      ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}  *   ${colors.fg.green}     *    `)
        console.log(colors.fg.green, ` *     * ${colors.fg.yellow}  *    ${colors.fg.blue}* ${colors.fg.white}BANCO DO BRAZIL COM Z${colors.fg.blue} *   ${colors.fg.yellow} *   ${colors.fg.green} *     * `)
       console.log(colors.fg.green, `    *      ${colors.fg.yellow} *      ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}  *   ${colors.fg.green}     *    `)
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
        console.log(colors.fg.gray, `                                                         `)
        console.log(colors.fg.yellow, `        [ 1 ]${colors.fg.white} -${colors.fg.white} Criar Conta                              `)
        console.log(colors.fg.yellow, `        [ 2 ]${colors.fg.white} -${colors.fg.white} Listar todas as Contas                   `)
        console.log(colors.fg.yellow, `        [ 3 ]${colors.fg.white} -${colors.fg.white} Buscar Contas por Numero                 `)
        console.log(colors.fg.yellow, `        [ 4 ]${colors.fg.white} -${colors.fg.white} Atualizar Dados da Conta                 `)
        console.log(colors.fg.yellow, `        [ 5 ]${colors.fg.white} -${colors.fg.white} Apagar Conta                             `)
        console.log(colors.fg.yellow, `        [ 6 ]${colors.fg.white} -${colors.fg.white} Sacar                                    `)
        console.log(colors.fg.yellow, `        [ 7 ]${colors.fg.white} -${colors.fg.white} Depositar                                `)
        console.log(colors.fg.yellow, `        [ 8 ]${colors.fg.white} -${colors.fg.white} Transferir valores entre Contas          `)
        console.log(colors.fg.yellow, `        [ 9 ]${colors.fg.white} -${colors.fg.white} Sair                                     `)
        console.log(colors.fg.gray, `                                                         `)
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)

    }
}

