import { NewCourse, Course, Year } from "@/type";
import { GradePoint, ScorePoint, ScoreWGP } from "./Calculator";

export async function AddCourse(
  courseYear: string | undefined,
  courseCode: string,
  courseScore: string,
  courseUnit: string
) {
  // Get the existing data from the session
  const getDatas = JSON.parse(
    sessionStorage.getItem("data") || "{}"
  ) as NewCourse;

  // If there's no existing data or no years, initialize newCourse
  if (!getDatas || getDatas.years.length === 0) {
    const newCourse: NewCourse = {
      years: [
        {
          year: parseInt(courseYear || "1", 10),
          courses: [
            {
              code: courseCode,
              score: parseInt(courseScore, 10),
              unit: parseInt(courseUnit, 10),
              Point: ScorePoint(parseInt(courseScore, 10)),
              Grade: GradePoint(parseInt(courseScore, 10)),
              WGP: ScoreWGP(
                parseInt(courseScore, 10),
                parseInt(courseUnit, 10)
              ) as number,
            },
          ],
          totalUnit: parseInt(courseUnit, 10),
          totalWGP: ScoreWGP(
            parseInt(courseScore, 10),
            parseInt(courseUnit, 10)
          ),
        },
      ],
    };

    // Save the newCourse to the session
    sessionStorage.setItem("data", JSON.stringify(newCourse));

    return newCourse;
  }

  // If there are existing years, get the last year
  const lastYear = getDatas.years[getDatas.years.length - 1];

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

  // Add the new course to the last year
  lastYear.courses = lastYear.courses || [];
  lastYear.courses.push(newCourseEntry);

  // Update the totalUnit, totalWGP, GPA, and CGPA in the last year
  lastYear.totalUnit = lastYear.courses.reduce(
    (total, course) => total + (course.unit || 0),
    0
  );

  const wgp = lastYear.courses.reduce(
    (total, course) => total + ((course.WGP as number) || 0),
    0
  );
  // console.log(wgp);

  lastYear.totalWGP = wgp as number;

  let gpa = lastYear.totalWGP / lastYear.totalUnit;
  lastYear.GPA = gpa.toFixed(3);

  let cgpa =
    getDatas.years.reduce((total, year) => total + Number(year.GPA || 0), 0) /
    getDatas.years.length;
  lastYear.CGPA = cgpa.toFixed(3);

  // console.log(lastYear.GPA);
  // console.log(lastYear.CGPA);
  // console.log(getDatas.years.length);

  // Save the modified data back to the session
  sessionStorage.setItem("data", JSON.stringify(getDatas));
  // calculateAndPrintResults(getDatas.years);
  return getDatas;
}

// [
//   {
//       "year": 100,
//       "courses": [
//           {
//               "code": "chm 101",
//               "score": 45,
//               "unit": 3,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 6
//           },
//           {
//               "code": "csc 101",
//               "score": 50,
//               "unit": 2,
//               "Point": 3,
//               "Grade": "C",
//               "WGP": 6
//           },
//           {
//               "code": "geo 101",
//               "score": 60,
//               "unit": 2,
//               "Point": 4,
//               "Grade": "B",
//               "WGP": 8
//           },
//           {
//               "code": "gst 101",
//               "score": 45,
//               "unit": 4,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 8
//           },
//           {
//               "code": "gst 102",
//               "score": 45,
//               "unit": 2,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 4
//           },
//           {
//               "code": "mth 101",
//               "score": 56,
//               "unit": 3,
//               "Point": 3,
//               "Grade": "C",
//               "WGP": 9
//           },
//           {
//               "code": "phy 101",
//               "score": 45,
//               "unit": 3,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 6
//           },
//           {
//               "code": "phy 102",
//               "score": 45,
//               "unit": 3,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 6
//           },
//           {
//               "code": "sta",
//               "score": 45,
//               "unit": 3,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 6
//           },
//           {
//               "code": "chm 102",
//               "score": 60,
//               "unit": 2,
//               "Point": 4,
//               "Grade": "B",
//               "WGP": 8
//           },
//           {
//               "code": "chd 112",
//               "score": 45,
//               "unit": 3,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 6
//           },
//           {
//               "code": "gst 111",
//               "score": 46,
//               "unit": 2,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 4
//           },
//           {
//               "code": "gst 112",
//               "score": 54,
//               "unit": 2,
//               "Point": 3,
//               "Grade": "C",
//               "WGP": 6
//           },
//           {
//               "code": "mth 111",
//               "score": 61,
//               "unit": 3,
//               "Point": 4,
//               "Grade": "B",
//               "WGP": 12
//           },
//           {
//               "code": "mth 112",
//               "score": 45,
//               "unit": 3,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 6
//           },
//           {
//               "code": "phy 103",
//               "score": 50,
//               "unit": 2,
//               "Point": 3,
//               "Grade": "C",
//               "WGP": 6
//           },
//           {
//               "code": "phy 111",
//               "score": 19,
//               "unit": 2,
//               "Point": 0,
//               "Grade": "F",
//               "WGP": 0
//           },
//           {
//               "code": "phy 112",
//               "score": 45,
//               "unit": 2,
//               "Point": 2,
//               "Grade": "D",
//               "WGP": 4
//           }
//       ],
//       "totalUnit": 46,
//       "totalWGP": 111,
//       "GPA": 2.4130434782608696,
//       "CGPA": 4.826086956521739
//   }
// ]
