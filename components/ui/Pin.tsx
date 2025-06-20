"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      role="link"
      className={cn(
        "relative z-50 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.03]",
        containerClassName
      )}
    >
      <div
        className={cn(
          "p-4 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] hover:border-white/[0.2] transition duration-500 overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
