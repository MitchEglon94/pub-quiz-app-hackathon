import React from "react";

import "../styles/styles.css";

import Inputs from "../components/Inputs";

function WelcomePage() {
  return (
    <>
      <div className="page">
        <h1>Lets Get Quizzical!</h1>

        <h2>
          Welcome to the worlds 13th best Pub Quiz voted by citizens of Vatican
          City!
        </h2>
        <Inputs />
      </div>
    </>
  );
}

export default WelcomePage;
