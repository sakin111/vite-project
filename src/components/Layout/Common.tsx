import Footer from "./Footer";
import Navbar from "./NavBar/NavBar";


interface Iprops {
    children: React.ReactNode
} 


const Common = ({children} : Iprops) => {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
};

export default Common;