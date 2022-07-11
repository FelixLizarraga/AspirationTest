import React from "react";

const SubTopics = ({ name, stargazerCount }) => {
  return (
    <div>
      <>&nbsp;&nbsp;&nbsp;&nbsp;</> {name}
      <br />
      <>&nbsp;&nbsp;&nbsp;&nbsp;</>Stargazed: {stargazerCount}
      <br />
      <br />
    </div>
  );
};

export default SubTopics;
