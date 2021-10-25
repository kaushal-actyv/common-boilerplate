import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import { SampleForm } from "./containers/SampleForm";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <div>
          <button class="button is-rounded">Sample Form</button>
          <button class="button is-danger is-rounded">Welcome Page</button>
        </div>
      </header>
    </div>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/sample-form">Sample Form</Link>
    //         </li>
    //         <li>
    //           <Link to="/welcome-page">Welcome Page</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/sample-form">
    //         <SampleForm />
    //       </Route>
    //       <Route path="/welcome-page">
    //         <SampleForm />
    //       </Route>
    //       <Route path="/">
    //         <App />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;
