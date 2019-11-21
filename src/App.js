import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nasa from "./nasa";

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
      <p>
        <Nasa textContent={ data }></Nasa>
      </p>
    </div>
  );
}

export default App;
