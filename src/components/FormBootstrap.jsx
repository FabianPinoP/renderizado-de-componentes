import { useState } from "react";
import { tareasIniciales } from "../tareas.js";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Swal from "sweetalert2";
import "../App.css";

const FormBootstrap = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [descripcionTarea, setDescripcionTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareasIniciales);
  const [error, setError] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (nombreTarea.trim() === "" || descripcionTarea.trim() === "") {
      setError(true);
      return;
    }
    setListaTareas([
      ...listaTareas,
      {
        id: uuidv4(),
        nombre: nombreTarea,
        completada: false,
        descripcion: descripcionTarea,
      },
    ]);
    Swal.fire({
      text: "Tarea agregada con exito",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#3085d6",
    });
    setError(false);
    setNombreTarea("");
    setDescripcionTarea("");
  };

  const completarTarea = (id) => {
    const nuevasTareas = [...listaTareas];
    const index = nuevasTareas.findIndex((task) => task.id === id); //cambiar por id
    nuevasTareas[index].completada = true;
    setListaTareas(nuevasTareas);
  };

  const eliminarTarea = (id) => {
    const listaFiltrada = listaTareas.filter(
      (task) => task.id !== id
    );
    setListaTareas(listaFiltrada);
  };
  return (
    <>
      <Container>
        <div>
          <h1 className="text-center mt-3">Lista de Tareas</h1>
          <Form className="mt-5" onSubmit={enviarFormulario}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={error ? "text-danger" : ""}>
                {error
                  ? "Debes completar todos los campos"
                  : "Ingresa una Tarea"}
              </Form.Label>
              <Form.Control
                type="text"
                name="nombreTarea"
                onChange={(e) => setNombreTarea(e.target.value)}
                value={nombreTarea}
                placeholder="realizar compras"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion de la tarea</Form.Label>
              <Form.Control
                placeholder="comprar pan"
                as="textarea"
                rows={3}
                onChange={(e) => setDescripcionTarea(e.target.value)}
              />
              <Button className="mt-3" type="submit">
                {" "}
                Agregar Tarea{" "}
              </Button>
            </Form.Group>
          </Form>
          <ListGroup className="mt-5">
            {listaTareas.map((tarea) => (
              <ListGroup.Item
                key={tarea.id}
                className={
                  tarea.completada === true
                    ? "d-flex justify-content-between list"
                    : "d-flex justify-content-between"
                }
              >
                <div>
                  <div>Nombre: {tarea.nombre}</div>
                  <div>Descripcion: {tarea.descripcion}</div>
                </div>
                <div className="d-flex gap-3">
                  {tarea.completada === false ? (
                    <div>
                      <Button
                        variant="success"
                        onClick={() => completarTarea(tarea.id)}
                      >
                        {" "}
                        Completar{" "}
                      </Button>
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <Button
                      variant="danger"
                      onClick={() => eliminarTarea(tarea.id)}
                    >
                      {" "}
                      Borrar
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Container>
    </>
  );
};

export default FormBootstrap;
