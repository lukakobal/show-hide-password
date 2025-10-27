import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <h1>🔐 Show / Hide Password</h1>
      <input
        type={show ? "text" : "password"}
        placeholder="Write password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={toggleShow}>
        {show ? "Hide password" : "Show password"}
      </button>
      <p className="output">Password: {show ? password : "••••••"}</p>
    </div>
  );
}
