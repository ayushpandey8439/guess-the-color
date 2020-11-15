import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Home.scss";
function Home() {
  const [gameId, setGameId] = useState();
  function enterGame(event) {
    console.log("Entering the game with ID:::" + gameId);
    event.preventDefault();
  }
  function changeGameId(event) {
    console.log(event.target.value);
    setGameId(event.target.value);
  }
  return (
    <div className="home_container">
      <h1 className="main_title">Hues and Colors</h1>
      <Form className="gameID_form" onSubmit={enterGame}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter the Game ID"
            maxLength="5"
            onChange={changeGameId}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Home;
