import React from "react";
import "./style.scss";

function Lista() {
  const tarefas = [
    {
      descricao: "React",
      tempo: "02:00:00",
    },
    {
      descricao: "Javascript",
      tempo: "01:00:00",
    },
    {
      descricao: "VueJS",
      tempo: "01:30:00",
    },
  ];
  return (
    <aside className="listaTarefas">
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className="item">
            <h3>{tarefa.descricao}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
