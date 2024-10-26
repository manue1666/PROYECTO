import React, { useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';
import { AnswerQuestionnarie } from "./components/AnwerQuestionnarie";


const CreateQ = () => {


  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="text-center"></Card.Title>
          <Form.Control 
            placeholder="Ingresa título del cuestionario" 
            name="title" 

          />
          <Card.Text className="mt-3 text-center"></Card.Text>
          <Form.Control 
            placeholder="Ingresa descripción del cuestionario" 
            name="desc" 

          />
        </Card.Body>
      </Card>


        <Card className="mt-4" >
          <Card.Body>
            <Form.Control 
              placeholder="Ingresa tu pregunta" 
              name="pregunta" 

            />
            <Form.Select 
              style={{ width: "25%" }} 
              className="mt-3" 
              aria-label="Default select example"
            >
              <option value="">Selecciona el tipo de pregunta</option>
              <option value="checkbox">Opción múltiple</option>
              <option value="radio">Casillas de verificación</option>
              <option value="text">Pregunta Abierta</option>
              <option value="select">Selecciona</option>
            </Form.Select>
            
            <div className="mt-3">

                <div  className="d-flex align-items-center">
                  <Form.Control 
                    style={{ width: "70%" }} 


                  />
                  <Button variant="danger" className="mt-2" >Eliminar</Button>
                  <Button variant="danger" className="ms-2" >Eliminar</Button>
                </div>

              <Button >Agregar Opción</Button>
            </div>

            <Form.Check 
              className="align-items-end mt-2"
              type="switch"
              id="custom-switch"
              label="Pregunta Obligatoria"

            />
            <Button variant="danger" className="mt-4" >Eliminar Pregunta</Button>
            <Button variant="danger" className="mt-2" >Eliminar Pregunta</Button>
          </Card.Body>
        </Card>


      <Button className="mt-4" >Nueva Pregunta</Button>

      <h3 className="mt-4">Vista Previa</h3>
      <AnswerQuestionnarie  />
    </Container>
    
  );
};

export default CreateQ;
