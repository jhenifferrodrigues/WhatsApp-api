
async function pesquisarContatos() {
    const url=`https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/11987876567`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function criarContato(link){
    const contatos=document.getElementById('contatos')
    const NovoCard=document.createElement('div')
    NovoCard.classList.add('contato')

    const NovoPerfil=document.createElement('img')
    NovoPerfil.scr=link.profile
    NovoCard.appendChild(NovoPerfil)

    const NovaInfo=document.createElement('div')
    NovaInfo.classList.add('info')
    NovoCard.appendChild(NovaInfo)

    const NovoNome=document.createElement('p')
    NovoNome.classList.add('name')
    NovoNome.textContent=`${link.name}`
    NovaInfo.appendChild(NovoNome)

    const NovoNumero=document.createElement('p')
    NovoNumero.textContent=`${link.description}`
    NovaInfo.appendChild(NovoNumero)
    
    NovoCard.appendChild(NovaInfo)
    contatos.appendChild(NovoCard)

    NovoCard.addEventListener('click', async function(){
        
        await preencherConversa(link.name)
    })
}

async function preencherContatos() {
    const contato= await pesquisarContatos()
    const contatos=document.getElementById('contatos')
    contato.dados_contato.forEach(criarContato)
}

