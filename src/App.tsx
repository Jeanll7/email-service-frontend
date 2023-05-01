import React, { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";
import { Button, Spacer, Square } from "@chakra-ui/react";

function App() {
  const [email, setEmail] = useState("");
  const [fistName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  return (
    <div className="container">
      <form>
        <div className="name-form-container">
          <PrimaryInput
            value={fistName}
            onChange={(event) => setFirstName(event.target.value)}
            name="firstName"
            label="Nome"
            placeholder="João"
          />

          <PrimaryInput
            value={secondName}
            onChange={(event) => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Formento"
          />
        </div>
        <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          label="Digite seu e-mail"
          placeholder="fulano@email.com"
        />
        <Button colorScheme="green" width="100%" mt="4">
          Enviar
        </Button>
      </form>
      <div className="product-details">
        <p>Você ira pagar</p>
        <span>R$ 250,00</span>
      </div>
    </div>
  );
}

export default App;
