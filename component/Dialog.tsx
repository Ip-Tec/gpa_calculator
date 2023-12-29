"use client";

import { useState } from "react";
import { SetData } from "@/util/store";
import { DialogProps, NewCourse } from "@/type";
import { AddCourse } from "@/util/AddCourse";
import NewCourseYear from "@/util/NewCourseYear";

function Dialog({
  onClose,
  DialogState,
  selectedOption,
  setSelectedOption,
}: DialogProps) {
  const [courseCode, setCourseCode] = useState<string>();
  const [courseScore, setCourseScore] = useState<number | undefined | string>();
  const [courseUnit, setCourseUnit] = useState<number | string>();
  const [courseYear, setCourseYear] = useState<number | string>();

  const newCourse: NewCourse = {
    years: [],
  };

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!courseCode || !courseScore || !courseUnit) {
      console.error("Please fill in all required fields.");
      return;
    }
    if (selectedOption === "AddCourse") {
      // Check if there are any years in the array
      await AddCourse(
        courseYear?.toString(),
        courseCode,
        courseScore?.toString(),
        courseUnit?.toString()
      );
    }

    if (selectedOption === "NewCourseYear") {
      await NewCourseYear(
        newCourse,
        courseYear?.toString(),
        courseCode,
        courseScore?.toString(),
        courseUnit?.toString()
      );
      // await newCourse.years.push(newYear);
      onClose();
    }

    // Reset input values
    setCourseCode("");
    setCourseScore("");
    setCourseUnit("");
    setCourseYear("");

    // Log the new course object
    // console.log(newCourse.years);

    // sessionStorage.setItem("data", JSON.stringify(newCourse));
    SetData(newCourse);
  };

  return (
    <div className="bg-white bg-opacity-85 p-8 rounded-md w-96">
      <h2 className="text-xl font-bold mb-4 text-black m-2">
        {selectedOption === "AddCourse" ? "Add Course" : "New Course Year"}
      </h2>
      {selectedOption === "NewCourseYear" && (
        <div className="mb-4 m-2">
          <label className="block text-sm font-medium text-gray-700">
            Course Year
          </label>
          <input
            type="number"
            className="mt-1 p-2 w-full border border-gray-100 rounded-md text-black"
            value={courseYear}
            onChange={(e) => setCourseYear(e.target.value)}
            style={{ color: "black" }}
          />
        </div>
      )}
      <div className="mb-4 m-2">
        <label className="block text-sm font-medium text-gray-700">
          Course Code
        </label>
        <input
          type="text"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
      </div>
      <div className="mb-4 m-2">
        <label className="block text-sm font-medium text-gray-700">
          Course Score
        </label>
        <input
          type="number"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
          value={courseScore}
          onChange={(e) => setCourseScore(e.target.value)}
        />
      </div>
      <div className="mb-4 m-2">
        <label className="block text-sm font-medium text-gray-700">
          Course Unit
        </label>
        <input
          type="number"
          className="mt-1 p-2 w-full border bg-transparent border-gray-300 rounded-md text-black"
          value={courseUnit}
          onChange={(e) => setCourseUnit(e.target.value)}
        />
      </div>

      <div className="flex justify-end rounded-md m-2">
        <button
          className="px-4 py-2 w-1/2 bg-blue-500 hover:bg-blue-900 text-white rounded-md"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="ml-2 px-4 py-2 w-1/2 bg-red-400 hover:bg-red-800 text-gray-100 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Dialog;
