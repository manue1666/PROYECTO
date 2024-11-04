import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";

export const AnswerQuestionnaire = ({ questionnaire }) => {
  const [respuestas, setRespuestas] = useState(
    questionnaire.preguntas.map(() => "")
  );

  const onChangeAnswer = (index, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = value;
    setRespuestas(nuevasRespuestas);
  };

   //Edwin desmadre


  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>{questionnaire.titulo}</Card.Title>
          <Card.Text>{questionnaire.descripcion}</Card.Text>
          <hr />
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
            </Form.Group>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};
