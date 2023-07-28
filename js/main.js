const formulario = document.querySelector ("#formulario")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (element) => {
    criarElemento (element)
    
});

formulario.addEventListener ("submit", (evento) => {
    evento.preventDefault ()
    const nome = evento.target.elements["nome"]
    const preco =evento.target.elements ["preco"]
    const itemAtual = {
        "nome": nome.value,
        "preco": preco.value,
    }

    criarElemento (itemAtual)

    itens.push (itemAtual)
    
    localStorage.setItem ("itens",JSON.stringify (itens))

    nome.value = ""
    preco.value= ""

}
)

function criarElemento (item) {
    const lista = document.querySelector ("#lista")
    
    const novoItem = document.createElement ('li')
    novoItem.classList.add ("lista__item")
    const novoEfeito =document.createElement ('strong')
    novoEfeito.classList.add ("lista__forte")
    novoEfeito.dataset = item.id
    novoEfeito.innerHTML = "R$ " + item.preco

    novoItem.innerHTML += item.nome
    novoItem.appendChild (novoEfeito)
    novoItem.appendChild (botaoDeleta(item.id))

    lista.appendChild (novoItem)
    

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
    itens.splice ( itens.find (elemento => elemento.id ),1)    
    localStorage.setItem ("itens",JSON.stringify (itens))

    tag.remove ()
    
}