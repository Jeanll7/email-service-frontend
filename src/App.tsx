import React, { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";

function App() {
  const [email, setEmail] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  return (
    <div className="container">
      <PrimaryInput
        value={email}
        onChange={handleChange}
        name="email"
        label="Digite seu e-mail"
      />
    </div>
  );
}

export default App;
