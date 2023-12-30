// app/page.tsx
"use client";

import { useState } from "react";
import Head from "@/component/Head";
import Dialog from "@/component/Dialog";

export default function Home() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "NewCourseYear"
  );

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowDialog(true);
  };
  const clearSession = async () => {
    if (typeof window !== "undefined") {
      await sessionStorage.clear();
      const ok = confirm("Do you want to delete all data");
      if (ok) await window.location.reload();
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen max-w-sm md:max-w-md m-auto "
        style={{ marginTop: "7rem" }}
      >
        <main className="container m-auto">
          <div className="container py-2 mb-40 z-10 rounded-md max-w-sm bg-opacity-50 text-black backdrop-blur-0">
            <Head />
          </div>
        </main>

        <footer className="fixed bottom-0 z-10 h-auto flex justify-evenly items-center container px-3 md:px-6 w-auto max-w-sm overflow-hidden md:max-w-xl m-auto right-0 transform left-0 bg-gradient-to-b bg-opacity-20  backdrop-blur-2xl text-sm rounded text-center bg-slate-600">
          <p
            className="text-black hover:text-gray-100 p-2 mx-2 w-full border-green-800 from-inherit rounded cursor-pointer border-b-2 hover:bg-green-500 zoom-sm"
            onClick={() => handleOptionClick("AddCourse")}
          >
            Add Course
          </p>
          <p
            className="text-black hover:text-gray-100 p-2 mx-2 w-full border-sky-800 from-inherit rounded cursor-pointer border-b-2 hover:bg-sky-500 zoom-sm"
            onClick={() => handleOptionClick("NewCourseYear")}
          >
            New Level
          </p>
          <p
            className="text-black p-2 w-full border-red-500 from-inherit rounded cursor-pointer border-b-2  hover:bg-red-500 hover:text-gray-300 zoom-sm"
            onClick={() => clearSession()}
          >
            Delect All
          </p>
        </footer>

        {/* Dialog Box */}
        <>
          {showDialog && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center sm:mx-2 md:mx-0.5">
              <Dialog
                DialogState={showDialog}
                onClose={handleDialogClose}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          )}
        </>
      </div>
    </>
  );
}
