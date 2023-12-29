// util/NewCourseYear.ts

import { NewCourse, Year, Course } from "@/type";
import {
  CGPA,
  GPA,
  GradePoint,
  ScorePoint,
  ScoreWGP,
  TotalUnit,
} from "./Calculator";
import { calculateAndPrintResults } from "./score";

export default function NewCourseYear(
  newCourse: NewCourse,
  courseYear: string | undefined,
  courseCode: string,
  courseScore: string,
  courseUnit: string
) {
  // Parse stored data from sessionStorage
  const data = JSON.parse(sessionStorage.getItem("data") ?? "{}") as NewCourse;
  // console.log(data);

  // Ensure that the 'years' array is present in the stored data
  if (!data.years) {
    data.years = [];
  }

  // Create a new course entry
  const newCourseEntry: Course = {
    code: courseCode,
    score: parseInt(courseScore, 10),
    unit: parseInt(courseUnit, 10),
    Point: ScorePoint(parseInt(courseScore, 10)),
    Grade: GradePoint(parseInt(courseScore, 10)),
    WGP: ScoreWGP(
      parseInt(courseScore, 10),
      parseInt(courseUnit, 10)
    ) as number,
  };

  // Create a new year entry
  const newYear: Year = {
    year: parseInt(courseYear?.toString() || "0", 10),
    courses: [newCourseEntry],
    // totalUnit: parseInt(courseUnit, 10),
    // totalWGP: parseInt(courseScore, 10),
  };

  // Push the new year to the 'years' array
  data.years.push(newYear);
  // console.log(newYear);
  // console.log("TotalUnit", TotalUnit(newYear));

  // Update the stored data in sessionStorage
  sessionStorage.setItem("data", JSON.stringify(data));
  const ddd = JSON.parse(JSON.stringify(sessionStorage.getItem("data")));
  // console.log(ddd);
  calculateAndPrintResults(JSON.parse(ddd));
}
