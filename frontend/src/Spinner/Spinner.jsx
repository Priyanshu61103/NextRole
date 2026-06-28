import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-120 flex justify-center items-center">
      <div className="h-10 w-10 rounded-full border-4 border-b-blue-600 border-blue-400 animate-spin"></div>
    </div>
  );
};

export default Spinner;
