import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="14" r="14" fill="currentColor"/>
      <path d="M 50,58
               C 74,40 74,20 50,20
               C 26,20 26,40 50,58
               C 80,78 80,114 50,114
               C 20,114 20,78 50,58 Z" 
            stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
