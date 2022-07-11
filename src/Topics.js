import "./App.css";
import React, { useState } from "react";
import SubTopics from "./SubTopics";

const Topics = ({ relatedTopics, name, stargazerCount }) => {

 //INITIALIZING THE NON VISIBLE STATE TO HANDLE SHOWING THE SUBTOPICS
  const [visible, isVisible] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    isVisible((visible) => !visible);
  };

  
  return (
    <div>
      <span data-testid="span">{name}</span>
      <br />
      Stargazed: {stargazerCount}
      <button onClick={handleClick} data-testid='btn-change'>
        {/* CHANGING THE NAME OF THE BUTTON BASED ON THE STATE         */}
        {visible ? "Close" : "Open"} relationed topics
      </button>
      {/* SHOWING THE SUBTOPICS BASED ON THE STATE */}
      {visible ? (
        relatedTopics &&
        relatedTopics.map((el) => (
          <SubTopics
            relatedTopics={el.relatedTopics}
            key={el.id}
            id={el.id}
            name={el.name}
            stargazerCount={el.stargazerCount}
          />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Topics;
