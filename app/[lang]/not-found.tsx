"use client"
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-7xl font-extrabold text-gray-900">404</h1>

      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </p>

      <p className="mt-2 max-w-md text-gray-600">
        Sorry, the page you are looking for does not exist or may have been moved.
      </p>

      <a
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Go back home
      </a>
    </div>
  )
}
