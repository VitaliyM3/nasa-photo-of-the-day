import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nasa from "./nasa";
import Explan from "./explan";
import Title from "./title"


function App() {

  const [data, setData] = useState('')

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=K1FO6tbeJ2xtcjYZwWbaIVQqlQtBWxgKtvtEiQ9g')
    .then(res => setData(res.data));
    console.log("this is the response data", data);
  }, []);

  return (
    <div className="App">
        <Title textContent={ data }></Title>
        <Nasa textContent={ data }></Nasa>
        <Explan textContent={ data }></Explan>
    </div>
  );
}

export default App;
