let id = 1
function proximoId() {
    return id++
}

const usuarios = [{
    id: proximoId(),
    nome: 'João',
    email: 'joao@mail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: proximoId(),
    nome: 'Rafael',
    email: 'rafa@mail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: proximoId(),
    nome: 'Daniela',
    email: 'dani@mail.com',
    idade: 23,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

const perfis = [{
    id: 1,
    nome: 'Comum'
}, {
    id: 2,
    nome: 'Administrador'
}]

module.exports = { usuarios, perfis, proximoId }