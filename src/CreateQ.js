import React, { useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';
import { AnswerQuestionnarie } from "./components/AnwerQuestionnarie";

const CreateQ = () => {
  const [cuestionarios, setCuestionarios] = useState({
    titulo: "",
    descripcion: "",
    preguntas: [{
      pregunta: "",
      tipo: "",
      opciones: [""],
      obligatoria: false
    }]
  });

  
  

  const handleTitleChange = (e) => {
    setCuestionarios({
      ...cuestionarios,
      titulo: e.target.value
    });
  };

  const handleDescChange = (e) => {
    setCuestionarios({
      ...cuestionarios,
      descripcion: e.target.value
    });
  };

  const handlePreguntaChange = (qIndex, e) => {
    const newQuestions = [...cuestionarios.preguntas];
    newQuestions[qIndex].pregunta = e.target.value;
    setCuestionarios({
      ...cuestionarios,
      preguntas: newQuestions
    });
  };

  const handleObligatoriaChange = (qIndex, e) => {
    const newQuestions = [...cuestionarios.preguntas];
    newQuestions[qIndex].obligatoria = e.target.checked;
    setCuestionarios({
      ...cuestionarios,
      preguntas: newQuestions
    });
  };

  const addOption = (index) => {
    const newOption = [...cuestionarios.preguntas];
    newOption[index].opciones.push("");
    setCuestionarios({
      ...cuestionarios,
      preguntas: newOption
    });
  };

  const removeOption = (qIndex, oIndex) => {
    const newOption = [...cuestionarios.preguntas];
    newOption[qIndex].opciones = newOption[qIndex].opciones.filter((_, index) => index !== oIndex);
    setCuestionarios({
      ...cuestionarios,
      preguntas: newOption
    });
  };

  const handleOptionChange = (qIndex, oIndex, e) => {
    const newOption = [...cuestionarios.preguntas];
    newOption[qIndex].opciones[oIndex] = e.target.value;
    setCuestionarios({
      ...cuestionarios,
      preguntas: newOption
    });
  };

  const addQuestion = () => {
    setCuestionarios({
      ...cuestionarios,
      preguntas: [
        ...cuestionarios.preguntas, 
        { pregunta: "", tipo: "", opciones: [""], obligatoria: false }
      ]
    });
  };

  const removeQuestion = (qIndex) => {
    const newQuestions = cuestionarios.preguntas.filter((_, index) => index !== qIndex);
    setCuestionarios({
      ...cuestionarios,
      preguntas: newQuestions
    });
  };

  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="text-center">{cuestionarios.titulo}</Card.Title>
          <Form.Control 
            placeholder="Ingresa título del cuestionario" 
            name="title" 
            value={cuestionarios.titulo} 
            onChange={handleTitleChange} 
          />
          <Card.Text className="mt-3 text-center"></Card.Text>
          <Form.Control 
            placeholder="Ingresa descripción del cuestionario" 
            name="desc" 
            value={cuestionarios.descripcion} 
            onChange={handleDescChange} 
          />
        </Card.Body>
      </Card>

      {cuestionarios.preguntas.map((pregunta, qIndex) => (
        <Card className="mt-4" key={qIndex}>
          <Card.Body>
            <Form.Control 
              placeholder="Ingresa tu pregunta" 
              name="pregunta" 
              value={pregunta.pregunta} 
              onChange={(e) => handlePreguntaChange(qIndex, e)}
            />
            <Form.Select 
              style={{ width: "25%" }} 
              className="mt-3" 
              aria-label="Default select example"
              value={pregunta.tipo} 
              onChange={(e) => {
                const newQuestions = [...cuestionarios.preguntas];
                newQuestions[qIndex].tipo = e.target.value;
                setCuestionarios({ ...cuestionarios, preguntas: newQuestions });
              }}
            >
              <option value="">Selecciona el tipo de pregunta</option>
              <option value="checkbox">Opción múltiple</option>
              <option value="radio">Casillas de verificación</option>
              <option value="text">Pregunta Abierta</option>
              <option value="select">Selecciona</option>
            </Form.Select>
            
            <div className="mt-3">
              {pregunta.opciones.map((opcion, oIndex) => (
                <div key={oIndex} className="d-flex align-items-center">
                  <Form.Control 
                    style={{ width: "70%" }} 
                    placeholder={`Opción ${oIndex + 1}`} 
                    value={opcion}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                  />
                  <Button variant="danger" className="mt-2" onClick={() => removeOption(qIndex, oIndex)}>Eliminar</Button>
                </div>
              ))}
              <Button className="mt-2" onClick={() => addOption(qIndex)}>Agregar Opción</Button>
            </div>

            <Form.Check 
              className="align-items-end mt-2"
              type="switch"
              id="custom-switch"
              label="Pregunta Obligatoria"
              checked={pregunta.obligatoria}
              onChange={(e) => handleObligatoriaChange(qIndex, e)}
            />
            <Button variant="danger" className="mt-4" onClick={() => removeQuestion(qIndex)}>Eliminar Pregunta</Button>
          </Card.Body>
        </Card>
      ))}

      <Button className="mt-4" onClick={addQuestion}>Nueva Pregunta</Button>

      <h3 className="mt-4">Vista Previa</h3>
      <AnswerQuestionnarie questionnarie={cuestionarios} />
    </Container>
    
  );
};

export default CreateQ;
