// src/App.jsx

import React from "react";
import CalculatorList from "./CalculatorList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-900 text-white py-6 text-center shadow">
        <h1 className="text-2xl font-bold">CKNISS Calculator Hub</h1>
        <p className="text-sm text-gray-300">Useful tools for electrical & electronics work</p>
      </header>
      <CalculatorList />
      <footer className="text-center text-xs text-gray-500 py-4">
        © 2025 Chris K. · <a href="mailto:you@example.com" className="text-blue-500">Contact</a>
      </footer>
    </div>
  );
}

export default App;
