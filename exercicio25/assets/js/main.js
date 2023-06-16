// fetch('pessoas.json')
//   .then(resposta => {return resposta.json()})
//   .then(json => carregaElementosNaPagina(json))

axios('pessoas.json').then(resposta => carregaElementosNaPagina(resposta.data))


function carregaElementosNaPagina(json){
  const table = document.createElement('table')
  for(let pessoa of json){
    const tr = document.createElement('tr')
    
    let td = document.createElement('td')
    td.innerHTML = `  <STRONG>Nome:</STRONG> ${pessoa.nome} `
    tr.appendChild(td)
    
    let td1 = document.createElement('td')
    td1.innerHTML = ` <STRONG>Idade:</STRONG> ${pessoa.idade}  `
    tr.appendChild(td1)
    
    let td2 = document.createElement('td')
    td2.innerHTML = ` <STRONG>Salário:</STRONG> ${pessoa.salario}`
    tr.appendChild(td2)
  
    table.appendChild(tr)
  }
  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}