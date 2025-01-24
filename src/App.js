import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="https://auth-server-4e5f.onrender.com/login" element={<Login />} />
        <Route path="https://auth-server-4e5f.onrender.com/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
