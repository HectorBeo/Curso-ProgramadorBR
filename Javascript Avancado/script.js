
function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Marcio", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]

function menosde30(aluno){
    return aluno.idade < 30
}

let alunosComMenosde30 = alunos.filter((menosde30))

console.log(alunosComMenosde30)
