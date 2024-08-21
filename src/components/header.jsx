import Homepage from "./homepage";
import Aboutus from "./aboutus";
import Ourservices from "./our-services";
import Welcomepage from "./welcomepage";
import Products from "./products";
import ContactUsWithFooter from "./footer";

const Header = () => {
  return (
    <div>
      <Homepage />
      <Welcomepage />
      <Aboutus />
      <Ourservices />
      <Products />
      <ContactUsWithFooter />
    </div>
  );
};

export default Header;
