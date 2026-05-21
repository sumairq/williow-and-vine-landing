import type { ComponentPropsWithoutRef } from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("max-w-4xl mx-auto px-4 md:px-container w-full", className)}
      {...props}
    />
  )
}

export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn("py-section", className)}
      {...props}
    />
  )
}

export function Stack({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-stack", className)}
      {...props}
    />
  )
}

export function Inline({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("flex flex-row items-center gap-inline", className)}
      {...props}
    />
  )
}

export function Grid({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter", className)}
      {...props}
    />
  )
}
