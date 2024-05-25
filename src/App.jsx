import "./App.css";
import FormInput from "./components/FormInput";
import Success from "./components/Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormInput />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;