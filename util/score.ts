interface Course {
  code: string;
  score: number;
  unit: number;
  Point: number;
  Grade: string;
  WGP: number;
}

interface YearData {
  year: number;
  courses: Course[];
  totalUnit?: number;
  totalWGP?: number;
  GPA?: string;
  CGPA?: string;
}

const isYearDataArray = (data: any): data is YearData[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => item && item.year && item.courses)
  );
};

const calculateYearData = (yearData: YearData): void => {
  let totalUnit = 0;
  let totalWGP = 0;

  yearData.courses.forEach((course) => {
    totalUnit += course.unit;
    totalWGP += course.WGP;
  });

  yearData.totalUnit = totalUnit;
  yearData.totalWGP = totalWGP;
  yearData.GPA = (totalWGP / totalUnit).toFixed(4);
};

const calculateCGPA = (yearDataList: YearData[]): string => {
  let totalGPA = 0;

  yearDataList.forEach((yearData) => {
    if (yearData.GPA) {
      totalGPA += parseFloat(yearData.GPA);
    }
  });

  console.log(yearDataList.length);
  console.log(totalGPA);
  
  const cgpa = yearDataList.length / totalGPA;
  return cgpa.toFixed(4);
};

export const calculateAndPrintResults = (
  yearDataList: YearData[] | any
): void => {
  console.log(yearDataList);
  if (!isYearDataArray(yearDataList)) {
    console.log(yearDataList);
    console.error("Invalid yearDataList format");
    return;
  }

  yearDataList.forEach((yearData) => {
    calculateYearData(yearData);
    console.log(
      `Year ${yearData.year} - GPA: ${yearData.GPA}, CGPA: ${yearData.CGPA}`
    );
  });

  const cgpa = calculateCGPA(yearDataList);
  console.log(`Overall CGPA: ${cgpa}`);
};

// const yearDataList = JSON.parse(sessionStorage.getItem("data"));
// calculateAndPrintResults(JSON.parse(yearDataList));
