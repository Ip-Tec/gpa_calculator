// component/Head.tsx
"use client";

import Row from "./Row";
import { Key } from "react";
import React, { useEffect, useState } from "react";
import { AboutMe } from "./AboutMe";
import Link from "next/link";
import { EditIcon } from "@/icon/EditIcon";
import { DeleteIcon } from "@/icon/DeleteIcon";
import { Message } from "./Message";

export default function Head() {
  const [jsonData, setJsonData] = useState({ years: [] });

  const storedData = () => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("data") as string;
    }
  };

  useEffect(() => {
    // Load data from session on the initial render
    let dd = storedData();
    const parsedData = JSON.parse(dd || "{}");
    setJsonData(parsedData);

    // Listen for changes in the session and update the component
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "data" && event.newValue !== null) {
        const updatedData = JSON.parse(event.newValue);
        setJsonData(updatedData);
      }
    };

    // Add event listener only if window is defined (running in the browser)
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange);
    }

    // Cleanup the event listener on component unmount
    return () => {
      // Remove event listener only if window is defined
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorageChange);
      }
    };
  }, [storedData()]); // Empty dependency array means this effect runs once on mount

  if (!jsonData.years || jsonData.years.length === 0) {
    return (
      <>
        <div
          className="mx-auto mt-20 px-6 p-[1em]"
          style={{ marginBottom: "1rem" }}
        >
          <div className="bg-white rounded-lg shadow-md shadow-neutral-500 text-2xl p-4">
            <h3 className="mb-4 font-black">How to Get Started</h3>

            <p className="mb-2">
              1. Click on <strong>New Level</strong> to start a new level.{" "}
              <span>e.g 100, 200 or 300...</span>
            </p>

            <p className="mb-2">
              2. Use <strong>Add Course</strong> to add a course. e.g PHY 101
            </p>
          </div>
        </div>
        <AboutMe />
      </>
    );
  }

  function deleteOne(params: number, level: string | null | undefined) {
    console.log(params);

    <Message msg={`Do You Want to Delet ${level} level`} />;
    const ok = confirm(`Do You Want to Delet ${level} level`);
    let sd = sessionStorage.getItem("data");
    // Still working on it

    // console.log(ok);
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
          index: number
        ) => {
          return (
            <>
              {/* <div className="w-full h-3em overflow-hidden flex justify-between text-sm">
                <Link
                  href={`edit/${index + 1}`}
                  className="w-20 text-black text-center bg-lime-60 p-2 border-2 bg-emerald-300 rounded flex h-2 zoom-xs justify-between"
                  style={{ height: "3rem", width: "7rem" }}
                >
                  <EditIcon width={"1.4rem"} height={"1.4rem"} /> Edit{" "}
                  {year.year}
                </Link>
                <button
                  className="w-20 text-black text-center bg-lime-60 p-2 border-2 bg-red-300 rounded flex h-2 zoom-xs justify-between"
                  style={{ height: "3rem", width: "7rem" }}
                  onClick={() => deleteOne(index + 1, year.year)}
                >
                  <DeleteIcon width={"1.4rem"} height={"1.4rem"} /> Delete{" "}
                  {year.year}
                </button>
              </div> */}
              <div
                className="w-full md:w-1/2 lg:w-96 py-2 px-4 pl-0 my-3 text-2xl bg-gray-400 rounded-md shadow-md"
                key={index}
                style={{ marginBottom: "1rem" }}
              >
                <p className="font-bold w-full">Year/level: {year.year}</p>
                <table style={{ fontSize: "0.8em" }}>
                  <thead>
                    <tr
                      className="w-full font-semibold"
                      style={{ fontWeight: "300" }}
                    >
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

                <div className="justify-evenly" style={{ fontSize: "large" }}>
                  <div className="flex justify-evenly">
                    <div>Total Unit: {year.totalUnit}</div>
                    <div>Total WGP: {year.totalWGP}</div>
                  </div>
                  <div className="mt-2 flex max-w-screen-sm justify-evenly bg-">
                    <div className="justify-start">CGPA: {year.CGPA}</div>
                    <div className=" justify-end">GPA: {year.GPA}</div>
                  </div>

                  {/* <Link href={`edit/${index + 1}`}>
                    <button className="w-20 my-2 text-white rounded-sm mt-2 text-center bg-lime-600 p-2 border-2 hover:text-white hover:border-lime-600 hover:bg-slate-700">
                      Edit level: {year.year}
                    </button>
                  </Link> */}
                </div>
              </div>
            </>
          );
        }
      )}
    </>
  );
}
