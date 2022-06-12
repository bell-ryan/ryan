import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
import { Stack } from "@mui/material";
import * as Icons from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const sj = require("./smokinjoe.PNG");
  const [hasEntered, setHasEntered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const displayHome = !isLoading && !hasEntered;
  const onEnter = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setHasEntered(true);
    }, 2000);
  };
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "25%",
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {isLoading && <CircularProgress />}
      {hasEntered && <img src={sj} alt="smokinjoe" height={400} />}
      {displayHome && (
        <>
          Ryan Bell
          <br />
          <br />
          <Button variant="contained" onClick={() => onEnter()}>
            Enter
          </Button>
        </>
      )}
    </div>
  );
}

export default App;
