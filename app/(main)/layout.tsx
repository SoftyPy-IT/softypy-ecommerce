import Footer from "@/app/components/layouts/Footer"
import Navbar from "@/app/components/layouts/Navbar"
// import TopBar from "@/app/components/layouts/TopBar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <TopBar /> */}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
