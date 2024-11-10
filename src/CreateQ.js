import React, { useState } from "react";
import { Card, Container, Form, Button, InputGroup } from 'react-bootstrap';
import { AnswerQuestionnaire } from "./components/AnwerQuestionnaire";
import { Barra } from "./Navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


const CreateQ = () => {

  const[createQ,setCreateQ]= useState({
    titulo:"",
    descripcion:"",
    preguntas:[
      {
        pregunta:"",
        tipo:"",
        opciones:[""]
      },
    ],
    obligatoria:false
  });

  
  const onChangeTitle =(e)=>{
    e.preventDefault();
    const data = { ...createQ};
    data.titulo= e.target.value;
    setCreateQ(data)
  };

  const onChangeDesc = (e)=>{
    e.preventDefault();
    const data = { ...createQ};
    data.descripcion= e.target.value;
    setCreateQ(data)
  }

  const onChangePregunta = (e,pIndex) => {
    e.preventDefault()
    const data = {...createQ};
    data.preguntas[pIndex].pregunta= e.target.value;
    setCreateQ(data);
  }

  const onChangeTipo = (e,pIndex)=> {
    const data = {...createQ}
    data.preguntas[pIndex].tipo= e.target.value;
    setCreateQ(data);
  }

  const nuevaPregunta = ()=>{
    const data = {...createQ};
    const nuevaPregunta = {
      pregunta:"",
      tipo: "",
      opciones:[""]
    }
    data.preguntas.push(nuevaPregunta);
    setCreateQ(data)
  }

  const nuevaOpcion= (pIndex)=>{
    const data = {...createQ};
    data.preguntas[pIndex].opciones.push("")
    setCreateQ(data)
  }


  const onChangeOption= (e,pIndex,oIndex)=>{
    e.preventDefault();
    const data = {...createQ};
    data.preguntas[pIndex].opciones[oIndex] = e.target.value;
    setCreateQ(data)
  }

  const borrarPregunta=(pIndex)=>{
    const data = {...createQ};
    const borrarQ = data.preguntas.filter((_, index) => index !== pIndex);
    data.preguntas = borrarQ
    setCreateQ(data)
  }
  const borrarOpcion= (pIndex,oIndex)=>{
    const data = {...createQ};
    const borrarO= data.preguntas[pIndex].opciones.filter((_, index)=> index !== oIndex)
    data.preguntas[pIndex].opciones= borrarO;
    setCreateQ(data)
  }
  ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: ["opciones"],
  datasets: [
    {
      label: '# of Votes',
      data: [{ onChangeOption}],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <><Barra /><Container>
      <Card className="mt-4 mb-4">
        <Card.Body>
          <Card.Title className="text-center">{createQ.titulo}</Card.Title>
          <Form.Control
            placeholder="Ingresa título del cuestionario"
            name="titulo"
            value={createQ.titulo}
            onChange={onChangeTitle} />
          <Card.Text className="mt-3 text-center"></Card.Text>
          <Form.Control
            placeholder="Ingresa descripción del cuestionario"
            name="desc"
            value={createQ.descripcion}
            onChange={onChangeDesc} />
        </Card.Body>
      </Card>

      {createQ.preguntas.map((pregunta, pIndex) => (
        <Card className="mt-4" key={pIndex}>
          <Card.Body>
            <Form.Control
              placeholder="Ingresa tu pregunta"
              name="pregunta"
              value={pregunta.pregunta}
              onChange={(e) => onChangePregunta(e, pIndex)} />
            <Form.Select
              style={{ width: "25%" }}
              className="mt-3"
              aria-label="Default select example"
              value={pregunta.tipo}
              onChange={(e) => onChangeTipo(e, pIndex)}
            >
              <option value="">Tipo de pregunta </option>
              <option value="radio">Opción múltiple</option>
              <option value="checkbox">Casillas de verificación</option>
              <option value="text">Pregunta Abierta</option>
              <option value="select">Selecciona</option>
            </Form.Select>
            <h5 className="mt-3"><i class="bi bi-ui-radios"></i> Opciones</h5>


            <div className="mt-3">
              {pregunta.opciones.map((opcion, oIndex) => (
                <div key={oIndex} className="d-flex align-items-center">
                  <InputGroup className="mt-2">
                    <Form.Control
                      style={{ width: "50%" }}
                      placeholder={`Opción ${oIndex + 1}`}
                      value={opcion}
                      onChange={(e) => onChangeOption(e, pIndex, oIndex)}
                      aria-describedby="basic-addon2" />
                    <Button variant="outline-danger" id="button-addon2" className="mt-2" onClick={() => borrarOpcion(pIndex, oIndex)}><i class="bi bi-trash"></i> Eliminar </Button>
                  </InputGroup>
                </div>
              ))}

              <Button variant="outline-info" onClick={() => nuevaOpcion(pIndex)} className="mt-2"><i class="bi bi-plus-square"></i> Agregar</Button>
            </div>

            <Form.Check
              className="align-items-end mt-2"
              type="switch"
              id="custom-switch"
              label="Pregunta Obligatoria" />

            <Button variant="outline-danger" className="mt-2" onClick={() => borrarPregunta(pIndex)}><i class="bi bi-trash"></i> Eliminar Pregunta</Button>
          </Card.Body>
        </Card>
      ))}

      <div className="d-grid gap-2">
        <Button className="mt-4 " onClick={nuevaPregunta} variant="outline-success"> <i class="bi bi-plus-square"></i> Nueva Pregunta</Button>
      </div>


      <h3 className="mt-4">Vista Previa</h3>
      <AnswerQuestionnaire questionnaire={createQ} />

      <div>
        <Button href="./Grafica">Grafica tu questionario</Button>
        <Doughnut data={data} />;
      </div>


    </Container></>
    
  );
};

export default CreateQ;
