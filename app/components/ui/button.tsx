import type { ComponentPropsWithoutRef } from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

type ButtonVariant = "primary" | "outline" | "ghost" | "gold"
type ButtonSize    = "sm" | "md" | "lg"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-ink)] text-[var(--color-paper)]",
    "hover:bg-[#2E2D2A]",
    "active:bg-[#111]",
  ].join(" "),
  outline: [
    "border border-[var(--color-ink)] text-[var(--color-ink)] bg-transparent",
    "hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
  ].join(" "),
  ghost: [
    "text-[var(--color-ink)] bg-transparent",
    "hover:bg-[var(--color-paper-alt)]",
  ].join(" "),
  gold: [
    "bg-[var(--color-gold)] text-[var(--color-paper)]",
    "hover:bg-[var(--color-gold-light)]",
  ].join(" "),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-sm px-8 py-4",
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-sans font-semibold uppercase tracking-widest transition-colors cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
}
