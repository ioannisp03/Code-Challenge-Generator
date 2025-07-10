import "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet, Link, Navigate } from "react-router-dom";

export function Layout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-content">
          <h1> Code Challenge Generator</h1>
          <nav>
            {/* If we are in one of these: */}
            <SignedIn>
              <Link to="/">Generate Challenge</Link>
              <Link to="/history">History</Link>
              <UserButton />
            </SignedIn>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <SignedOut>
          <Navigate to="/sign-in" replace />{" "}
          {/*Replace means replace in the current window so the tab doesnt get changed*/}
        </SignedOut>
        <SignedIn>
            <Outlet /> {/*Outlet renders child routes */}
        </SignedIn>
      </main>
    </div>
  );
}
