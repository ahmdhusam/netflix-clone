import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/Layout/Header/NavBar.module.scss";

const NavBar = ({ withBtn }) => {
    return (
        <header className={styles.mainNav}>
            <header className={styles.mainNav__logo}>
                <Link href="/">
                    <a>
                        <Image
                            src="/imgs/logo.svg"
                            alt="logo"
                            width={100}
                            height={27}
                        />
                    </a>
                </Link>
            </header>
            <main>
                <nav>
                    {withBtn && (
                        <Link href="/signin">
                            <a className={styles.mainNav__button}>Sign In</a>
                        </Link>
                    )}
                </nav>
            </main>
        </header>
    );
};

export default NavBar;
