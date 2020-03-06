let botao = document.getElementById('botao');
function registrar() {
  // pegar informações
  let tarefa = document.querySelector("#entrada");
  let textoInterno = tarefa.value;
  // Cria o checkbox
  let caixa = document.createElement("input");
  caixa.setAttribute("type", "checkbox");
  // Cria o paragrafo
  let pNovo = document.createElement("p");
  pNovo.innerHTML = textoInterno;
  // cria o td do input.
  let tdNovo1 = document.createElement("td");
  tdNovo1.setAttribute("class", "tdBox");
  // recebe o checkbox
  tdNovo1.appendChild(caixa);
  // cria o td da tarefa
  let tdNovo2 = document.createElement("td");
  tdNovo2.setAttribute("class", "tdTexto");
  // recebe o texto
  tdNovo2.appendChild(pNovo);
  // Cria a tr nova
  let trNova = document.createElement('tr');
  trNova.appendChild(tdNovo1);
  trNova.appendChild(tdNovo2);
  // Adiciona a tr no tbody
  let tabelaCorpo = document.getElementById("tabelaCorpo");
  tabelaCorpo.appendChild(trNova);
  console.log(textoInterno);
}