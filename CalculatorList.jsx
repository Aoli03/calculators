// src/CalculatorList.jsx

import React from "react";
import { calculators } from "./calculators";

export default function CalculatorList() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <ul className="space-y-4">
        {calculators.map((calc) => (
          <li key={calc.path} className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <a
              href={`/${calc.path}/`}
              className="text-blue-600 text-lg font-semibold hover:underline"
            >
              {calc.name}
            </a>
            <p className="text-sm text-gray-600">{calc.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
