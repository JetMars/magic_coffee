import { Route, Routes } from "react-router-dom";

import { WelcomePage, AuthorizationPage } from "./pages";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;
