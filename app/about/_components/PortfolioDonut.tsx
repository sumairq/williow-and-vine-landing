"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import {
  PORTFOLIO_BY_COUNTRY,
  PORTFOLIO_TOTAL,
} from "@/app/data/about"
import { H3, Label, BodySmall, Caption } from "@/app/components/ui/typography"

const COLORS = ["#B8985A", "#1A1917", "#6B6966", "#D4B97A", "#9C9894"]

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number }>
}) {
  if (!active || !payload?.length) return null
  const { name, value } = payload[0]
  const percent = Math.round((value / PORTFOLIO_TOTAL) * 100)
  return (
    <div className="bg-[var(--color-ink)] text-[var(--color-paper)] px-4 py-2.5 font-sans text-xs">
      <div className="uppercase tracking-widest text-[10px] text-white/60 mb-1">
        {name}
      </div>
      <div className="font-medium">
        {value} properties · {percent}%
      </div>
    </div>
  )
}

export function PortfolioDonut() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

      {/* Chart */}
      <div className="lg:col-span-7 relative">
        <ResponsiveContainer width="100%" height={360}>
          <PieChart>
            <Pie
              data={PORTFOLIO_BY_COUNTRY}
              dataKey="count"
              nameKey="country"
              innerRadius={90}
              outerRadius={150}
              paddingAngle={2}
              stroke="none"
              isAnimationActive={false}
            >
              {PORTFOLIO_BY_COUNTRY.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} cursor={false} />
          </PieChart>
        </ResponsiveContainer>

        {/* Centre label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <H3 className="text-[var(--color-ink)] leading-none">
            {PORTFOLIO_TOTAL}
          </H3>
          <Label className="text-[var(--color-ink-muted)] mt-1">
            Active listings
          </Label>
        </div>
      </div>

      {/* Legend */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        {PORTFOLIO_BY_COUNTRY.map((slice, i) => {
          const percent = Math.round((slice.count / PORTFOLIO_TOTAL) * 100)
          return (
            <div
              key={slice.country}
              className="flex items-center justify-between gap-4 pb-3 border-b border-[var(--color-border)] last:border-0"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 shrink-0"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  aria-hidden
                />
                <BodySmall className="text-[var(--color-ink)] font-medium">
                  {slice.country}
                </BodySmall>
              </div>
              <Caption className="text-[var(--color-ink-muted)] tabular-nums">
                {slice.count} · {percent}%
              </Caption>
            </div>
          )
        })}
      </div>

    </div>
  )
}
