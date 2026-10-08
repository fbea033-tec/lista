// Valores para a lista
const valores = ["Um", "Dois", "Três", "Quatro", "Cinco", 
                 "Seis", "Sete", "Oito", "Nove", "Dez"];

// Seleciona a lista
const lista = document.getElementById("minhaLista");

// Adiciona os itens dinamicamente
valores.forEach((valor, index) => {
  let item = document.createElement("li");
  item.textContent = valor;

  // Alterna cor de fundo
  if (index % 2 === 0) {
    item.style.backgroundColor = "#e0f7fa"; // azul claro
  } else {
    item.style.backgroundColor = "#ffe0b2"; // laranja claro
  }

  lista.appendChild(item);
});
