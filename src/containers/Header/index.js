import NavMenu from "../../components/NavMenu";

import './style.css'
const Header = () => {
    return(
        <div className="header">
            <div className="logo"> some logo here</div>
            <NavMenu />
            <div className="other-items"> other items</div>
        </div>
    )
}
export default Header;