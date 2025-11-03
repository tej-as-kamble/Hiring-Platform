import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { makeServer } from "./mirage/server.js";

if (process.env.NODE_ENV === "production") {
  makeServer({ environment: "production" });
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
