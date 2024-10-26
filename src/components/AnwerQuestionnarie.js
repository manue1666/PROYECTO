import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";

export const AnswerQuestionnarie = ({ }) => {

  return (
    <Container>
    {/* <Card>
      <Card.Body>
        <Card.Title>{questionnarie.title}</Card.Title>
        <Card.Text>{questionnarie.description}</Card.Text>
        <hr />
        {questionnarie.questions.map((question) => (
          <Form.Group>
            <Form.Label>{question.title}</Form.Label>
            {(["checkbox", "radio"].includes(question.type) &&
              question.options.map((option) => (
                <Form.Check type={question.type} label={option} />
              ))) ||
              (question.type === "text" && <Form.Control />) ||
              (question.type === "select" && (
                <Form.Select>
                  <option></option>
                  {question.options.map((option) => (
                    <option>{option}</option>
                  ))}
                </Form.Select>
              ))}
          </Form.Group>
        ))}
      </Card.Body>
    </Card> */}
  </Container>

  );
};
