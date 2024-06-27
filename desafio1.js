class Tarefa {
  constructor(id, descricao, marcada) {
    this.id = id;
    this.descricao = descricao;
    this.marcada = marcada;
  }
}

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa(lista, descricao) {
  const id = lista.length > 0 ? lista[lista.length - 1].id + 1 : 1;
  const novaTarefa = new Tarefa(id, descricao, false);
  lista.push(novaTarefa);
}

// Função para marcar uma tarefa como concluída
function marcarTarefa(lista, id) {
  const tarefa = lista.find((tarefa) => tarefa.id === id);
  if (tarefa) {
    tarefa.marcada = true;
  } else {
    console.log("Tarefa não encontrada");
  }
}

// Função para desmarcar uma tarefa
function desmarcarTarefa(lista, id) {
  const tarefa = lista.find((tarefa) => tarefa.id === id);
  if (tarefa) {
    tarefa.marcada = false;
  } else {
    console.log("Tarefa não encontrada");
  }
}

// Função para remover uma tarefa da lista
function removerTarefa(lista, id) {
  const index = lista.findIndex((tarefa) => tarefa.id === id);
  if (index !== -1) {
    lista.splice(index, 1);
  } else {
    console.log("Tarefa não encontrada");
  }
}

// Exemplo de uso:
let listaDeTarefas = [];

adicionarTarefa(listaDeTarefas, "Comprar pão");
adicionarTarefa(listaDeTarefas, "Estudar para a prova");

console.log(listaDeTarefas); // Deve exibir as duas tarefas adicionadas

marcarTarefa(listaDeTarefas, 1); // Marca a primeira tarefa como concluída

console.log(listaDeTarefas); // Deve exibir a primeira tarefa marcada como concluída

desmarcarTarefa(listaDeTarefas, 1); // Desmarca a primeira tarefa

console.log(listaDeTarefas); // Deve exibir a primeira tarefa desmarcada

removerTarefa(listaDeTarefas, 2); // Remove a segunda tarefa

console.log(listaDeTarefas); // Deve exibir apenas a primeira tarefa
