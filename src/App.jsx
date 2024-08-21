import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/header" element={<Header />} />
    //   </Routes>
    // </Router>
    <Homepage/>
  );
};

export default App;
