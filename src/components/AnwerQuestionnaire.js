import React, { useState } from "react";
import { Card, Container, Form, Alert, Button } from "react-bootstrap";

export const AnswerQuestionnaire = ({ questionnaire }) => {
  const [respuestas, setRespuestas] = useState(
    questionnaire.preguntas.map(() => "")
  );

  const [errors, setErrors] = useState({});

  const onChangeAnswer = (index, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = value;
    setRespuestas(nuevasRespuestas);
  };

   //Edwin desmadre
   const validate = () => {
    const newErrors = {};
    
    questionnaire.preguntas.forEach((pregunta, index ) => {
      if (pregunta.obligatoria && !respuestas[index]) {
        newErrors[index] = "Esta pregunta es obligatoria.";
      }
    
    });

   setErrors(newErrors);
   console.log(newErrors);

   return Object.keys(newErrors).length === 0;
  
  };
  const handleSubmit= (e) => {
    e.preventDefault();

    if (validate()) {
      alert("El formulario se envio correctamente")
    }

  };


  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>{questionnaire.titulo}</Card.Title>
          <Card.Text>{questionnaire.descripcion}</Card.Text>
          <hr />
          <Form onSubmit={handleSubmit}>
          {questionnaire.preguntas.map((pregunta, pIndex) => (
            <Form.Group key={pIndex}>
              <Form.Label>{pregunta.pregunta}</Form.Label>
              {pregunta.tipo === "checkbox" || pregunta.tipo === "radio" ? (
                pregunta.opciones.map((opcion, oIndex) => (
                  <Form.Check
                    key={oIndex}
                    type={pregunta.tipo}
                    label={opcion}
                    checked={respuestas[pIndex] === opcion}
                    onChange={() => onChangeAnswer(pIndex, opcion)}
                  />
                ))
              ) : pregunta.tipo === "text" ? (
                <Form.Control
                  type="text"
                  value={respuestas[pIndex]}
                  onChange={(e) => onChangeAnswer(pIndex, e.target.value)}
                />
              ) : pregunta.tipo === "select" ? (
                <Form.Select
                  value={respuestas[pIndex]}
                  onChange={(e) => onChangeAnswer(pIndex, e.target.value)}
                >
                  <option value="">Seleccione una opción</option>
                  {pregunta.opciones.map((opcion, oIndex) => (
                    <option key={oIndex} value={opcion}>
                      {opcion}
                    </option>
                  ))}
                </Form.Select>
              ) : null}
              {errors[pIndex] && (
                <Alert variant="danger" className="mt-3">
                  {errors[pIndex]}
                </Alert>
              )}
            </Form.Group>
          ))}
          <Button type="submit" variant="primary">enviar</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
