// app/page.tsx
"use client";

import { useState } from "react";
import Head from "@/component/Head";
import Dialog from "@/component/Dialog";

export default function Home() {
  const [showDialog, setShowDialog] = useState<boolean>(true);
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
  const clearSession = () => {
    sessionStorage.clear();
  };

  return (
    <div className="relative min-h-screen max-w-sm md:max-w-md m-auto">
      <main className="container m-auto mt-[2.5rem]">
        {/* <div className="z-30 text-center font-mono text-sm">
          <p className="fixed left-0 top-0 flex sm:ml-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by creating a Course list &nbsp;
          </p>
        </div> */}
        <div className="container py-2 mb-40 mt-2 z-10 rounded-md max-w-sm bg-opacity-50 text-black backdrop-blur-0">
            <Head />
        </div>
      </main>

      <footer className="fixed bottom-0 w-full z-10 h-auto flex justify-evenly items-center container px-3 md:px-6 max-w-sm overflow-hidden md:max-w-xl m-auto right-0 left-0 bg-gradient-to-b bg-sky-600 bg-opacity-20 p-3 backdrop-blur-2xl text-sm">
        <p
          className="border bg-gradient-to-b p-2 backdrop-blur-2xl border-neutral-800 bg-sky-800 from-inherit rounded-md cursor-pointer hover:border-b hover:bg-sky-500 hover:border-sky-500"
          onClick={() => handleOptionClick("AddCourse")}
        >
          Add Course list
        </p>
        <p
          className="border bg-gradient-to-b p-2 mx-2 backdrop-blur-2xl border-neutral-800 bg-sky-800 from-inherit rounded-md cursor-pointer hover:border-b hover:bg-sky-500 hover:border-sky-500"
          onClick={() => handleOptionClick("NewCourseYear")}
        >
          New Course Year
        </p>
        <p
          className="border bg-gradient-to-b p-3 backdrop-blur-2xl border-neutral-800 bg-red-800 from-inherit rounded-md cursor-pointer hover:border-b hover:bg-red-500 hover:border-red-500"
          onClick={() => clearSession}
        >
          Delect All Data
        </p>
      </footer>

      {/* Dialog Box */}
      <>
        {showDialog && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
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
  );
}
