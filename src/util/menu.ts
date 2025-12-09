import { colors } from "./colors";

export class Menu {
    menuPrincipal(): void {
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)
        console.log(colors.fg.green, `    *      ${colors.fg.yellow} *      ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}  *   ${colors.fg.green}     *    `)
        console.log(colors.fg.green, ` *     * ${colors.fg.yellow}  *    ${colors.fg.blue}* ${colors.fg.white}BANCO DO BRAZIL COM Z${colors.fg.blue} *   ${colors.fg.yellow} *   ${colors.fg.green} *     * `)
        console.log(colors.fg.green, `    *      ${colors.fg.yellow} *      ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}  *   ${colors.fg.green}     *    `)
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)
        console.log(`${colors.fg.green}        =-=-${colors.fg.yellow}=-=${colors.fg.blue}-=-${colors.reset}     Menu Principal     ${colors.fg.blue}-=-${colors.fg.yellow}=-=${colors.fg.green}-=-= ${colors.reset}\n                       `)
        console.log(colors.fg.gray, `                                                                                                                                   `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}1${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Criar Conta                              `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}2${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Listar todas as Contas                   `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}3${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Buscar Contas por Numero                 `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}4${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Atualizar Dados da Conta                 `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}5${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Apagar Conta                             `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}6${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Sacar                                    `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}7${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Depositar                                `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}8${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Transferir valores entre Contas          `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}9${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Sair                                     `)
        console.log(colors.fg.gray, `                                                          `)
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)

    }
}

