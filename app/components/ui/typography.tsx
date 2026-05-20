import type { ComponentPropsWithoutRef } from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

// ─── Display ────────────────────────────────────────────────────────────────

export function Display({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "font-display block text-8xl font-bold tracking-tighter leading-none",
        className
      )}
      {...props}
    />
  )
}

// ─── Headings ───────────────────────────────────────────────────────────────

export function H1({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={cn(
        "font-display text-5xl font-bold tracking-tight leading-tight",
        className
      )}
      {...props}
    />
  )
}

export function H2({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn(
        "font-display text-4xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    />
  )
}

export function H3({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={cn(
        "font-display text-3xl font-semibold tracking-tight leading-snug",
        className
      )}
      {...props}
    />
  )
}

export function H4({ className, ...props }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className={cn(
        "font-sans text-2xl font-semibold leading-snug",
        className
      )}
      {...props}
    />
  )
}

export function H5({ className, ...props }: ComponentPropsWithoutRef<"h5">) {
  return (
    <h5
      className={cn(
        "font-sans text-xl font-medium leading-normal",
        className
      )}
      {...props}
    />
  )
}

export function H6({ className, ...props }: ComponentPropsWithoutRef<"h6">) {
  return (
    <h6
      className={cn(
        "font-sans text-lg font-medium leading-normal",
        className
      )}
      {...props}
    />
  )
}

// ─── Body ────────────────────────────────────────────────────────────────────

export function BodyLarge({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "font-sans text-lg font-normal leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export function Body({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "font-sans text-base font-normal leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export function BodySmall({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "font-sans text-sm font-normal leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

// ─── Utility ─────────────────────────────────────────────────────────────────

export function Caption({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "font-sans text-xs font-normal leading-normal text-[var(--color-ink-subtle)]",
        className
      )}
      {...props}
    />
  )
}

export function Label({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "font-sans text-xs font-semibold uppercase tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export function Overline({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "font-sans text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]",
        className
      )}
      {...props}
    />
  )
}
