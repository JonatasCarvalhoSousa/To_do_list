import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput("");
  }

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <h1> Lista</h1>

      <ul>
        {tarefas.map((tarefas) => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
      <strong>Você tem {totalTarefas} tarefas no total!</strong>
      <br></br>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adiconar
      </button>
    </div>
  );
}

export default App;
