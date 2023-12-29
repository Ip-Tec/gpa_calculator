
 // component/Row.tsx

import React from "react";
import { CourseProps } from "@/type";

const Row: React.FC<{ course: CourseProps }> = ({ course }) => {
  const {
    CourseIndex,
    CourseCode,
    CourseScore,
    CourseUnit,
    CourseGrade,
    Point,
    WGP,
  } = course;

  return (
    <>
      <tr
        className={`font-mono border-b h-10 my-2 bg-gray-800 border-lime-500 ${CourseGrade}`}
        key={CourseIndex}
      >
        <td
          className="px-2 py-6 uppercase text-sm"
          style={{ textTransform: "uppercase" }}
        >
          {CourseCode}
        </td>
        <td className="px-4 py-6">{CourseScore}</td>
        <td className="px-4 py-6">{CourseUnit}</td>
        <td className="px-4 py-6">{CourseGrade}</td>
        <td className="px-4 py-6">{Point}</td>
        <td className="px-4 py-6">{WGP}</td>
      </tr>
    </>
  );
};

export default Row;