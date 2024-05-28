import React from "react";

export default function Button({ text, className }) {
  return (
    <div
      className={`flex min-w-14 items-center justify-center overflow-clip rounded-md px-1 py-2 text-center text-[13px] sm:px-4 md:text-xs ${className}`}
    >
      {text}
    </div>
  );
}
