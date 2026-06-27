"use client"

import { useVisitor } from "@/hooks/useVisitor"
import { Users } from "lucide-react"

export function VisitorCounter() {
  const { stats, error } = useVisitor()

  if (error || !stats) return null

  return (
    <div className="flex flex-wrap gap-4 justify-center text-xs font-mono text-muted">
      <span className="flex items-center gap-1.5">
        <Users size={13} className="text-accent" />
        Unique Visitors: <strong className="text-fg">{stats.total_visitors.toLocaleString()}</strong>
      </span>
      <span>
        Today: <strong className="text-fg">{stats.today_visitors.toLocaleString()}</strong>
      </span>
      <span>
        Total Visits: <strong className="text-fg">{stats.total_visits.toLocaleString()}</strong>
      </span>
    </div>
  )
}
