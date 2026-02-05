"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* 404 */}
      <h1 className="text-8xl font-extrabold tracking-tight text-foreground">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl font-semibold text-foreground">
        Page not found
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for. It might have been
        removed, renamed, or doesn’t exist.
      </p>

      {/* Action */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}
