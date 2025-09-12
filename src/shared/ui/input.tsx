import * as React from "react"
import { cn } from "@/shared/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[#ACBBCB] placeholder:text-[#ACBBCB] selection:bg-primary selection:text-[#ACBBCB] dark:bg-input/30 flex h-9 w-full min-w-0 rounded-xl bg-transparent px-3 py-5 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // New button-like styles
        "bg-[#E6E8EB] text-gray-800 focus:ring-2 focus:ring-blue-500 cursor-pointer",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }