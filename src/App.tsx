import React, { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";
import { useIdentityMutation } from "./hooks/useIdentityMutation";

function App() {
  const { mutate } = useIdentityMutation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const resetFields = () => {
    setEmail("");
    setFirstName("");
    setSecondName("");
  };

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondName,
    });
    resetFields();
  };

  return (
    <div className="container">
      <form>
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
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
        <Button colorScheme="green" width="100%" mt="4" onClick={submit}>
          Enviar
        </Button>
      </form>
      <div className="product-details">
        <h2>Assinatura mensal</h2>
        <Spacer height="4" />
        <p>Você ira pagar</p>
        <Spacer height="4" />
        <span>R$ 250,00</span>
        <Spacer height="4" />
        <p className="paragraph">
          Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
}

export default App;
