"use client";

import { cn } from "@/libs/cn";

const Button = ({ action, black, text, icon, width }) => {
  return (
    <button
      onClick={action}
      className={cn(
        `rounded-lg bg-white px-3 py-2 text-xs font-medium text-black shadow-sm ${width}`,
        {
          "bg-second_color text-white": black,
        },
      )}
    >
      <p className="flex flex-1 flex-shrink-0 flex-grow items-center justify-center gap-1 font-medium tracking-wider">
        {icon} {text}
      </p>
    </button>
  );
};

export default Button;
