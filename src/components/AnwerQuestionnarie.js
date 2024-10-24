import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";

export const AnswerQuestionnarie = ({ questionnarie }) => {
  const [answers, setAnswers] = useState(
    questionnarie.preguntas.map(() => "")
  );

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>{questionnarie.titulo}</Card.Title>
          <Card.Text>{questionnarie.descripcion}</Card.Text>
          <hr />
          {questionnarie.preguntas.map((pregunta, qIndex) => (
            <Form.Group key={qIndex}>
              <Form.Label>{pregunta.pregunta}</Form.Label>
              {(["checkbox", "radio"].includes(pregunta.tipo) &&
                pregunta.opciones.map((option, oIndex) => (
                  <Form.Check
                    key={oIndex}
                    type={pregunta.tipo}
                    label={option}
                    checked={answers[qIndex] === option}
                    onChange={() => handleAnswerChange(qIndex, option)}
                  />
                ))) ||
                (pregunta.tipo === "text" && (
                  <Form.Control
                    type="text"
                    value={answers[qIndex]}
                    onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                  />
                )) ||
                (pregunta.tipo === "select" && (
                  <Form.Select
                    value={answers[qIndex]}
                    onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    {pregunta.opciones.map((option, oIndex) => (
                      <option key={oIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                ))}
            </Form.Group>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};
