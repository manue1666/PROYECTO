import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Función para manejar el envío del formulario*/
  const handleSubmit = (e) => {
    e.preventDefault();
    /*  Evita que la página se recargue
     */
    /* Simulación de la lógica de inicio de sesión */
    if (email === "pin@example.com" && password === "password") {
      console.log("Inicio de sesión exitoso"); /*  Mensaje de éxito */
    } else {
      console.error("Error: Credenciales incorrectas"); /* Maneja los errores */
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Form.Label>Correo electrónico:</Form.Label>
        <Form.Control
          placeholder="Ingresa un correo electrónico"
          type="email"
          value="email"
          onChange={(e) =>
            setEmail(e.target.value)
          } /* Actualiza el estado del email */
          required
        />
      </div>

      <div className="mt-3">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control
          placeholder="Ingresa tu contraseña"
          type="password"
          value="password"
          onChange={(e) =>
            setPassword(e.target.value)
          } /* Actualiza el estado de la contraseña */
          required
        />
      </div>

      <Button className="mt-3" type="submit">
        Ingresar
      </Button>
    </Form>
  );
};

export default InicioSesion;
