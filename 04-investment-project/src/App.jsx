import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =
    userInput.initialInvestment >= 1 &&
    userInput.annualInvestment >= 1 &&
    userInput.expectedReturn >= 1 &&
    userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">
          Please enter a value greater than 0 for all inputs.
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
