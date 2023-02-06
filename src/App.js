
import Navbar from "./Components/Navbar";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./Components/Home";
import Students from "./Components/Students";
import ContactUs from "./Components/ContactUs";
import AddNewStudent from "./Components/AddNewStudent";
import { useState } from "react";
import Data from "./Components/DataContext";
import EditStudent from "./Components/EditStudent"

function App() {
  let [state, setState] = useState([{
        name: 'Ainan',
        age: '23',
        course: 'Full Stack',
        batch:'EA18'
      }]
  )
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <Data.Provider value={{ entries: state, updateFunction: setState }}>
            <Home />
          </Data.Provider>} />

        <Route path="students" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <Students />
        </Data.Provider>} />

        <Route path="contact" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <ContactUs />
        </Data.Provider>} />

        <Route path="/addnewstudent" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <AddNewStudent />
        </Data.Provider>} />
        
        <Route path="/editstudent" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <EditStudent />
        </Data.Provider>} />
      </Routes>
    </div>
  );
}

export default App;



















