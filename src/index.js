import React, { useState } from "react";
import ReactDOM from "react-dom";
import Person from "./Person";
import "./styles.css";

function App() {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "harshad", age: 21 },
      { name: "harsh", age: 22 },
      { name: "haresh", age: 23 }
    ]
  });

  const [otherState, useOtherState] = useState("some other state");

  const switchNameHandler = () => {
    //console.log('called')
    //    this.state.persons[1].name = "Maddy";
    setPersonState({
      persons: [
        { name: "harshad", age: 211 },
        { name: "harsh", age: 221 },
        { name: "haresh", age: 231 }
      ]
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "5px solid cyan",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>Hello Folks</h1>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        cliick={switchNameHandler}
      >
        Welcome
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        Welcome
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      >
        Welcome
      </Person>
      <button style={style} onClick={switchNameHandler}>
        Switch Name
      </button>
      <p>{otherState}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
