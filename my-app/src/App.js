import React from "react";
import './index.css';
import Navbar from "./Components/Navbar";
import Avator from "./Components/Avator";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
function App() {
  return (
    <div className="">
      <Navbar />
      <Avator />
      <Projects/>
      <ContactUs/>
    </div>
  );
}

export default App;