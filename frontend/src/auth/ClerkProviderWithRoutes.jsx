import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function ClerkProviderWithRoutes({ children }) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>{children}</BrowserRouter>
    </ClerkProvider>
  );
}

// Different ways to write this:
// // Method 2: Using props object
// function ClerkProviderWithRoutes(props) {
//     return <div>{props.children}</div>
// }

// // Method 3: Destructuring inside function
// function ClerkProviderWithRoutes(props) {
//     const {children} = props;
//     return <div>{children}</div>
// }
