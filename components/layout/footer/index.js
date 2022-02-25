//icons
import {
    FaLinkedin as LinkedInIcon,
    FaGithub as GitHubIcon,
} from "react-icons/fa";

// styles
import styles from "../../../styles/Layout/Footer/Index.module.scss";

const Footer = () => {
    const linkedinIconStyle = `${styles.footer__links_icon} ${styles.footer__links_blue}`;
    const gitHubIconStyle = `${styles.footer__links_icon} ${styles.footer__links_white}`;
    return (
        <footer className={styles.footer}>
            <header>
                <h5 className={styles.footer__title}>
                    Made By{" "}
                    <a
                        rel="noreferrer noopener"
                        className={styles.footer__links_white}
                        href="https://github.com/ahmdhusam"
                        target="_blank"
                    >
                        Ahmed Hussam
                    </a>
                </h5>
            </header>
            <main className={styles.footer__links}>
                <a
                    href="https://linkedin.com/in/ahmdhusam"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <LinkedInIcon className={linkedinIconStyle} />
                </a>
                <a
                    href="https://github.com/ahmdhusam"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <GitHubIcon className={gitHubIconStyle} />
                </a>
            </main>
        </footer>
    );
};

export default Footer;
