//fazer o highlight funcionar em dinâmico.
const linguagem = document.querySelector('.menu__select')
const areaDoCodigo = document.querySelector('.conteudo__principal-border')
const botao = document.querySelector('.btn--principal')

function aplicaHighlight(){
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="conteudo__principal-code hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de Código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))

}

botao.addEventListener('click', () => {
    aplicaHighlight()
})

//Salvando o projeto na aba comunidade.
const tituloProjeto = document.querySelector('.titulo')
const descricaoProjeto = document.querySelector('.description')


const btnSalvar = document.querySelector('.btn--salvar')
btnSalvar.addEventListener('click', () => {
    //verificação do storage
    if(typeof(Storage) !== 'undefined'){
        console.log("Suporta")
        const projeto = montaProjeto()

        //função para salvar o projeto
        salvarLocalStorage(projeto)
        console.log({projeto})
    }else{
        console.log('Não suporta o localStorage')
    }
})

function montaProjeto(){
    let projeto = {
        'id':atribuiId(),
        'detalhesDoProjeto':{
            'tituloProjeto': tituloProjeto.value,
            'descricaoProjeto': descricaoProjeto.value,
            'linguagem':linguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText
        }
    }
    return projeto
}

function atribuiId(){
    return localStorage.length
}

function salvarLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id,JSON.stringify(objetoJson))
}