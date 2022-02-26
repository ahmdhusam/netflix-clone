import dynamic from "next/dynamic";

// style
import styles from "../../../styles/Layout/Header/Index.module.scss";

// components
const NavBar = dynamic(() => import("./NavBar"));

const Header = ({ children, withBtn }) => {
    return (
        <header className={styles.mainHeader}>
            <NavBar withBtn={withBtn} />
            {children}
        </header>
    );
};

export default Header;
