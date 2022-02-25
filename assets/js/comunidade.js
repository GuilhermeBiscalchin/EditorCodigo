
const todosOsProjetos = document.querySelector('.js-todos-projetos')
console.log({todosOsProjetos})

new function(){
    mostraProjeto()
}

function mostraProjeto(){
    if(localStorage.length == 0){
        return
    }
    let projetos = []
    for(let i = 0; i < localStorage.length; i++ ){
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    console.log({projetos})
    projetos.forEach(projeto => {
        todosOsProjetos.innerHTML += montaCartao(projeto)
        const codigoHtml = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function montaCartao(projeto){
    let cartao = `
    <a href="index.html" class="projeto-wrapper" data-id="${projeto.id}">
    <section class="conteudo__principal">
        <div class="projeto__borda">
            <code class="projeto__borda--code hljs ${projeto.detalhesDoProjeto.linguagem}"></code>
        </div>
            <div class="projeto--wrapper-title"> 
                <h2 class="projeto__title">${projeto.detalhesDoProjeto.tituloProjeto}</h2>
                <p class="projeto-subtitle">${projeto.detalhesDoProjeto.descricaoProjeto}</p>
            </div>
    </section>
</a>
    `

    return cartao
}