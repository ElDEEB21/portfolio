"use client"

import { useEffect, useState, useRef } from "react"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001"
const STORAGE_KEY = "portfolio_visitor_id"

function getOrCreateId(): string {
  let id = localStorage.getItem(STORAGE_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(STORAGE_KEY, id)
  }
  return id
}

interface Stats {
  total_visitors: number
  today_visitors: number
  total_visits: number
}

export function useVisitor() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [error, setError] = useState(false)
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    done.current = true

    const visitorId = getOrCreateId()
    const path = window.location.pathname

    fetch(`${API_URL}/api/visitor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitor_id: visitorId, path }),
    })
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => {
        setError(true)
        fetch(`${API_URL}/api/visitors`)
          .then((r) => r.json())
          .then((data) => setStats(data))
          .catch(() => {})
      })
  }, [])

  return { stats, error }
}
