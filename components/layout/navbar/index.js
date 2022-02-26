import Image from "next/image";
import Link from "next/link";

// icons
import { BsList as ListIcon } from "react-icons/bs";
import {
    IoIosNotifications as NotificationIcon,
    IoIosSearch as SearchIcon,
    IoMdArrowDropdown as ArrowdownIcon,
} from "react-icons/io";

// style
import styles from "../../../styles/Layout/NavBar/Index.module.scss";

const linksList = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

export default function NavBar() {
    return (
        <header className={styles.mainHeader}>
            <header>
                <Link href="/home">
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
                    <ListIcon className={styles.listIcon} />
                    <ul className={styles.mainHeader__links}>
                        {/* imported from same file */}
                        {linksList.map((link) => (
                            <Links key={link} link={link} />
                        ))}
                    </ul>
                </nav>
            </main>
            <footer className={styles.mainHeader__user}>
                <SearchIcon className={styles.userIcon} />
                <NotificationIcon className={styles.userIcon} />
                <Image
                    className={styles.mainHeader__user_image}
                    src="/imgs/avatar.png"
                    alt="avatar"
                    width={40}
                    height={40}
                />
                <ArrowdownIcon className={styles.userIcon} />
            </footer>
        </header>
    );
}

function Links({ link }) {
    const hRef = link.toLowerCase().replace(new RegExp("[^a-zA-Z]", "gi"), "-");
    return (
        <li>
            <Link href={"/" + hRef}>
                <a>{link}</a>
            </Link>
        </li>
    );
}
