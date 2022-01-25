import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";
import { Home } from "./Home";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
