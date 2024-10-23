import { Card, CardBody, Container } from "react-bootstrap";
import { useState } from "react";

export const AnwerQuestionnaire = (props) => {
  const [questionnaire, setQuestionnaire] = useState(props.questionnaire);
  return (
    <Container>
      <Card>
        <CardBody>
          <Card.Title>{questionnaire.title}</Card.Title>
          <Card.Text>{questionnaire.description}</Card.Text>
          <hr />
          {questionnaire.questions.map((question) => (
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
        </CardBody>
      </Card>
    </Container>
  );
};
