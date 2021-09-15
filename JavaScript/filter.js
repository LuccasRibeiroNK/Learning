

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]

function temMenosde30(aluno) {
    return aluno.idade < 30;
}

let alunosComMenosde30 = alunos.filter(temMenosde30);

console.log(alunosComMenosde30)


// for (let aluno of alunos) {
//     if (aluno.idade < 30) {
//         console.log(aluno.nome)
//     }
// }