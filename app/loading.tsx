"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Loading() {
  const [progress, setProgress] = useState(10);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100 && intervalRef.current)
      clearInterval(intervalRef.current);
    console.log(progress);
  }, [progress]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-5xl w-auto h-auto p-4">
        <div>
          <Image
            src="/assets/logo.jpg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              maxWidth: "560px",
              maxHeight: "560px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        {/* This loader is facing problem as progress bar is not getting updated as the js thread is getting blocked, need to solve this bug */}
        <div className="flex justify-center w-full p-2">
          <div className="max-w-4xl min-w-3xs lg:w-4xl md:w-3xl w-auto bg-[#413235] drop-shadow-[4px_3px_8.6px_-1px_rgba(0,0,0,0.75)] rounded-full overflow-hidden">
            <div
              className="h-3 bg-[#FFBE00] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
              aria-label="Loading progress"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
