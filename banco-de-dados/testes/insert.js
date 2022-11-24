const db = require('../config/db')

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil) //Outra forma de fazer no exemplo abaixo
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy()) //não precisa na API pq o knex controla os pools de conexão

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

db.insert(perfilSU).into('perfis')
     .then(res => console.log(res)) //Pode ser encadeado varias promisses assim
     .catch(err => console.log(err.sqlMessage))
     .finally(() => db.destroy()) //não precisa na API pq o knex controla os pools de conexão