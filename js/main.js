const formulario = document.querySelector ("#formulario")
const itens = JSON.parse(localStorage.getItem("itens"))  || []

itens.forEach( (element) => {
    criarElemento (element)
    
});

formulario.addEventListener ("submit", (evento) => {
    evento.preventDefault ()
    const nome = evento.target.elements["nome"]
    const preco =evento.target.elements ["preco"]
    const quantidade = evento.target.elements ["quantidade"]
    const existe = itens.find (elemento => elemento.nome === nome.value)
    const caixaDialogo = document.querySelector ("#dialogo")
    const reescrever = document.querySelector ("#reescrever")
    const adicionar = document.querySelector ("#adicionar")

    const itemAtual = {
        "nome": nome.value,
        "preco": preco.value,
        "quantidade":quantidade.value
    }

    if (existe) {
       itemAtual = existe.id
       atualizarElementos (itemAtual)
       const index =  [itens.findIndex (elemento => elemento.id === existe.id)] 
       itens [index] = itemAtual
    } else {
        itemAtual.id = itens [itens.length -1] ? itens [itens.length -1] + 1 : 0 

        criarElemento (itemAtual)
        itens.push (itemAtual)
    }

    
    localStorage.setItem ("itens",JSON.stringify (itens))

    nome.value = ""
    preco.value= ""
    quantidade.value = ""
    

}
)

function criarElemento (item) {
    const lista = document.querySelector ("#lista")
    
    const novoItem = document.createElement ('li')
    novoItem.classList.add ("lista__item")
    const novoEfeito =document.createElement ('strong')
    novoEfeito.classList.add ("lista__forte")
    novoEfeito.dataset.id = item.id
    novoEfeito.innerHTML = "R$ " + item.preco
    novoQuantidade = document.createElement ('span')
    novoQuantidade.classList.add ('lista__quantidade')
    novoQuantidade.innerHTML +=  item.quantidade
    novoItem.appendChild (novoQuantidade)
    novoItem.innerHTML += item.nome
    
    novoItem.appendChild (novoEfeito)
    novoItem.appendChild (botaoDeleta(item.id))

    lista.appendChild (novoItem)
    

}

function atualizarElementos (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function calculaPreco (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.preco
}

function botaoDeleta (id) {
    const deleta = document.createElement ("button")
    deleta.innerText = "X"

    deleta.addEventListener ("click", function (tag) {
    deleteBotao (this.parentNode)
        

    })

    return deleta
} 

function deleteBotao (tag, id) {
    itens.splice ( itens.findIndex (elemento => elemento.id ),1)    
    localStorage.setItem ("itens",JSON.stringify (itens))

    tag.remove ()
    
}