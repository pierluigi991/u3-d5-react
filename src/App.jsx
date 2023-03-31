import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
// import { Row, Container } from "react-bootstrap";
// import { Component } from "react";

function App() {
  return (
    <main className="App">
      <MyNav />;
      <Home />
      <MyFooter />
    </main>
  );
}

export default App;
