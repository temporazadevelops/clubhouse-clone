import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AllowNofication from "./pages/AllowNofication";
import CodeConfirm from "./pages/CodeConfirm";
import Home from "./pages/Home";
import AppLayout from "./pages/Layouts/AppLayout";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlanLayout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/invite" element={<PhoneConfirmation />} />
            <Route path="/code-confirm" element={<CodeConfirm />} />
            <Route path="/allow-notification" element={<AllowNofication />} />
          </Routes>
        </PlanLayout>
        <Routes>
          <Route
            path="/home"
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
