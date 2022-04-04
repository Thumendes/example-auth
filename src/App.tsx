import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContextsProviders from "./context/base";
import DashPage from "./pages/Dash";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <ContextsProviders>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashPage />} />
        </Routes>
      </ContextsProviders>
    </BrowserRouter>
  );
}

export default App;
