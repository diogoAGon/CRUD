import { clienteService } from "../service/cliente-service.js"


const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento) => {
    // esse comando previne enviar sem antes checar o conteudo
evento.preventDefault()
const nome = evento.target.querySelector('[data-nome]').value   
const email = evento.target.querySelector('[data-email]').value

clienteService.criaCliente(nome,email)
.then(() => {
    window.location.href = '../telas/cadastro_concluido.html'
})
})