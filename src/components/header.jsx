import Homepage from "./homepage";
import Aboutus from "./aboutus";
import Ourservices from "./our-services";
import Welcomepage from "./welcomepage";
import Footer from "./footer";
import Products from "./products";

const Header = () => {
  return (
    <div>
      <Homepage />
      <Welcomepage />
      <Aboutus />
      <Ourservices />
      <Products/>
      <Footer/>
    </div>
  );
};

export default Header;
