import Services from "../ services";
import About from "../about";
import Contect from "../contect";
import Login from "../login";
import Products from "../products";

const HeaderComponent = ()=>{
    return(
        <div className="header">
        <Products/>
        <Services/>
        <About/>
        <Contect/>
        <div className="login">
            <Login/>
        </div>
        </div>
    )

}
export default HeaderComponent;