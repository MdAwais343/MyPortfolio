import React from "react";

function Avator() {
  return (
    <div
      style={{
        background: "#808080", // grey
        width: "100vw",        // full viewport width
        height: "100vh",       // full viewport height
        display: "flex",       // center content
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/ME.jpg"
        alt="Avatar"
        className="rounded-circle img-thumbnail mb-4"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h1 className="h4 fw-bold mb-2">Your Name</h1>
      <p className="lead text-center" style={{ maxWidth: "400px" }}>
        I'm a passionate web developer who loves creating beautiful and
        functional websites using React, Bootstrap, and modern web technologies.
      </p>
    </div>
  );
}

export default Avator;
