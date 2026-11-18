import { Home } from "./features/Home/components/Home";
import "./App.css"
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import SignUp from "./features/Auth/SignUp";
import {LogIn} from "./features/Auth/LogIn";
import { Auth } from "./features/Auth/Auth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}>
      {/* <Route path="/auth" element={<Outlet/>}> */}
        <Route path="login" element={<LogIn/>} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
