module.exports = {
    precoComDesconto(Produto) {
        if(Produto.desconto) {
            return  Produto.preco * (1 - Produto.desconto)
        } else {
            return Produto.preco
        }
    }
}