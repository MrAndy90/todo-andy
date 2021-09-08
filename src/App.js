import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState(["abc", "def"]);
  const [input, setInput] = useState("");

  // When the app loads, we need to listen to the database & fetch new todos as they get added/removed
  useEffect(() => {
    // this code here..... fires when app app.js loads
    db.collection("todos").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      // setTodos(snapshot.docs.map((doc) => doc.data().todo))
    });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // Stop the Refresh
    console.log("👽", "Im working!!");
    setTodos([...todos, input]);
    setInput(""); // Clears up the input after clicking add todo button
  };

  return (
    <div className="App">
      <h1>Andy's TO DO List! 🚀</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
