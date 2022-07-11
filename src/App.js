import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Topics from "./Topics";


//SETTING THE GRAPHQL CONNECTION
const axiosGitHubGraphQL = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

//GRAPHQL QUERY
const GET_TOPICS = (search) => `
  query MyQuery {
    topic(name: "${search}") {
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
        relatedTopics(first: 10) {
          id
          name
          stargazerCount
        }
      }
    }
  }`;

const App = () => {

  //INITIALIZING STATE FOR THE QUERY RESPONSE AND THE SEARCH INPUT
  const [query, setQuery] = useState({
                                        search: '',
                                        error: '',
                                      });
  const [searchText, setSearchText] = useState('');

  //CREATING THE HANDLING FUNCTIONS FOR HTML ELEMENTS
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getTopics(searchText);
    setQuery({ search: "" });
  };

  //GETTING INFORMATION FROM GITHUB API
  const getTopics = (search) => {
    axiosGitHubGraphQL
      .post("", { query: GET_TOPICS(search) })
      .then((res) =>
        setQuery(() => ({
          relatedTopics: res.data.data.topic.relatedTopics,
          name: res.data.data.topic.name,
        }))
      )
      .catch((err) => ({ error: "No results yet" }));
  };

  //DESTRUCTURING THE RESOPONSE
  const { name, relatedTopics } = query;

  return (
    <div>
      <h1>Graph QL</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Search a topic of your interest</label>
        <input
          id="url"
          type="text"
          value={searchText}
          onChange={handleChange}
          style={{ width: "300px" }}
        />
        <button type="submit" disabled={!searchText}>Search</button>
      </form>

      <hr />

      <h4>Topic: {name}</h4>      
      {/* MAPPING AND GENERATING N NUMBER OF TOPICS COMPONENTS */}
      {relatedTopics &&
        relatedTopics.map((el) => (
          <Topics
            relatedTopics={el.relatedTopics}
            name={el.name}
            key={el.id}
            id={el.id}
            stargazerCount={el.stargazerCount}
          />
        ))}
    </div>
  );
};

export default App;
