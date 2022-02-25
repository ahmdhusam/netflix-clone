import dynamic from "next/dynamic";
import styles from "../../../styles/Layout/Header/Index.module.scss";

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
