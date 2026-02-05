import Link from "next/link"
import Container from "../shared/Container"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
