const { usuarios, perfis } = require('../data/db')

function indiceUsuario(filtro) {
    if(!filtro) return -1
    const { id, email } = filtro
    if(id) {
        return usuarios
            .findIndex(u => u.id === id)
    } else if(email) {
        return usuarios
            .findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {
    ola() {
        return 'Hello World'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Dunha Mcgregor',
            email: 'dunha@mail.com',
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Dell',
            preco: 5500.10,
            desconto: 0.5
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
                .map(n => parseInt(Math.random() * 60 + 1))
                .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios
                .filter(u => u.id === id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const perf = perfis
                .filter(p => p.id === id)
        return perf ? perf[0] : null
    }
}