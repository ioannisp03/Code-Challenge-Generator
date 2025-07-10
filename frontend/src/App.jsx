// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route>
          
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
