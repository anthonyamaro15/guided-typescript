import React from "react";
import { TextField } from "./TextField";

// Reac.FC tells react is typescript
const App: React.FC = () => {
  // pass the type of the parameter
  const test = (bob: string) => {
    return bob;
  };

  return (
    <div className="App">
      <header className="App-header">
        <TextField
          text="hello"
          ok={true}
          i={1}
          person={{ firstName: "hello", lastNmae: "mars" }}
          fn={() => test("hello")}
        />
      </header>
    </div>
  );
};

export default App;
