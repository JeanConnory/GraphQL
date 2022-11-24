const { perfis } = require('../data/db')

module.exports = {
    salario(Usuario) {
        return Usuario.salario_real
    },
    perfil(usuario) {
        const perf = perfis
                .filter(p => p.id === usuario.perfil_id)
        return perf ? perf[0] : null
    }
}