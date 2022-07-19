import React from "react";

export default function Badge({text}) {
  return (
    <div className="text-md cursor-pointer font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
      {text}
    </div>
  );
}
