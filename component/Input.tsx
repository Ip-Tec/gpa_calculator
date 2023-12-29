// app/component/Input.tsx

import React, { useState, useEffect } from "react";

enum Grade {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

const calculateGrade = (numericScore: number): Grade | "" => {
  if (numericScore >= 0 && numericScore < 45) return Grade.F;
  else if (numericScore >= 45 && numericScore < 50) return Grade.D;
  else if (numericScore >= 50 && numericScore < 60) return Grade.C;
  else if (numericScore >= 60 && numericScore < 70) return Grade.B;
  else if (numericScore >= 70 && numericScore <= 100) return Grade.A;
  else return "";
};

interface InputProps {
  showYearInput: boolean;
  year: number;
}

const Input: React.FC<InputProps> = ({ showYearInput, year }) => {
  const [years, setYears] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [unit, setUnit] = useState<number>(0);
  const [grade, setGrade] = useState<Grade | "">("");
  const [point, setPoint] = useState<number>(0);
  const [wgp, setWGP] = useState<number | undefined>(0);
  const [cumulativeWGP, setCumulativeWGP] = useState<number>(0);
  const [totalUnit, setTotalUnit] = useState<number>(0);
  const [totalGPA, setTotalGPA] = useState<number>(0);

  const [action, setAction] = useState<"addYear" | "addCourse">("addCourse");

  const yearsList = Array.from({ length: years }, (_, index) => index + 1);

  const calculateGradePointWGP = () => {
    const numericScore = parseFloat(score.toString());
    const numericUnit = parseFloat(unit.toString());

    if (isNaN(numericScore) || isNaN(numericUnit)) {
      setGrade("");
      setPoint(0);
      setWGP(0);
      return;
    }

    setGrade(calculateGrade(numericScore));

    const calculatedWGP = numericUnit * point;
    setWGP(calculatedWGP !== undefined ? +calculatedWGP.toFixed(2) : 0);
  };

  const calculateTotalGPA = () => {
    const gpa = cumulativeWGP / totalUnit;
    setTotalGPA(isNaN(gpa) ? 0 : +gpa.toFixed(2));
  };

  useEffect(() => {
    calculateGradePointWGP();
  }, [score, unit]);

  useEffect(() => {
    calculateTotalGPA();
  }, [cumulativeWGP, totalUnit]);

  const Gpa = () => {
    return (
      <p>
        Total GPA: {totalGPA} / Total Units: {totalUnit}
      </p>
    );
  };

  const Cgpa = () => {
    return (
      <p>
        CGPA: {totalGPA} / {years}: {totalGPA / years}
      </p>
    );
  };

  const handleAddYear = () => {
    setYears((prevYears) => prevYears + 1);
    setAction("addCourse");
  };

  const handleAddCourse = () => {
    // Perform any additional logic for adding a course
    setAction("addCourse");
  };

  return (
    <>
      <div className="text-sm flex justify-around items-center overflow-hidden">
        {/* <span className="absolute before:absolute before:h-[6rem] before:w-[6rem] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[6rem] after:w-[6rem] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#040405] after:dark:opacity-40 before:lg:h-[6rem] z-[-1]"></span> */}
        <div className="flex">
          <div className="relative mx-1 flex flex-col w-auto ">
            <div className="text-left">Course Score</div>
            <input
              type="number"
              className="py-2 px-3 w-3 rounded-md text-black"
              value={score}
              onChange={(e) => setScore(parseFloat(e.target.value))}
            />
          </div>

          <div className="relative mx-1 flex flex-col place-items-center ">
            <div className="text-left">Course Unit</div>
            <input
              type="number"
              className="py-2 px-3 w-32 rounded-md text-black"
              value={unit}
              onChange={(e) => setUnit(parseFloat(e.target.value))}
            />
          </div>
          <div className="relative mx-1 flex flex-col">
            <div className="text-left">Course Grade</div>
            <p>{grade}</p>
          </div>
          <div className="relative mx-1 flex flex-col">
            <div className="text-left">Course Point</div>
            <p>{point}</p>
          </div>
          <div className="relative mx-1 flex flex-col ">
            <div className="text-left">Course WGP</div>
            <p>{wgp}</p>
          </div>
        </div>
      </div>
      <Gpa />
      <Cgpa />
    </>
  );
};

export default Input;
