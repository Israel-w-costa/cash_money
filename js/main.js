const formulario = document.querySelector ("#formulario")
const nome = document.querySelector ("#nome")
const preco = document.querySelector ("#preco")

formulario.addEventListener ("submit", (evento) => {
    evento.preventDefault ()
    
    criarElemento (evento.target.nome.value,evento.target.preco.value)
    
    nome.value = ""
    preco.value= ""

}
)

function criarElemento (nome, preco) {
    const lista = document.querySelector ("#lista")
    
    const novoItem = document.createElement ('li')
    novoItem.classList.add ("lista__item")
    const novoEfeito =document.createElement ('strong')
    novoEfeito.classList.add ("lista__forte")
    novoEfeito.innerHTML = preco

    novoItem.innerHTML += nome
    novoItem.appendChild (novoEfeito)

    lista.appendChild (novoItem)
    
    console.log (novoItem)
    


}

console.log (nome, preco)