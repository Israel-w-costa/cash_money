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
    novoEfeito.innerHTML = "R$ " + item.preco

    novoItem.innerHTML += item.nome
    novoItem.appendChild (novoEfeito)

    lista.appendChild (novoItem)
    

}
