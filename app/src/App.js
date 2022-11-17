import logo from "./logo.svg";
import "./App.css";

import appService from "./services/app.service";

function App() {
  const handleGraphQl = () => {
    appService
      .getGraphql({
        query: "{\n  test\n}",
        variables: null,
        operationName: null,
      })
      .then((res) => {
        console.log("app => ", res);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={() => handleGraphQl()}>Click Here</p>
      </header>
    </div>
  );
}

export default App;
