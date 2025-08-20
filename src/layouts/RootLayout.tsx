
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
      </main>
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

export default RootLayout