import { useState } from "react";
import "./App.css";
import Count from "./components/Count.jsx";
import Form from "./components/Form.jsx";
import Users from "./components/Users.jsx";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div className="app-main">
      <div className="left">
        <p className="left-heading">Exploring Redux Toolkit Query</p>
        <p className="left-desc">
          Redux Toolkit Query (RTK Query) is a powerful data-fetching and
          caching tool built into Redux Toolkit. It simplifies data management
          by automatically handling caching, synchronization, and reducing
          boilerplate for API interactions.
        </p>
      </div>
      <div className="right">
        <Form user={user} setUser={setUser} />
        <p className="right-arrow">{"----->"}</p>
        <Users user={user} setUser={setUser} />
      </div>
    </div>
  );
};

export default App;
