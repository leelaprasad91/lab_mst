import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const characterCount = text.length;
  const isExceeded = characterCount > 100;
  const isEmpty = text.trim().length === 0;

  const handlePost = () => {
    alert("Post submitted!");
    setText("");
  };

  return (
    <div className="container">
      <h2>Create a Post</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post..."
      />

      <div className="counter">
        {characterCount} / 100
      </div>

      {isExceeded && (
        <p className="error">Limit exceeded</p>
      )}

      <button
        onClick={handlePost}
        disabled={isEmpty || isExceeded}
      >
        Post
      </button>
    </div>
  );
}

export default App;