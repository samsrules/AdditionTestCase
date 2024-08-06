import React, { useState } from "react";
import { add } from "./addition.js";
const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    try {
      const result = add(input);
      setResult(result);
      setError("");
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        cols="30"
        placeholder="Enter numbers"
      />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {result !== null && !error && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default App;
