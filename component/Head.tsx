// component/Head.tsx

import Row from "./Row";
import { Key } from "react";
import React, { useEffect, useState } from "react";
import { AboutMe } from "./AboutMe";

export default function Head() {
  const [jsonData, setJsonData] = useState({ years: [] });

  useEffect(() => {
    // Load data from session on the initial render
    const storedData = sessionStorage.getItem("data");
    const parsedData = JSON.parse(storedData || "{}");
    setJsonData(parsedData);
  
    // Listen for changes in the session and update the component
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "data" && event.newValue !== null) {
        const updatedData = JSON.parse(event.newValue);
        setJsonData(updatedData);
      }
    };
  
    // Add event listener only if window is defined (running in the browser)
    if (typeof window !== 'undefined') {
      window.addEventListener("storage", handleStorageChange);
    }
  
    // Cleanup the event listener on component unmount
    return () => {
      // Remove event listener only if window is defined
      if (typeof window !== 'undefined') {
        window.removeEventListener("storage", handleStorageChange);
      }
    };
  }); // Empty dependency array means this effect runs once on mount
  
  if (!jsonData.years || jsonData.years.length === 0) {
    return (
      <div className="flex mx-auto mt-20 px-6 text-2xl">
        <AboutMe />
      </div>
    );
  }

  return (
    <>
      {jsonData.years.map(
        (
          year: {
            CGPA: number | undefined;
            GPA: number | undefined;
            totalUnit: number | undefined;
            totalWGP: number | undefined;
            year: string | number | null | undefined;
            courses: any[];
          },
          index: Key | null | undefined
        ) => {
          return (
            <div
              className="w-full md:w-1/2 lg:w-96 py-2 px-4 pl-0 my-3 text-2xl bg-slate-300 rounded-md"
              key={index}
              style={{ marginBottom: "1rem" }}
            >
              <p className="font-bold w-full">Year/level: {year.year}</p>
              <table>
                <thead>
                  <tr className="w-full">
                    <th>Course Code</th>
                    <th>Course Score</th>
                    <th>Course Unit</th>
                    <th>Course Grade</th>
                    <th>Course Point</th>
                    <th>Course WGP</th>
                  </tr>
                </thead>
                <tbody>
                  {year.courses.map(
                    (
                      course: {
                        code: any;
                        score: any;
                        unit: any;
                        Grade: any;
                        Point: any;
                        WGP: any;
                      },
                      courseIndex: number | undefined
                    ) => (
                      <Row
                        key={courseIndex}
                        course={{
                          CourseIndex: courseIndex,
                          CourseCode: course.code,
                          CourseScore: course.score,
                          CourseUnit: course.unit,
                          CourseGrade: course.Grade,
                          Point: course.Point,
                          WGP: course.WGP,
                        }}
                      />
                    )
                  )}
                </tbody>
              </table>

              <div className="flex justify-evenly">
                <div>Total Unit: {year.totalUnit}</div>
                <div>Total WGP: {year.totalWGP}</div>
              </div>
              <div className="mt-2 flex max-w-screen-sm justify-evenly bg-black">
                <div className="justify-start">CGPA: {year.CGPA}</div>
                <div className=" justify-end">GPA: {year.GPA}</div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}
