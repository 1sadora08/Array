/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = []

metasSemana.push('ficar rico')
metasSemana.push('fazer dança')
metasSemana.push('sair mais de casa')

if(metasSemana[1] == 'exercício fisíco'){
    console.log(metasSemana)
}else{
    metasSemana.splice(1, 1, 'praticar esportes')
    console.log(metasSemana)
}

