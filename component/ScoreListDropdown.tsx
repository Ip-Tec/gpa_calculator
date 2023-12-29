// app/component/ScoreListDropdown.tsx

import React, { useState } from "react";
import Input from "./Input";

const ScoreListDropdown = () => {
  const [selectedYear, setSelectedYear] = useState<number>(1);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="absolute top-14 right-3 bg-white p-4 border rounded-lg shadow-lg">
      <div className="flex items-center">
        <span className="mr-2">Year:</span>
        <select
          className="border rounded p-1"
          value={selectedYear}
          onChange={(e) => handleYearChange(parseInt(e.target.value))}
        >
          {/* Render the years in the dropdown */}
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <Input showYearInput={false} year={selectedYear} />
    </div>
  );
};

export default ScoreListDropdown;
