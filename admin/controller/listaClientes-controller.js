import { clienteService } from "../service/cliente-service.js"

// CRIA UM TEMPLATE 
const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
      const conteudo = `
  <td class="td" data-td>${nome}</td>
  <td>${email}</td>
  <td>
      <ul class="tabela__botoes-controle">
          <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
  </td>
  `
  
  linhaNovoCliente.innerHTML = conteudo
  return linhaNovoCliente
  
  }
  

  // PERCORRE O DOM PARA BUSCAR CORPO
  const tabela = document.querySelector ('[data-tabela]')



  // PEGANDO DADOS DA API E FAZENDO UM LOOP INTERANDO SOB OS DADOS E MOSTRANDO NA TELA
 clienteService.listaClientes()
 .then( data =>  {  
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
   
   
   })})