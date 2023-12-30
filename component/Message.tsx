import { MessageProps } from "@/type";
import React from "react";

export const Message: React.FC<MessageProps> = ({ msg, props }) => {
  function handleYes(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    return;
  }

  function handleNo(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    return;
  }

  return (
    <>
      <div className="bg-white bg-opacity-85 p-8 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4 text-black m-2"></h2>
        <div className="mb-4 m-2">{msg}</div>

        <div className="flex justify-end rounded-md m-2">
          <button
            className="px-4 py-2 w-1/2 bg-blue-500 hover:bg-blue-900 text-white rounded-md"
            onClick={handleYes}
          >
            Yes
          </button>
          <button
            className="ml-2 px-4 py-2 w-1/2 bg-red-400 hover:bg-red-800 text-gray-100 rounded-md"
            onClick={handleNo}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};
