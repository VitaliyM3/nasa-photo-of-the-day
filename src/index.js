import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


function MainApp() {

    return (

        <div>
            <App></App>
        </div>
    )
};


ReactDOM.render(<MainApp />, document.getElementById("root"));
