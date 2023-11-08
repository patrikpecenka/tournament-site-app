import Navbar from "components/NavBar";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

const AppShell = () => {
  return (
    <>
      <Navbar/>
        <main>
          <Outlet/>
        </main> 
      <Footer/>
    </>
  )

}

export default AppShell