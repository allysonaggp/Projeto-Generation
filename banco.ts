// Declaração das Bibliotecas
import read = require("readline-sync")

// Declaracao das Constantes e Variaveis
let opcao: number


do {
    console.log(`@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@
   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .    
. .  .  .  .  .      CASA DA MOEDA      .  .  .  .  . .
   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .    
@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@        

        [ 1 ] - Criar Conta
        [ 2 ] - Listar todas as Contas  
        [ 3 ] - Buscar Contas por Numero
        [ 4 ] - Atualizar Dados da Conta
        [ 5 ] - Apagar Conta 
        [ 6 ] - Sacar 
        [ 7 ] - Depositar
        [ 8 ] - Transferir valores entre Contas 
        [ 9 ] - Sair

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
---------------------------------------------------------`)
    opcao = read.questionInt("Entre com a Opção desejada:")
    switch (opcao) {
        case 1:
            break
        case 2:
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            break
        case 8:
            break
        default:
            console.log("Digite uma opção Valida!")
            break
    }

} while (opcao !== 9)
console.log("Saindo do Sistema!")