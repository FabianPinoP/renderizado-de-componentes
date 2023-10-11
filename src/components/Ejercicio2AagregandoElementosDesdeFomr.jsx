import { useState } from "react";

const Ejercicio2AagregandoElementosDesdeFomr = () => {
  const initTask = ["tarea1", "tarea2", "tarea3"];
  const [nameTask, setNameTask] = useState("");

  const [tasks, setTasks] = useState(initTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, nameTask]);
  };

  return (
    <>
      <h2>Formulario</h2>

      <form onSubmit={handleSubmit}>
        <label>TASK:</label>
        <input type="text" onChange={(e) => setNameTask(e.target.value)} />
        <button type="submit">enviar</button>
      </form>

      <div>
        {tasks.map((t) => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </>
  );
};

export default Ejercicio2AagregandoElementosDesdeFomr;
