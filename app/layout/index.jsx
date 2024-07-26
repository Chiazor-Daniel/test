import { Footer, NavBar } from "../assets/components";
import 'bootstrap/dist/css/bootstrap.min.css'; 
const index = ({children}) => {
  return (
    <>
        <NavBar/>
          {children}
        <Footer/>
    </>
  )
}

export default index