import { useState } from "react"

const Header = ({setStranica}) => {

    const [activePage, setActivePage] = useState("home");

    const handlePageChange = (str) => {
        setActivePage(str);
        setStranica(str.toUpperCase())
    }

    return (

        <header>
            <nav className="meni">
                <p className={activePage === "shop" ? "active" : ""}
                onClick={() => handlePageChange("shop")}>SHOP</p>
                <p className={activePage === "home" ? "active" : ""} 
                onClick={() => handlePageChange("home")}
                style={{fontSize: '22px'}}>HOME</p>
                <p className={activePage === "cart" ? "active" : ""} 
                onClick={() => handlePageChange("cart")}>CART</p>
            </nav>
        </header>
    )
}

export default Header