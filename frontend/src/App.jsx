// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";
import { Layout } from "./layout/Layout.jsx";
import { ChallengeGenerator } from "./challenge/ChallengeGenerator.jsx";
import { HistoryPanel } from "./history/HistoryPanel.jsx";
import { AuthenticationPage } from "./auth/AuthenticationPage";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up/*" element={<AuthenticationPage />} />
        <Route element={<Layout />}>
          {/* These routes will render inside the layout component */}
          <Route path="/" element={<ChallengeGenerator />} />
          <Route path="/history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
