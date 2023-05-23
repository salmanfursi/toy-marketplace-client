import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
    return (
      <div className="lg:mx-10">
       
        <Header></Header>
          <Outlet></Outlet>
      
        <Footer></Footer>
      </div>
    );
};

export default Main;